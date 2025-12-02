const state = {
    currentYear: 1491,
    stability: 100,
    score: 0,
    currentPeriod: 1,
    difficulty: 1, // 1: Novice, 2: AP Student, 3: Historian
    playerName: "AGENT",
    questionsAnsweredInPeriod: 0,
    totalQuestionsAnswered: 0,
    streak: 0,
    lifelines: 1,
    highScore: 0,
    highScoreName: "NONE",
    hasWarpedInPeriod: false,
    usedQuestions: new Set(), // Track asked questions by text
    isProcessing: false,
    singleUnitMode: false,
    usedStimuli: new Set()
};

const DIFFICULTY_LABELS = {
    1: "NOVICE",
    2: "AP STUDENT",
    3: "HISTORIAN"
};

const periodHints = {
    1: "Focus on the interaction between Native Americans, Europeans, and Africans. Key themes: Columbian Exchange, Encomienda System, and the '3 Gs' (Gold, God, Glory).",
    2: "Distinguish between the colonial regions: New England (Puritans/Religion), Middle (Diversity/Grain), and South (Tobacco/Slavery). Also consider Mercantilism and the Navigation Acts.",
    3: "This era covers the breakdown of British-Colonial relations (1763-1776), the Revolutionary War, and the critical debate between Federalists and Anti-Federalists over the Constitution.",
    4: "Think about the Market Revolution, the rise of Mass Democracy (Jackson), and the growing sectional divide over slavery. Key reforms: Abolition, Temperance, and Women's Rights.",
    5: "Manifest Destiny led to sectional conflict. Focus on the failure of compromise, the Civil War (1861-1865), and the successes and ultimate failure of Reconstruction.",
    6: "The Gilded Age: Rapid industrialization, the rise of Big Business (Carnegie/Rockefeller), Labor Unions, Urbanization, and the Populist response to corruption.",
    7: "The US becomes a global power (Imperialism, WWI, WWII). Domestically: The Progressive Era reforms, the Roaring 20s, and the New Deal response to the Great Depression.",
    8: "The Cold War (Containment) and the Civil Rights Movement dominate this era. Also: The Great Society, Vietnam War protests, and the crisis of confidence in the 1970s.",
    9: "The Rise of Conservatism (Reagan), the end of the Cold War, the Tech Boom, and the post-9/11 War on Terror. Focus on globalization and demographic shifts."
};



// DOM Elements
const yearDisplay = document.getElementById('year-value');
const periodDisplay = document.getElementById('period-value');
const difficultyDisplay = document.getElementById('difficulty-value');
const stabilityFill = document.getElementById('stability-fill');
const stabilityValue = document.getElementById('stability-value');
const scoreDisplay = document.getElementById('score-value');
const questionArea = document.getElementById('question-area');
const messageArea = document.getElementById('message-area');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const gameContainer = document.querySelector('.game-container');
const systemStatus = document.getElementById('system-status');
const startScreen = document.getElementById('start-screen');
const mainGameContainer = document.getElementById('main-game-container');
const playerNameInput = document.getElementById('player-name');

// Boss Elements
const bossContainer = document.getElementById('boss-container');
const bossDocText = document.getElementById('boss-doc-text');
const bossDocSource = document.getElementById('boss-doc-source');
const bossQuestion = document.getElementById('boss-question');
const bossOptions = document.getElementById('boss-options');

// Stimulus Elements
const stimulusContainer = document.getElementById('stimulus-container');
const stimulusSource = document.getElementById('stimulus-source');
const stimulusText = document.getElementById('stimulus-text');
const stimulusQuestionText = document.getElementById('stimulus-question-text');
const stimulusOptions = document.getElementById('stimulus-options');

// Audio Elements
const muteBtn = document.getElementById('mute-btn');

muteBtn.addEventListener('click', () => {
    const isMuted = soundManager.toggleMute();
    muteBtn.textContent = isMuted ? "🔇 UNMUTE" : "🔊 MUTE";
});

// Add Enter key support for start
playerNameInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        soundManager.init();
        startGame();
    }
});

// Global audio unlock on first interaction
document.body.addEventListener('click', function () {
    soundManager.init();
    soundManager.startBGM();
}, { once: true });

playerNameInput.addEventListener('focus', () => {
    soundManager.init();
    // Optional: Start BGM here too if they tabbed in
    soundManager.startBGM();
});

function startGame() {
    const name = playerNameInput.value.trim().toUpperCase();
    if (name.length > 0) {
        state.playerName = name;
    }

    const missionSelect = document.getElementById('mission-select');
    const selectedMission = missionSelect.value;

    if (selectedMission === "FULL") {
        state.currentPeriod = 1;
        state.singleUnitMode = false;
    } else {
        state.currentPeriod = parseInt(selectedMission);
        state.singleUnitMode = true;
    }

    // Hide start screen, show game
    startScreen.classList.add('hidden');
    mainGameContainer.classList.remove('hidden');

    // Init game
    initGame();

    // Init Audio
    soundManager.init();
    soundManager.startBGM();
}

function loadHighScore() {
    const saved = localStorage.getItem('chronoTrailHighScore');
    if (saved) {
        try {
            // Try to parse as JSON object { score, name }
            const parsed = JSON.parse(saved);
            if (typeof parsed === 'object' && parsed !== null) {
                state.highScore = parsed.score || 0;
                state.highScoreName = parsed.name || "UNKNOWN";
            } else {
                // Legacy: just a number
                state.highScore = parseInt(saved, 10);
                state.highScoreName = "LEGACY";
            }
        } catch (e) {
            // Fallback for legacy plain number
            state.highScore = parseInt(saved, 10);
            state.highScoreName = "LEGACY";
        }
    }
    // Update start screen display if it exists
    const startHighScore = document.getElementById('start-high-score');
    if (startHighScore) {
        startHighScore.textContent = `HIGH SCORE: ${state.highScore} (${state.highScoreName})`;
    }
}

// Load immediately
loadHighScore();

function initGame() {
    try {
        console.log("Starting initialization...");
        // Update status with player name
        systemStatus.textContent = `ONLINE [${state.playerName}]`;

        updateDisplay();

        // Safety Timeout: If not loaded in 5 seconds, force load
        const safetyTimeout = setTimeout(() => {
            console.warn("Initialization took too long. Forcing start.");
            if (!questionArea.classList.contains('hidden')) return; // Already loaded

            messageArea.innerHTML = `<p style="color: var(--alert-color)">INITIALIZATION LAG DETECTED.</p><p>BYPASSING CHRONO-VISOR...</p>`;
            messageArea.classList.remove('hidden'); // Ensure visible
            setTimeout(() => {
                messageArea.classList.add('hidden');
                questionArea.classList.remove('hidden');
                loadQuestion();
            }, 1000);
        }, 5000);

        // Start loading
        setTimeout(() => {
            gameContainer.style.boxShadow = "0 0 20px var(--text-color), inset 0 0 20px rgba(57, 255, 20, 0.2)";
            // Only load if not already loaded by safety timeout (unlikely but safe)
            if (questionArea.classList.contains('hidden')) {
                loadQuestion();
            }
        }, 1000);

    } catch (e) {
        console.error("Init Game Error:", e);
        throw e; // Re-throw to trigger window.onerror
    }
}



function updateDisplay() {
    yearDisplay.textContent = state.currentYear;
    periodDisplay.textContent = `P${state.currentPeriod}`;

    // Update Difficulty Display
    difficultyDisplay.textContent = DIFFICULTY_LABELS[state.difficulty];
    difficultyDisplay.className = 'value'; // Reset
    if (state.difficulty === 1) difficultyDisplay.style.color = "var(--text-color)";
    if (state.difficulty === 2) difficultyDisplay.style.color = "var(--alert-color)";
    if (state.difficulty === 3) difficultyDisplay.style.color = "var(--danger-color)";

    stabilityFill.style.width = `${state.stability}%`;
    stabilityValue.textContent = `${state.stability}%`;

    if (state.stability < 40) {
        stabilityFill.style.backgroundColor = 'var(--danger-color)';
        systemStatus.textContent = "CRITICAL";
        systemStatus.style.color = "var(--danger-color)";
    } else if (state.stability < 70) {
        stabilityFill.style.backgroundColor = 'var(--alert-color)';
        systemStatus.textContent = "UNSTABLE";
        systemStatus.style.color = "var(--alert-color)";
    } else {
        stabilityFill.style.backgroundColor = 'var(--text-color)';
        systemStatus.textContent = `ONLINE [${state.playerName}]`;
        systemStatus.style.color = "var(--text-color)";
    }

    scoreDisplay.textContent = state.score;

    // Streak visual (optional, can be added to DOM later)
    if (state.streak > 1) {
        scoreDisplay.style.color = "var(--text-color)";
        scoreDisplay.style.textShadow = "0 0 10px var(--text-color)";
    } else {
        scoreDisplay.style.textShadow = "none";
    }
}

function loadQuestion() {
    // Ensure question area is visible (safety check)
    // Ensure question area is visible (safety check)
    if (questionArea.classList.contains('hidden')) {
        questionArea.classList.remove('hidden');
        bossContainer.classList.add('hidden');
        stimulusContainer.classList.add('hidden');
        document.getElementById('time-warp-container').classList.add('hidden');
        document.getElementById('time-capsule-container').classList.add('hidden');
    }

    // Check for game over due to stability
    if (state.stability <= 0) {
        endGame(false);
        return;
    }

    // Check if we finished the game
    if (state.currentPeriod > 9) {
        endGame(true);
        return;
    }

    // Time Warp Logic (Once per Period)
    // 1. If already happened this period, skip.
    // 2. If we are at question 14 (index 13) and it hasn't happened, FORCE it.
    // 3. Otherwise, random chance (20%).

    if (!state.hasWarpedInPeriod) {
        // This logic is called when a new question is about to be loaded.
        // state.questionsAnsweredInPeriod will reflect the number of questions *already* answered in the current period.
        // So, if state.questionsAnsweredInPeriod is 8, we are about to load the 9th question.
        // If state.questionsAnsweredInPeriod is 9, we are about to load the 10th question.

        const questionLimit = state.singleUnitMode ? 25 : 15;

        if (state.questionsAnsweredInPeriod < questionLimit) { // Only trigger if still in the current period
            let triggerWarp = false;

            if (state.questionsAnsweredInPeriod >= (questionLimit - 2)) { // Force it near the end
                triggerWarp = true;
            } else if (Math.random() < 0.20) { // 20% chance for earlier questions
                triggerWarp = true;
            }

            if (triggerWarp) {
                state.hasWarpedInPeriod = true;
                setTimeout(() => {
                    initTimeWarp(); // Assuming initTimeWarp is defined elsewhere
                }, 1500);
                return; // Stop normal question loading
            }
        }
    }

    // Time Capsule Logic (Random Chance: 5%)
    if (Math.random() < 0.05 && state.stability < 100) {
        setTimeout(() => {
            initTimeCapsule();
        }, 1500);
        return;
    }

    // Get current period data
    const periodData = curriculum.find(p => p.period === state.currentPeriod);

    // Filter questions by current difficulty AND not used
    let potentialQuestions = periodData.questions.filter(q =>
        q.diff === state.difficulty && !state.usedQuestions.has(q.q)
    );

    // If no questions of exact difficulty, fallback to any unused in period
    if (potentialQuestions.length === 0) {
        potentialQuestions = periodData.questions.filter(q => !state.usedQuestions.has(q.q));
    }

    // If STILL no questions (exhausted period), clear used for this period or allow repeats
    // For now, let's just reset the used questions for this period to avoid soft lock
    if (potentialQuestions.length === 0) {
        console.warn("Questions exhausted for period " + state.currentPeriod + ". Resetting used list for this period.");
        // We can't easily remove just this period's questions from the Set without iterating.
        // Simpler approach: Allow repeats from full pool
        potentialQuestions = periodData.questions;
    }

    // Pick a random question from the potential ones
    const selectedQ = potentialQuestions[Math.floor(Math.random() * potentialQuestions.length)];

    // Mark as used
    state.usedQuestions.add(selectedQ.q);
    localStorage.setItem('chronoTrailUsedQuestions', JSON.stringify([...state.usedQuestions]));

    // Set current questions
    state.currentQuestions = [selectedQ]; // Just one for now, logic was for multiple but we do one at a time

    // Display
    state.currentYear = selectedQ.year;
    updateDisplay();

    displayQuestionText(selectedQ);
}

function displayQuestionText(q) {
    // Typewriter effect for question
    questionText.innerHTML = `<span class="period-tag">[P${state.currentPeriod}]</span><br>`;
    questionText.classList.add('typing');

    let i = 0;
    const text = q.q;
    const speed = 30; // ms per char

    function typeWriter() {
        if (i < text.length) {
            questionText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            questionText.classList.remove('typing');
            showOptions(q);
        }
    }

    // Clear options while typing
    optionsContainer.innerHTML = '';
    typeWriter();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showOptions(q) {
    state.isProcessing = false;
    optionsContainer.innerHTML = '';

    let shuffledOptions = shuffleArray([...q.options]);

    // Fix: Ensure "All of the above" is always last
    const allAboveIndex = shuffledOptions.findIndex(opt => opt.toLowerCase() === "all of the above");
    if (allAboveIndex !== -1) {
        const allAbove = shuffledOptions.splice(allAboveIndex, 1)[0];
        shuffledOptions.push(allAbove);
    }

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(opt, q);
        optionsContainer.appendChild(btn);
    });

    // Add Lifeline Button if available
    if (state.lifelines > 0) {
        const lifelineBtn = document.createElement('button');
        lifelineBtn.textContent = "LIFELINE: 50/50";
        lifelineBtn.style.borderColor = "var(--alert-color)";
        lifelineBtn.style.color = "var(--alert-color)";
        lifelineBtn.style.marginTop = "20px";
        lifelineBtn.onclick = () => useLifeline(q, lifelineBtn);
        optionsContainer.appendChild(lifelineBtn);
    }
}

function useLifeline(q, btn) {
    if (state.lifelines <= 0) return;

    state.lifelines--;
    btn.remove();

    // Find incorrect options
    const incorrectOptions = q.options.filter(opt => opt !== q.ans);

    // Randomly select 2 incorrect options to remove (if there are 4 options)
    // If there are 4 options, remove 2. If 3, remove 1? Standard is remove 2 from 4.
    // Let's just keep the correct answer and one random incorrect answer.
    const randomIncorrect = incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];
    const keptOptions = [q.ans, randomIncorrect];

    // Filter buttons
    const buttons = optionsContainer.querySelectorAll('button');
    buttons.forEach(b => {
        if (!keptOptions.includes(b.textContent)) {
            b.style.display = 'none';
        }
    });

    alert("ARCHIVE DATA ACCESSED. PROBABILITY RECALCULATED.");
}

function handleAnswer(selected, q) {
    if (state.isProcessing) return;
    state.isProcessing = true;

    if (selected === q.ans) {
        // Correct
        state.streak++;
        const streakMultiplier = 1 + (state.streak * 0.1); // 10% bonus per streak
        state.score += Math.floor(100 * state.difficulty * streakMultiplier);

        // Increase difficulty if not max
        if (state.difficulty < 3) state.difficulty++;

        // Visual feedback
        gameContainer.style.boxShadow = "0 0 50px var(--text-color)";

        // Audio feedback
        soundManager.playCorrect();

        handleProgression();

    } else {
        // Wrong
        state.streak = 0;
        state.stability -= 20;

        // Decrease difficulty if not min
        if (state.difficulty > 1) state.difficulty--;

        triggerGlitch();
        soundManager.playWrong();

        // Show Explanation instead of immediate progression
        showExplanation(q, selected);
    }
}

function handleProgression() {
    state.questionsAnsweredInPeriod++;

    const questionLimit = state.singleUnitMode ? 25 : 15;

    // Check if period is done
    if (state.questionsAnsweredInPeriod >= questionLimit) {
        // Check for Boss
        const currentPeriodData = curriculum.find(p => p.period === state.currentPeriod);
        if (currentPeriodData.boss) {
            setTimeout(() => {
                initBossBattle(currentPeriodData.boss);
            }, 500);
            return;
        }

        proceedToNextPeriod();
    } else {
        // Check for Stimulus Trigger
        // Trigger at Question 5 (Standard) AND Question 15 (Single Unit Bonus)
        let triggerStimulus = false;
        if (state.questionsAnsweredInPeriod === 5) triggerStimulus = true;
        if (state.singleUnitMode && state.questionsAnsweredInPeriod === 15) triggerStimulus = true;

        if (triggerStimulus) {
            // Find all stimuli for this period
            const periodStimuli = stimulusData.filter(s => s.period === state.currentPeriod);

            if (periodStimuli.length > 0) {
                // Filter out used stimuli to avoid repetition
                if (!state.usedStimuli) state.usedStimuli = new Set();

                let availableStimuli = periodStimuli.filter(s => !state.usedStimuli.has(s.id));

                // If all used, reset pool for this period (or just pick from all)
                if (availableStimuli.length === 0) {
                    availableStimuli = periodStimuli;
                }

                // Pick random
                const randomStimulus = availableStimuli[Math.floor(Math.random() * availableStimuli.length)];

                // Mark as used
                state.usedStimuli.add(randomStimulus.id);

                setTimeout(() => {
                    initStimulusMode(randomStimulus);
                }, 500);
                return;
            }
        }

        // Next question in same period
        setTimeout(() => {
            gameContainer.style.boxShadow = "0 0 20px var(--text-color), inset 0 0 20px rgba(57, 255, 20, 0.2)";
            loadQuestion();
        }, 500);
    }
}

function proceedToNextPeriod() {
    // Check if Single Unit Mode
    if (state.singleUnitMode) {
        endGame(true);
        return;
    }

    state.currentPeriod++;
    state.questionsAnsweredInPeriod = 0;
    state.hasWarpedInPeriod = false;

    if (state.currentPeriod > 9) {
        // Game Over (Win)
        setTimeout(() => {
            endGame(true);
        }, 500);
        return;
    }

    const nextPeriod = curriculum.find(p => p.period === state.currentPeriod);
    gameContainer.style.boxShadow = "0 0 20px var(--text-color), inset 0 0 20px rgba(57, 255, 20, 0.2)";
    showPeriodTransition(nextPeriod.period, nextPeriod.name, () => {
        loadQuestion();
    });
}

function initBossBattle(bossData) {
    questionArea.classList.add('hidden');
    bossContainer.classList.remove('hidden');

    // Populate Boss UI
    state.isProcessing = false;
    bossDocText.textContent = bossData.text;
    bossDocSource.textContent = `// SOURCE: ${bossData.source}`;
    bossQuestion.textContent = bossData.question;

    bossOptions.innerHTML = '';
    const shuffledBossOptions = shuffleArray([...bossData.options]);
    shuffledBossOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => handleBossAnswer(opt, bossData.ans);
        bossOptions.appendChild(btn);
    });

    // Visual Alert
    gameContainer.style.boxShadow = "0 0 50px var(--danger-color), inset 0 0 50px rgba(255, 0, 0, 0.2)";
    systemStatus.textContent = "ANOMALY DETECTED";
    systemStatus.style.color = "var(--danger-color)";

    // Audio feedback
    soundManager.playBossStart();
}

function handleBossAnswer(selected, correct) {
    if (state.isProcessing) return;
    state.isProcessing = true;

    if (selected === correct) {
        // Boss Defeated
        state.score += 500; // Big bonus
        state.stability = 100; // Restore stability
        alert("ANOMALY RESOLVED. TIMELINE STABILIZED.");

        bossContainer.classList.add('hidden');
        soundManager.playCorrect();
        proceedToNextPeriod();
    } else {
        // Failed Boss
        state.stability -= 40; // Big hit
        state.score -= 100;
        triggerGlitch();
        soundManager.playWrong();

        if (state.stability <= 0) {
            triggerLoopKick();
        } else {
            alert("INCORRECT ANALYSIS. TEMPORAL DAMAGE SUSTAINED.");
            // For now, let them retry or just force proceed?
            // Let's force proceed with damage to keep flow moving, or maybe retry?
            // Let's allow retry but with penalty.
            // Actually, let's just proceed to next period but with damage.
            bossContainer.classList.add('hidden');
            proceedToNextPeriod();
        }
    }
}

function initTimeWarp() {
    questionArea.classList.add('hidden');
    const warpContainer = document.getElementById('time-warp-container');
    warpContainer.classList.remove('hidden');

    // Pick random presidential question
    const q = presidentialTrivia[Math.floor(Math.random() * presidentialTrivia.length)];

    const warpQuestion = document.getElementById('warp-question');
    const warpOptions = document.getElementById('warp-options');

    warpQuestion.textContent = q.question;
    warpOptions.innerHTML = '';
    state.isProcessing = false;

    const shuffledWarpOptions = shuffleArray([...q.options]);
    shuffledWarpOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => handleWarpAnswer(opt === q.answer);
        warpOptions.appendChild(btn);
    });
}

function handleWarpAnswer(isCorrect) {
    if (state.isProcessing) return;
    state.isProcessing = true;

    const warpContainer = document.getElementById('time-warp-container');

    if (isCorrect) {
        state.stability += 10;
        if (state.stability > 100) state.stability = 100;
        alert("ANOMALY STABILIZED. TIMELINE SECURE.");
        soundManager.playCorrect();
    } else {
        state.stability -= 20;
        alert("TIMELINE FRACTURED. CRITICAL ERROR.");
        soundManager.playWrong();
        triggerGlitch();
    }

    warpContainer.classList.add('hidden');
    questionArea.classList.remove('hidden');

    // Resume game flow
    handleProgression();
}

// Time Capsule Logic
function initTimeCapsule() {
    questionArea.classList.add('hidden');
    const capsuleContainer = document.getElementById('time-capsule-container');
    capsuleContainer.classList.remove('hidden');

    // Pick a random question from the current period (reuse existing pool)
    const periodData = curriculum.find(p => p.period === state.currentPeriod);
    const q = periodData.questions[Math.floor(Math.random() * periodData.questions.length)];

    const capsuleQuestion = document.getElementById('capsule-question');
    const capsuleOptions = document.getElementById('capsule-options');

    capsuleQuestion.textContent = "BONUS: " + q.q;
    capsuleOptions.innerHTML = '';
    state.isProcessing = false;

    const shuffledOptions = shuffleArray([...q.options]);
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => handleCapsuleAnswer(opt === q.ans);
        capsuleOptions.appendChild(btn);
    });
}

function handleCapsuleAnswer(isCorrect) {
    if (state.isProcessing) return;
    state.isProcessing = true;

    const capsuleContainer = document.getElementById('time-capsule-container');

    if (isCorrect) {
        state.stability += 25;
        if (state.stability > 100) state.stability = 100;
        alert("CAPSULE SECURED. STABILITY RESTORED.");
        soundManager.playCorrect();
    } else {
        alert("CAPSULE SEALED. NO PENALTY.");
        // No penalty for wrong answer
    }

    capsuleContainer.classList.add('hidden');
    questionArea.classList.remove('hidden');
    handleProgression();
}

// Explanation Modal Logic
function showExplanation(q, selectedAnswer) {
    const modal = document.getElementById('explanation-modal');
    const explanationText = document.getElementById('explanation-text');
    const contextText = document.getElementById('historical-context');

    explanationText.innerHTML = `You selected: <span style="color: var(--danger-color)">${selectedAnswer}</span><br><br>
                                 <span style="color: var(--alert-color)">INCORRECT ANALYSIS</span>`;

    let contextContent = "";
    if (q.explanation) {
        contextContent = `<strong>Analysis:</strong><br>${q.explanation}`;
    } else {
        const hint = periodHints[state.currentPeriod] || "Review the historical timeline.";
        contextContent = `<strong>Historical Context (${q.year}):</strong><br>${hint}`;
    }
    contextText.innerHTML = `${contextContent}<br><br><em>Consider the social, political, and economic conditions of this era.</em>`;

    modal.classList.remove('hidden');
}

function closeExplanation() {
    const modal = document.getElementById('explanation-modal');
    modal.classList.add('hidden');

    if (state.stability <= 0) {
        triggerLoopKick();
    } else {
        handleProgression();
    }
}

// Stimulus Mode State
let currentStimulus = null;
let currentStimulusQuestionIndex = 0;

function initStimulusMode(stimulus) {
    questionArea.classList.add('hidden');
    stimulusContainer.classList.remove('hidden');

    currentStimulus = stimulus;
    currentStimulusQuestionIndex = 0;

    stimulusSource.textContent = `SOURCE: ${stimulus.source} (${stimulus.year})`;
    stimulusText.textContent = stimulus.content;

    loadStimulusQuestion();
}

function loadStimulusQuestion() {
    const q = currentStimulus.questions[currentStimulusQuestionIndex];
    stimulusQuestionText.textContent = q.q;
    stimulusOptions.innerHTML = '';
    state.isProcessing = false;

    const shuffledStimOptions = shuffleArray([...q.options]);
    shuffledStimOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => handleStimulusAnswer(opt, q.ans);
        stimulusOptions.appendChild(btn);
    });
}

function handleStimulusAnswer(selected, correct) {
    if (state.isProcessing) return;
    state.isProcessing = true;

    if (selected === correct) {
        state.score += 150 * state.difficulty; // Higher points for analysis
        state.streak++;
        updateStability(5);
        soundManager.playCorrect();
        // Visual feedback could be added here
    } else {
        state.streak = 0;
        state.stability -= 15;
        soundManager.playWrong();
        triggerGlitch();
    }

    updateDisplay();

    currentStimulusQuestionIndex++;

    if (currentStimulusQuestionIndex < currentStimulus.questions.length) {
        setTimeout(loadStimulusQuestion, 1000);
    } else {
        // Stimulus set complete
        setTimeout(() => {
            stimulusContainer.classList.add('hidden');
            questionArea.classList.remove('hidden');
            handleProgression(); // Move to next step in game loop
        }, 1000);
    }
}

function showPeriodTransition(periodNum, periodName, callback) {
    questionArea.classList.add('hidden');
    messageArea.classList.remove('hidden');
    messageArea.innerHTML = `<h1>ENTERING PERIOD ${periodNum}</h1><h2>${periodName}</h2><p>Loading temporal data...</p>`;

    setTimeout(() => {
        messageArea.classList.add('hidden');
        questionArea.classList.remove('hidden');
        callback();
    }, 2000);
}

function updateStability(amount) {
    state.stability += amount;
    if (state.stability > 100) state.stability = 100;
    if (state.stability < 0) state.stability = 0;
}

function triggerGlitch() {
    gameContainer.classList.add('glitch-active');
    setTimeout(() => {
        gameContainer.classList.remove('glitch-active');
    }, 500);
}

function triggerLoopKick() {
    // Logic: Reset to start of current period or previous period?
    // Let's restart the current period
    state.questionsAnsweredInPeriod = 0;
    state.stability = 50;
    state.difficulty = 1; // Reset difficulty to easy

    alert("CRITICAL FAILURE! CHRONO-STABILITY COLLAPSED. RESTARTING PERIOD SEQUENCE.");

    bossContainer.classList.add('hidden'); // Hide boss if active
    questionArea.classList.remove('hidden'); // SHOW QUESTION AREA!
    updateDisplay();
    loadQuestion();
}

function saveHighScore() {
    if (state.score > state.highScore) {
        state.highScore = state.score;
        state.highScoreName = state.playerName;
        const saveObj = {
            score: state.highScore,
            name: state.highScoreName
        };
        localStorage.setItem('chronoTrailHighScore', JSON.stringify(saveObj));
        return true; // New record
    }
    return false;
}

function endGame(victory) {
    // Ensure UI is reset
    questionArea.classList.remove('hidden');
    bossContainer.classList.add('hidden');
    stimulusContainer.classList.add('hidden');
    document.getElementById('time-warp-container').classList.add('hidden');
    document.getElementById('time-capsule-container').classList.add('hidden');

    const isNewRecord = saveHighScore();
    const highScoreMsg = isNewRecord ?
        `<p class="new-record">NEW HIGH SCORE! (${state.score})</p>` :
        `<p>High Score: ${state.highScore} (${state.highScoreName})</p>`;

    let victoryTitle = "TIMELINE RESTORED... UNFORTUNATELY.";
    let victoryText = `<p>Wow. You actually made it back to the present.</p>
         <p>Look around... are you <em>sure</em> this was a good idea?</p>`;

    if (state.singleUnitMode && victory) {
        victoryTitle = `PERIOD ${state.currentPeriod} SECURED`;
        victoryText = `<p>Temporal anomaly in this sector has been resolved.</p>
        <p>Excellent work, Agent.</p>`;
    }

    questionArea.innerHTML = victory ?
        `<h1>${victoryTitle}</h1>
         ${victoryText}
         <p>Final Score: ${state.score}</p>
         ${highScoreMsg}
         <button onclick="location.reload()">RETURN TO BASE</button>` :
        `<h1>MISSION FAILED</h1><p>Lost in time.</p><p>Final Score: ${state.score}</p>${highScoreMsg}<button onclick="location.reload()">TRY AGAIN</button>`;

    if (victory) {
        soundManager.playWin();
    } else {
        soundManager.playGameOver();
    }
    soundManager.stopBGM();
}

window.onerror = function (msg, url, line, col, error) {
    const errorMsg = `ERROR: ${msg}\nLINE: ${line}\nSTACK: ${error ? error.stack : 'N/A'}`;
    console.error(errorMsg);

    const messageArea = document.getElementById('message-area');
    if (messageArea) {
        messageArea.classList.remove('hidden');
        // Ensure it's on top
        messageArea.style.zIndex = "9999";
        messageArea.innerHTML += `<div style="color: var(--danger-color); border: 1px solid var(--danger-color); padding: 10px; margin-top: 10px; text-align: left; background: rgba(0,0,0,0.9);">
            <strong>SYSTEM FAILURE:</strong><br>${msg}<br>
            <small>@ ${url.split('/').pop()}:${line}</small><br>
            <pre style="font-size: 0.8rem; overflow: auto; max-height: 100px;">${error ? error.stack : ''}</pre>
            <br>
            <button onclick="hardReset()" style="width: auto; min-width: auto; padding: 5px;">INITIATE HARD RESET</button>
        </div>`;
    }
};

function hardReset() {
    if (confirm("WARNING: THIS WILL WIPE ALL CHRONO-DATA (SCORES & HISTORY). PROCEED?")) {
        localStorage.clear();
        location.reload();
    }
}

// Hard Reset Shortcut (Ctrl+Shift+R is usually browser reload, let's use Ctrl+Shift+H)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        hardReset();
    }
});

// Auto-start removed. Game starts via button.
// try {
//     initGame();
// } catch (e) {
//     alert("Init Error: " + e.message);
// }

