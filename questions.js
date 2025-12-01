// Full APUSH Curriculum with Difficulty Tiers
// Each period has questions tagged with difficulty (1, 2, 3)
const curriculum = [
    {
        period: 1,
        range: "1491-1607",
        name: "The Meeting of Cultures",
        questions: [
            // Level 1
            { year: 1491, diff: 1, q: "Which crop was the foundation of the complex societies in the American Southwest (Pueblo)?", options: ["Tobacco", "Maize (Corn)", "Wheat", "Potatoes"], ans: "Maize (Corn)" },
            { year: 1512, diff: 1, q: "The Encomienda System was primarily used by the Spanish to:", options: ["Convert Natives", "Extract labor", "Trade", "Govern"], ans: "Extract labor", explanation: "The Encomienda System was a labor system instituted by the Spanish crown in the American colonies. In this system, a Spanish encomendero was granted a number of native laborers who would pay tributes to him in exchange for his protection." },
            { year: 1588, diff: 1, q: "The defeat of the Spanish Armada signaled the rise of which naval power?", options: ["France", "Portugal", "England", "Netherlands"], ans: "England", explanation: "The defeat of the Spanish Armada in 1588 is often seen as the beginning of England's rise as a major naval power, paving the way for its future colonial empire." },
            // Level 2
            { year: 1550, diff: 2, q: "Bartolomé de Las Casas differed from Sepúlveda in that he argued:", options: ["Natives were natural slaves", "Natives had souls and rights", "Spain should leave the Americas", "Gold was unimportant"], ans: "Natives had souls and rights", explanation: "Las Casas argued that Native Americans were free men in the natural order and deserved the same treatment as others, directly opposing Sepúlveda's view that they were 'natural slaves'." },
            { year: 1492, diff: 2, q: "The 'Columbian Exchange' refers to:", options: ["The trade of gold for slaves", "The biological transfer of plants/animals/diseases", "The treaty between Spain and Portugal", "The first stock market"], ans: "The biological transfer of plants/animals/diseases", explanation: "The Columbian Exchange was the widespread transfer of plants, animals, culture, human populations, technology, diseases, and ideas between the Americas, West Africa, and the Old World in the 15th and 16th centuries." },
            { year: 1600, diff: 2, q: "Which European power had the most cooperative relationship with Native Americans via the fur trade?", options: ["Spain", "England", "France", "Portugal"], ans: "France", explanation: "The French focused on the fur trade and often lived among Native Americans, learning their languages and customs, which fostered more cooperative relationships compared to other European powers." },
            // Level 3
            { year: 1500, diff: 3, q: "Which factor most directly facilitated the Spanish conquest of the Aztecs?", options: ["Superior naval tactics", "Smallpox and disease", "The horse", "The printing press"], ans: "Smallpox and disease", explanation: "While military technology played a role, the introduction of smallpox devastated the Aztec population, killing millions and severely weakening their ability to resist the Spanish conquest." },
            { year: 1540, diff: 3, q: "The Pueblo Revolt of 1680 was a response to:", options: ["Forced labor", "Suppression of native religion", "Land theft", "All of the above"], ans: "All of the above", explanation: "The Pueblo Revolt was a successful uprising against Spanish rule in New Mexico, driven by forced labor (encomienda), the suppression of traditional religious practices, and the seizure of land." },
            { year: 1493, diff: 3, q: "The Treaty of Tordesillas (1494) demonstrates:", options: ["The power of the Pope in international affairs", "The decline of Spain", "The rise of Protestantism", "The unity of Europe"], ans: "The power of the Pope in international affairs", explanation: "The Treaty of Tordesillas, brokered by the Pope, divided the newly discovered lands outside Europe between Portugal and Spain, demonstrating the Pope's significant influence in international politics at the time." },
            // Expanded
            { year: 1520, diff: 2, q: "The 'Casta System' in Spanish America was defined by:", options: ["Wealth", "Education", "Race and Birth", "Military Rank"], ans: "Race and Birth" },
            { year: 1550, diff: 2, q: "Which of the following was a major consequence of the Columbian Exchange for Europe?", options: ["Population growth due to new crops", "Massive population decline", "Introduction of smallpox", "End of feudalism"], ans: "Population growth due to new crops" },
            { year: 1600, diff: 3, q: "Maroon communities in the Caribbean and Brazil were formed by:", options: ["Escaped slaves", "Spanish friars", "French fur traders", "Displaced natives"], ans: "Escaped slaves" },
            // Bulk Expansion
            { year: 1513, diff: 1, q: "Juan Ponce de León is best known for exploring:", options: ["Florida", "California", "New York", "Texas"], ans: "Florida" },
            { year: 1542, diff: 2, q: "The 'New Laws' of 1542 were an attempt by Spain to:", options: ["Reform the Encomienda system", "Increase taxes", "Expel Jews", "Invade England"], ans: "Reform the Encomienda system" },
            { year: 1585, diff: 1, q: "The 'Lost Colony' of Roanoke was established by:", options: ["England", "France", "Spain", "Portugal"], ans: "England" },
            { year: 1598, diff: 3, q: "The Acoma Massacre was a conflict between the Spanish and the:", options: ["Pueblo Indians", "Aztecs", "Inca", "Iroquois"], ans: "Pueblo Indians" },
            { year: 1494, diff: 2, q: "The Treaty of Tordesillas divided the New World between:", options: ["Spain and Portugal", "England and France", "Spain and England", "France and Portugal"], ans: "Spain and Portugal" },
            { year: 1534, diff: 1, q: "Jacques Cartier explored the St. Lawrence River for:", options: ["France", "England", "Spain", "Netherlands"], ans: "France" },
            { year: 1603, diff: 2, q: "Samuel de Champlain is known as the 'Father of':", options: ["New France", "New England", "New Spain", "New Netherland"], ans: "New France" },
            { year: 1565, diff: 1, q: "The first permanent European settlement in the future US was:", options: ["St. Augustine", "Jamestown", "Plymouth", "Santa Fe"], ans: "St. Augustine" },
            { year: 1570, diff: 3, q: "The Iroquois Confederacy was a political alliance of tribes in:", options: ["New York", "Florida", "California", "Texas"], ans: "New York" },
            { year: 1519, diff: 1, q: "Hernán Cortés is famous for conquering the:", options: ["Aztecs", "Incas", "Mayans", "Cherokee"], ans: "Aztecs" },
            { year: 1532, diff: 1, q: "Francisco Pizarro conquered the:", options: ["Inca Empire", "Aztec Empire", "Maya Empire", "Pueblo"], ans: "Inca Empire" },
            { year: 1550, diff: 3, q: "The Valladolid Debate concerned the:", options: ["Moral treatment of Native Americans", "Border between Spain and Portugal", "Taxation of colonies", "Slavery of Africans"], ans: "Moral treatment of Native Americans" },
            // New Questions
            { year: 1570, diff: 2, q: "Which tribe formed a Great League of Peace in present-day NY?", options: ["Iroquois", "Cherokee", "Pueblo", "Sioux"], ans: "Iroquois" },
            { year: 1492, diff: 1, q: "Columbus was sponsored by which country?", options: ["Spain", "Portugal", "Italy", "England"], ans: "Spain" },
            { year: 1521, diff: 2, q: "Tenochtitlan was the capital of the:", options: ["Aztecs", "Incas", "Mayans", "Olmecs"], ans: "Aztecs" },
            { year: 1598, diff: 3, q: "Juan de Oñate is infamous for his brutal treatment of the:", options: ["Acoma Pueblo", "Apache", "Navajo", "Hopi"], ans: "Acoma Pueblo" },
            { year: 1500, diff: 2, q: "The primary motive for Portuguese exploration was:", options: ["Spices and Gold", "Land", "Religion", "Slaves"], ans: "Spices and Gold" },
            { year: 1540, diff: 1, q: "Coronado explored the American Southwest looking for:", options: ["Seven Cities of Gold", "Fountain of Youth", "Northwest Passage", "El Dorado"], ans: "Seven Cities of Gold" }
        ],
        boss: {
            title: "REPORT: THE DESTRUCTION OF THE INDIES",
            source: "Bartolomé de Las Casas, 1552",
            text: "\"Into and among these gentle sheep, endowed by their Maker and Creator with all the qualities aforesaid, did creep the Spaniards, who no sooner had knowledge of these people than they became like fierce wolves and tigers and lions who have gone many days without food or nourishment...\"",
            question: "This passage was primarily written to:",
            options: ["Justify the conquest of the Aztecs", "Condemn Spanish brutality and the Encomienda system", "Promote the African slave trade", "Encourage conversion to Protestantism"],
            ans: "Condemn Spanish brutality and the Encomienda system"
        }
    },
    {
        period: 2,
        range: "1607-1754",
        name: "Colonial America",
        questions: [
            // Level 1
            { year: 1607, diff: 1, q: "The primary goal of Jamestown was:", options: ["Religion", "Profit", "Defense", "Diplomacy"], ans: "Profit", explanation: "Jamestown was established by the Virginia Company of London as a joint-stock company with the primary goal of finding gold and generating profit for investors." },
            { year: 1620, diff: 1, q: "The Mayflower Compact established:", options: ["Freedom of religion", "Self-government", "Slavery", "Trade with Indians"], ans: "Self-government", explanation: "The Mayflower Compact was the first agreement for self-government to be created and enforced in America, signed by 41 English colonists on the ship Mayflower." },
            { year: 1692, diff: 1, q: "The Salem Witch Trials occurred in:", options: ["Virginia", "Massachusetts", "Pennsylvania", "New York"], ans: "Massachusetts", explanation: "The Salem Witch Trials took place in colonial Massachusetts between 1692 and 1693, reflecting the intense religious and social tensions of the time." },
            // Level 2
            { year: 1676, diff: 2, q: "Bacon's Rebellion led to a shift from:", options: ["Indentured servitude to slavery", "Slavery to paid labor", "Farming to industry", "Monarchy to democracy"], ans: "Indentured servitude to slavery", explanation: "Bacon's Rebellion (1676) highlighted the instability of the indentured servant system, leading wealthy planters to shift towards a more permanent and controllable labor source: enslaved Africans." },
            { year: 1739, diff: 2, q: "The First Great Awakening was a reaction against:", options: ["The Enlightenment", "Catholicism", "Slavery", "The King"], ans: "The Enlightenment", explanation: "The First Great Awakening was a religious revival that emphasized emotional spirituality and personal revelation, largely as a reaction against the rationalism of the Enlightenment." },
            { year: 1649, diff: 2, q: "The Maryland Toleration Act granted religious freedom to:", options: ["All religions", "All Christians", "Only Catholics", "Only Protestants"], ans: "All Christians", explanation: "The Maryland Toleration Act of 1649 was a law mandating religious tolerance for Trinitarian Christians, intended to protect the Catholic minority in Maryland." },
            // Level 3
            { year: 1630, diff: 3, q: "Winthrop's 'City upon a Hill' sermon emphasized:", options: ["Individual liberty", "Communal religious covenant", "Separation of church and state", "Economic prosperity"], ans: "Communal religious covenant", explanation: "John Winthrop's sermon emphasized that the Massachusetts Bay Colony should be a model of Christian charity and community, bound by a covenant with God to work together." },
            { year: 1686, diff: 3, q: "The Dominion of New England was an attempt by Britain to:", options: ["Grant independence", "Enforce the Navigation Acts", "Abolish slavery", "Expand territory"], ans: "Enforce the Navigation Acts", explanation: "The Dominion of New England was an administrative union created by royal authority to tighten control over the colonies and more strictly enforce the Navigation Acts." },
            { year: 1735, diff: 3, q: "The Zenger Trial established a precedent for:", options: ["Freedom of the Press", "Right to bear arms", "Double jeopardy", "Habeas Corpus"], ans: "Freedom of the Press", explanation: "The acquittal of John Peter Zenger in 1735 established a legal precedent that truth is a defense against libel charges, laying the groundwork for freedom of the press." },
            // Expanded
            { year: 1650, diff: 1, q: "Mercantilism dictated that colonies existed to:", options: ["Provide raw materials to the mother country", "Develop their own industries", "Trade freely with the world", "Spread democracy"], ans: "Provide raw materials to the mother country" },
            { year: 1676, diff: 2, q: "A major consequence of Bacon's Rebellion was:", options: ["A shift from indentured servants to slave labor", "The end of royal rule in Virginia", "Better relations with Native Americans", "The abolition of taxes"], ans: "A shift from indentured servants to slave labor" },
            { year: 1700, diff: 2, q: "The 'Middle Passage' refers to:", options: ["The trans-Atlantic journey of enslaved Africans", "The trade route to China", "The path through the Appalachian Mountains", "The religious conversion process"], ans: "The trans-Atlantic journey of enslaved Africans" },
            { year: 1740, diff: 3, q: "New Light preachers of the Great Awakening emphasized:", options: ["Emotion and personal revelation", "Rationalism and science", "Hierarchy and tradition", "Salvation through good works"], ans: "Emotion and personal revelation" },
            // Bulk Expansion
            { year: 1619, diff: 1, q: "1619 is significant in Virginia for the arrival of:", options: ["The first enslaved Africans", "The Pilgrims", "The French", "Gold"], ans: "The first enslaved Africans" },
            { year: 1619, diff: 2, q: "The House of Burgesses was the first:", options: ["Representative assembly in America", "Church in America", "School in America", "Fort in America"], ans: "Representative assembly in America" },
            { year: 1636, diff: 1, q: "Roger Williams founded Rhode Island to establish:", options: ["Religious freedom", "A Catholic refuge", "A prison colony", "A trading post"], ans: "Religious freedom" },
            { year: 1637, diff: 3, q: "The Pequot War resulted in:", options: ["The destruction of the Pequot tribe", "The defeat of the Puritans", "Peace with the Dutch", "The end of slavery"], ans: "The destruction of the Pequot tribe" },
            { year: 1662, diff: 3, q: "The 'Half-Way Covenant' allowed for:", options: ["Partial church membership", "Voting rights for women", "Trade with Indians", "Slavery in the North"], ans: "Partial church membership" },
            { year: 1681, diff: 1, q: "William Penn founded Pennsylvania as a refuge for:", options: ["Quakers", "Catholics", "Puritans", "Anglicans"], ans: "Quakers" },
            { year: 1732, diff: 1, q: "Georgia was founded as a buffer against:", options: ["Spanish Florida", "French Canada", "Dutch New York", "Native Americans"], ans: "Spanish Florida" },
            { year: 1733, diff: 2, q: "The Molasses Act was intended to:", options: ["Restrict colonial trade with the French West Indies", "Encourage rum production", "Ban sugar", "Tax tea"], ans: "Restrict colonial trade with the French West Indies" },
            { year: 1675, diff: 2, q: "King Philip's War was a conflict between:", options: ["New England colonists and Wampanoags", "Virginia and Maryland", "French and British", "Spanish and Dutch"], ans: "New England colonists and Wampanoags" },
            { year: 1754, diff: 2, q: "The Albany Plan of Union was proposed by:", options: ["Benjamin Franklin", "George Washington", "Thomas Jefferson", "John Adams"], ans: "Benjamin Franklin" },
            { year: 1608, diff: 1, q: "Captain John Smith is credited with saving:", options: ["Jamestown", "Plymouth", "Boston", "Charleston"], ans: "Jamestown" },
            { year: 1624, diff: 3, q: "Virginia became a Royal Colony because:", options: ["The Virginia Company went bankrupt", "The King wanted gold", "The colonists rebelled", "Tobacco failed"], ans: "The Virginia Company went bankrupt" },
            // New Questions
            { year: 1630, diff: 1, q: "The Puritans settled in:", options: ["Massachusetts Bay", "Jamestown", "Plymouth", "New York"], ans: "Massachusetts Bay" },
            { year: 1680, diff: 2, q: "The Pueblo Revolt was successful in:", options: ["Driving the Spanish out for 12 years", "Ending slavery", "Stopping disease", "Gaining independence forever"], ans: "Driving the Spanish out for 12 years" },
            { year: 1739, diff: 2, q: "The Stono Rebellion was a slave uprising in:", options: ["South Carolina", "Virginia", "New York", "Georgia"], ans: "South Carolina" },
            { year: 1660, diff: 3, q: "The Navigation Acts were designed to enforce:", options: ["Mercantilism", "Free Trade", "Democracy", "Religious Freedom"], ans: "Mercantilism" },
            { year: 1700, diff: 1, q: "Which colony was known as the 'Holy Experiment'?", options: ["Pennsylvania", "Massachusetts", "Virginia", "Maryland"], ans: "Pennsylvania" },
            { year: 1612, diff: 2, q: "John Rolfe introduced which crop to Virginia?", options: ["Tobacco", "Cotton", "Sugar", "Indigo"], ans: "Tobacco" }
        ],
        boss: {
            title: "SERMON: A MODEL OF CHRISTIAN CHARITY",
            source: "John Winthrop, 1630",
            text: "\"For we must consider that we shall be as a city upon a hill. The eyes of all people are upon us. So that if we shall deal falsely with our God in this work we have undertaken... we shall be made a story and a by-word through the world.\"",
            question: "Winthrop's sermon was intended to:",
            options: ["Establish a theocracy in Virginia", "Unite the colonists in a holy covenant", "Declare independence from England", "Promote religious tolerance for all"],
            ans: "Unite the colonists in a holy covenant"
        }
    },
    {
        period: 3,
        range: "1754-1800",
        name: "Revolution & New Republic",
        questions: [
            // Level 1
            { year: 1776, diff: 1, q: "Who wrote the Declaration of Independence?", options: ["Washington", "Jefferson", "Adams", "Hamilton"], ans: "Jefferson", explanation: "Thomas Jefferson was the primary author of the Declaration of Independence, drafting it in 1776 to explain the colonies' reasons for separating from Britain." },
            { year: 1754, diff: 1, q: "The French and Indian War was fought over:", options: ["Ohio River Valley", "Florida", "Texas", "California"], ans: "Ohio River Valley", explanation: "The French and Indian War (Seven Years' War) began as a struggle between Britain and France for control of the strategic and fertile Ohio River Valley." },
            { year: 1787, diff: 1, q: "The Constitution replaced the:", options: ["Bill of Rights", "Articles of Confederation", "Magna Carta", "Mayflower Compact"], ans: "Articles of Confederation", explanation: "The Constitution was written in 1787 to replace the Articles of Confederation, which had created a weak central government that was unable to effectively govern the new nation." },
            // Level 2
            { year: 1763, diff: 2, q: "The Proclamation of 1763 angered colonists by:", options: ["Taxing tea", "Forbidding settlement west of Appalachians", "Closing Boston Harbor", "Quartering troops"], ans: "Forbidding settlement west of Appalachians", explanation: "Issued by King George III, the Proclamation of 1763 forbade colonial settlement west of the Appalachian Mountains, which angered colonists who had fought in the war to gain that land." },
            { year: 1776, diff: 2, q: "Thomas Paine's 'Common Sense' argued for:", options: ["Reconciliation", "Independence", "Monarchy", "Anarchy"], ans: "Independence", explanation: "Paine's pamphlet 'Common Sense' used plain language to argue that it was contrary to common sense for a large continent to be ruled by a small, distant island, effectively persuading many to support independence." },
            { year: 1796, diff: 2, q: "Washington's Farewell Address warned against:", options: ["Slavery", "Political Parties & Foreign Alliances", "Taxes", "Banks"], ans: "Political Parties & Foreign Alliances", explanation: "In his Farewell Address, Washington warned the nation against the dangers of permanent foreign alliances and the divisive nature of political parties (factions)." },
            // Level 3
            { year: 1787, diff: 3, q: "The 'Great Compromise' resolved the conflict between:", options: ["North and South", "Large and Small States", "Federalists and Anti-Federalists", "Slaves and Owners"], ans: "Large and Small States", explanation: "The Great Compromise (Connecticut Compromise) created a bicameral legislature with proportional representation in the House (favoring large states) and equal representation in the Senate (favoring small states)." },
            { year: 1798, diff: 3, q: "The Alien and Sedition Acts were targeted at:", options: ["Federalists", "Democratic-Republicans", "British spies", "Native Americans"], ans: "Democratic-Republicans", explanation: "Passed by the Federalist Congress, these acts were intended to suppress dissent and weaken the Democratic-Republican party by targeting immigrants and critical press." },
            { year: 1794, diff: 3, q: "The Whiskey Rebellion proved that:", options: ["The Revolution was a mistake", "The new Federal government could enforce laws", "Taxes were illegal", "Farmers were powerful"], ans: "The new Federal government could enforce laws", explanation: "Washington's swift military response to the Whiskey Rebellion demonstrated the new federal government's ability and willingness to enforce its laws, contrasting with the weakness of the Articles of Confederation." },
            // Expanded
            { year: 1763, diff: 2, q: "A major consequence of the French and Indian War was:", options: ["End of Salutary Neglect", "French control of Canada", "Spanish control of Florida", "Native American independence"], ans: "End of Salutary Neglect" },
            { year: 1787, diff: 2, q: "The Northwest Ordinance of 1787 is significant because it:", options: ["Banned slavery in the Northwest Territory", "Created the National Bank", "Established the Supreme Court", "Ended the Revolutionary War"], ans: "Banned slavery in the Northwest Territory" },
            { year: 1790, diff: 3, q: "Hamilton's Financial Plan included all EXCEPT:", options: ["Assumption of state debts", "Creation of a National Bank", "Protective tariffs", "Direct aid to farmers"], ans: "Direct aid to farmers" },
            { year: 1796, diff: 1, q: "The first two political parties were:", options: ["Federalists and Democratic-Republicans", "Democrats and Republicans", "Whigs and Tories", "Federalists and Anti-Federalists"], ans: "Federalists and Democratic-Republicans" },
            // Bulk Expansion
            { year: 1765, diff: 1, q: "The Stamp Act placed a tax on:", options: ["Paper documents", "Tea", "Sugar", "Glass"], ans: "Paper documents" },
            { year: 1770, diff: 1, q: "The Boston Massacre resulted in the death of:", options: ["5 colonists", "100 colonists", "50 soldiers", "The Governor"], ans: "5 colonists" },
            { year: 1773, diff: 1, q: "The Boston Tea Party was a protest against:", options: ["The Tea Act", "The Stamp Act", "The Sugar Act", "The Quartering Act"], ans: "The Tea Act" },
            { year: 1774, diff: 2, q: "The Coercive (Intolerable) Acts were passed to punish:", options: ["Boston", "New York", "Philadelphia", "Charleston"], ans: "Boston" },
            { year: 1775, diff: 1, q: "The 'Shot Heard 'Round the World' was fired at:", options: ["Lexington and Concord", "Bunker Hill", "Saratoga", "Yorktown"], ans: "Lexington and Concord" },
            { year: 1777, diff: 2, q: "The Battle of Saratoga was the turning point because:", options: ["France joined the war", "Washington died", "The British surrendered", "Spain attacked"], ans: "France joined the war" },
            { year: 1781, diff: 1, q: "The British surrendered at:", options: ["Yorktown", "Saratoga", "Trenton", "Princeton"], ans: "Yorktown" },
            { year: 1786, diff: 2, q: "Shays' Rebellion demonstrated the weakness of:", options: ["The Articles of Confederation", "The Constitution", "The King", "The Army"], ans: "The Articles of Confederation" },
            { year: 1789, diff: 1, q: "Who was the first Secretary of the Treasury?", options: ["Alexander Hamilton", "Thomas Jefferson", "Henry Knox", "John Adams"], ans: "Alexander Hamilton" },
            { year: 1793, diff: 2, q: "Washington's Neutrality Proclamation concerned the war between:", options: ["Britain and France", "Spain and Portugal", "Russia and Turkey", "China and Japan"], ans: "Britain and France" },
            { year: 1795, diff: 3, q: "Pinckney's Treaty with Spain granted the US:", options: ["Navigation rights on the Mississippi", "Florida", "Texas", "Cuba"], ans: "Navigation rights on the Mississippi" },
            { year: 1798, diff: 3, q: "The Kentucky and Virginia Resolutions argued for:", options: ["Nullification", "Secession", "War", "Taxes"], ans: "Nullification" },
            // New Questions
            { year: 1765, diff: 2, q: "The Sons of Liberty were formed to oppose:", options: ["The Stamp Act", "The Tea Act", "The Sugar Act", "The Townshend Acts"], ans: "The Stamp Act" },
            { year: 1770, diff: 3, q: "Crispus Attucks is famous for being:", options: ["The first casualty of the Revolution", "A signer of the Declaration", "A British General", "A spy"], ans: "The first casualty of the Revolution" },
            { year: 1783, diff: 1, q: "The Treaty of Paris (1783) recognized:", options: ["US Independence", "French control of Canada", "Spanish control of Florida", "British right to tax"], ans: "US Independence" },
            { year: 1786, diff: 2, q: "The Annapolis Convention was called to discuss:", options: ["Trade barriers", "Slavery", "War with Britain", "Indian relations"], ans: "Trade barriers" },
            { year: 1791, diff: 1, q: "The Bill of Rights consists of the first ___ amendments.", options: ["10", "12", "5", "20"], ans: "10" },
            { year: 1793, diff: 2, q: "Eli Whitney invented the:", options: ["Cotton Gin", "Steam Engine", "Telegraph", "Reaper"], ans: "Cotton Gin" }
        ],
        boss: {
            title: "PAMPHLET: COMMON SENSE",
            source: "Thomas Paine, 1776",
            text: "\"Everything that is right or reasonable pleads for separation. The blood of the slain, the weeping voice of nature cries, 'TIS TIME TO PART'. Even the distance at which the Almighty hath placed England and America is a strong and natural proof that the authority of the one over the other, was never the design of Heaven.\"",
            question: "Paine's argument for independence was primarily based on:",
            options: ["Legal precedents in English Common Law", "The economic benefits of remaining in the Empire", "Natural law and rationality", "Religious prophecies"],
            ans: "Natural law and rationality"
        }
    },
    {
        period: 4,
        range: "1800-1848",
        name: "Democracy & Expansion",
        questions: [
            // Level 1
            { year: 1803, diff: 1, q: "The Louisiana Purchase doubled the US size. Who sold it?", options: ["Spain", "France", "Britain", "Russia"], ans: "France", explanation: "Napoleon Bonaparte of France sold the Louisiana Territory to the US for $15 million because he needed money for his wars in Europe and had lost hope of a North American empire after the Haitian Revolution." },
            { year: 1812, diff: 1, q: "The War of 1812 was fought against:", options: ["France", "Britain", "Spain", "Mexico"], ans: "Britain", explanation: "The War of 1812 was fought between the US and Britain over issues including impressment of American sailors, trade restrictions, and British support for Native American resistance." },
            { year: 1848, diff: 1, q: "The Seneca Falls Convention focused on:", options: ["Slavery", "Women's Rights", "Temperance", "Education"], ans: "Women's Rights", explanation: "The Seneca Falls Convention was the first women's rights convention in the US, launching the women's suffrage movement and issuing the Declaration of Sentiments." },
            // Level 2
            { year: 1823, diff: 2, q: "The Monroe Doctrine stated:", options: ["US would control Europe", "Europe should stay out of Americas", "Slavery is banned", "Texas is US soil"], ans: "Europe should stay out of Americas", explanation: "The Monroe Doctrine warned European powers that the Western Hemisphere was closed to future colonization and that the US would view any interference as a hostile act." },
            { year: 1820, diff: 2, q: "The Missouri Compromise admitted Missouri as a slave state and ___ as free.", options: ["Maine", "Vermont", "Ohio", "Kentucky"], ans: "Maine", explanation: "The Missouri Compromise maintained the balance of power in the Senate by admitting Maine as a free state to offset Missouri's admission as a slave state." },
            { year: 1832, diff: 2, q: "The Nullification Crisis was about:", options: ["Slavery", "Tariffs", "Banks", "Land"], ans: "Tariffs", explanation: "The Nullification Crisis arose when South Carolina attempted to nullify federal tariffs it deemed unconstitutional, challenging federal authority and threatening secession." },
            // Level 3
            { year: 1803, diff: 3, q: "Marbury v. Madison established:", options: ["Judicial Review", "Executive Privilege", "Congressional Power", "States' Rights"], ans: "Judicial Review", explanation: "Chief Justice John Marshall's ruling in Marbury v. Madison established the principle of judicial review, giving the Supreme Court the power to declare laws unconstitutional." },
            { year: 1824, diff: 3, q: "The 'Corrupt Bargain' refers to the election of:", options: ["Jackson", "J.Q. Adams", "Van Buren", "Polk"], ans: "J.Q. Adams", explanation: "In the 1824 election, no candidate won a majority of electoral votes. The House chose John Quincy Adams, and Jackson supporters accused him of making a 'corrupt bargain' with Henry Clay to win." },
            { year: 1846, diff: 3, q: "The Wilmot Proviso proposed to:", options: ["Ban slavery in Mexican Cession lands", "Extend Missouri Compromise line", "Allow popular sovereignty", "Abolish slavery everywhere"], ans: "Ban slavery in Mexican Cession lands", explanation: "The Wilmot Proviso was a failed proposal to ban slavery in any territory acquired from Mexico in the Mexican-American War, highlighting the growing sectional divide." },
            // Expanded
            { year: 1820, diff: 2, q: "The 'Market Revolution' was characterized by:", options: ["The shift from home production to factory production", "The end of slavery", "The rise of the internet", "The decline of cities"], ans: "The shift from home production to factory production" },
            { year: 1824, diff: 3, q: "The 'American System' advocated by Henry Clay included:", options: ["Internal improvements, tariffs, and a national bank", "Free trade and no taxes", "State banks only", "Expansion of slavery"], ans: "Internal improvements, tariffs, and a national bank" },
            { year: 1830, diff: 2, q: "The Second Great Awakening inspired reform movements such as:", options: ["Abolitionism, Temperance, and Women's Rights", "Communism", "Fascism", "Monarchy"], ans: "Abolitionism, Temperance, and Women's Rights" },
            { year: 1838, diff: 1, q: "The Trail of Tears was the forced removal of the:", options: ["Cherokee", "Sioux", "Apache", "Navajo"], ans: "Cherokee" },
            // Bulk Expansion
            { year: 1807, diff: 2, q: "The Embargo Act of 1807 was intended to:", options: ["Punish Britain and France by stopping trade", "Increase trade with Europe", "Start a war", "Annex Canada"], ans: "Punish Britain and France by stopping trade" },
            { year: 1814, diff: 2, q: "The Hartford Convention led to the demise of the:", options: ["Federalist Party", "Democratic-Republican Party", "Whig Party", "Know-Nothing Party"], ans: "Federalist Party" },
            { year: 1816, diff: 2, q: "The 'Era of Good Feelings' was associated with the presidency of:", options: ["James Monroe", "James Madison", "John Quincy Adams", "Andrew Jackson"], ans: "James Monroe" },
            { year: 1819, diff: 3, q: "McCulloch v. Maryland established the principle of:", options: ["Federal supremacy and implied powers", "Judicial review", "States' rights", "Executive privilege"], ans: "Federal supremacy and implied powers" },
            { year: 1820, diff: 3, q: "The Tallmadge Amendment proposed to:", options: ["Gradually abolish slavery in Missouri", "Ban slavery in all territories", "Expand slavery to California", "End the slave trade"], ans: "Gradually abolish slavery in Missouri" },
            { year: 1828, diff: 2, q: "The 'Tariff of Abominations' was opposed by:", options: ["The South", "The North", "The West", "New England"], ans: "The South" },
            { year: 1831, diff: 1, q: "Who led a violent slave rebellion in Virginia?", options: ["Nat Turner", "Frederick Douglass", "Harriet Tubman", "Sojourner Truth"], ans: "Nat Turner" },
            { year: 1832, diff: 2, q: "Jackson's 'Bank War' resulted in:", options: ["The destruction of the Second Bank of the US", "A stronger economy", "The creation of the Federal Reserve", "Lower inflation"], ans: "The destruction of the Second Bank of the US" },
            { year: 1836, diff: 1, q: "The Battle of the Alamo was part of the:", options: ["Texas Revolution", "Mexican-American War", "Civil War", "War of 1812"], ans: "Texas Revolution" },
            { year: 1840, diff: 2, q: "The 'Log Cabin and Hard Cider' campaign elected:", options: ["William Henry Harrison", "Martin Van Buren", "James K. Polk", "Andrew Jackson"], ans: "William Henry Harrison" },
            { year: 1844, diff: 1, q: "James K. Polk's campaign slogan was:", options: ["54-40 or Fight!", "Tippecanoe and Tyler Too", "Liberty and Union", "A House Divided"], ans: "54-40 or Fight!" },
            { year: 1848, diff: 2, q: "The Treaty of Guadalupe Hidalgo ended the:", options: ["Mexican-American War", "Texas Revolution", "Civil War", "Spanish-American War"], ans: "Mexican-American War" },
            // New Questions
            { year: 1801, diff: 2, q: "Jefferson's election in 1800 is called the 'Revolution of 1800' because:", options: ["It was a peaceful transfer of power", "He was a radical", "The King abdicated", "War started"], ans: "It was a peaceful transfer of power" },
            { year: 1811, diff: 2, q: "Tecumseh and the Prophet attempted to:", options: ["Unite tribes against US expansion", "Sell land", "Join the British army", "Move to Canada"], ans: "Unite tribes against US expansion" },
            { year: 1825, diff: 1, q: "The Erie Canal connected:", options: ["The Great Lakes and NYC", "Mississippi and Ohio", "Atlantic and Pacific", "Boston and DC"], ans: "The Great Lakes and NYC" },
            { year: 1833, diff: 3, q: "The Force Bill authorized Jackson to:", options: ["Use the military to enforce tariffs", "Invade Mexico", "Close the Bank", "Free slaves"], ans: "Use the military to enforce tariffs" },
            { year: 1841, diff: 3, q: "Dorothea Dix is famous for reforming:", options: ["Prisons and Asylums", "Schools", "Factories", "Farms"], ans: "Prisons and Asylums" },
            { year: 1845, diff: 1, q: "Texas was annexed by the US as a:", options: ["Slave State", "Free State", "Territory", "Colony"], ans: "Slave State" }
        ],
        boss: {
            title: "DECLARATION OF SENTIMENTS",
            source: "Seneca Falls Convention, 1848",
            text: "\"We hold these truths to be self-evident: that all men and women are created equal... The history of mankind is a history of repeated injuries and usurpations on the part of man toward woman, having in direct object the establishment of an absolute tyranny over her.\"",
            question: "This document was modeled after:",
            options: ["The US Constitution", "The Declaration of Independence", "The Magna Carta", "The Bill of Rights"],
            ans: "The Declaration of Independence"
        }
    },
    {
        period: 5,
        range: "1844-1877",
        name: "Civil War & Reconstruction",
        questions: [
            // Level 1
            { year: 1861, diff: 1, q: "The Civil War began with the firing on:", options: ["Bull Run", "Fort Sumter", "Gettysburg", "Antietam"], ans: "Fort Sumter", explanation: "The Civil War officially began on April 12, 1861, when Confederate forces fired upon the Union-held Fort Sumter in Charleston Harbor, South Carolina." },
            { year: 1863, diff: 1, q: "The Emancipation Proclamation freed slaves in:", options: ["The North", "The South (Confederacy)", "Border States", "Everywhere"], ans: "The South (Confederacy)", explanation: "The Emancipation Proclamation, issued by Lincoln, declared that all persons held as slaves within the rebellious states (the Confederacy) were free, but it did not apply to the border states or Union-occupied areas." },
            { year: 1865, diff: 1, q: "Which amendment abolished slavery?", options: ["12th", "13th", "14th", "15th"], ans: "13th", explanation: "The 13th Amendment to the US Constitution, ratified in 1865, officially abolished slavery and involuntary servitude, except as punishment for a crime." },
            // Level 2
            { year: 1850, diff: 2, q: "The most controversial part of the Compromise of 1850 was:", options: ["California entering as free", "Fugitive Slave Act", "End of DC slave trade", "Texas debt"], ans: "Fugitive Slave Act", explanation: "The Fugitive Slave Act was highly controversial because it required citizens in free states to assist in the capture of runaway slaves and denied them the right to a jury trial." },
            { year: 1857, diff: 2, q: "Dred Scott v. Sandford ruled that:", options: ["Slaves were citizens", "Slaves were property", "Slavery was illegal", "Scott was free"], ans: "Slaves were property", explanation: "The Supreme Court ruled in Dred Scott v. Sandford that African Americans were not citizens and that the federal government had no authority to prohibit slavery in the territories, effectively declaring the Missouri Compromise unconstitutional." },
            { year: 1862, diff: 2, q: "The Homestead Act offered:", options: ["Freedom to slaves", "Free land in the West", "Railroad jobs", "Gold mining rights"], ans: "Free land in the West", explanation: "The Homestead Act of 1862 encouraged Western migration by providing settlers 160 acres of public land, which they could keep for a small filing fee if they lived on and improved it for five years." },
            // Level 3
            { year: 1854, diff: 3, q: "The Kansas-Nebraska Act overturned the:", options: ["Missouri Compromise", "Compromise of 1850", "Wilmot Proviso", "Fugitive Slave Act"], ans: "Missouri Compromise", explanation: "The Kansas-Nebraska Act allowed people in the territories of Kansas and Nebraska to decide for themselves whether or not to allow slavery (popular sovereignty), effectively repealing the Missouri Compromise of 1820." },
            { year: 1868, diff: 3, q: "The 14th Amendment guarantees:", options: ["Voting rights", "Birthright Citizenship & Equal Protection", "End of slavery", "Income Tax"], ans: "Birthright Citizenship & Equal Protection", explanation: "The 14th Amendment granted citizenship to all persons born or naturalized in the United States (including former slaves) and guaranteed all citizens 'equal protection of the laws'." },
            { year: 1877, diff: 3, q: "Reconstruction ended because of:", options: ["Success of the Freedman's Bureau", "The Compromise of 1877", "The KKK was defeated", "Lincoln's assassination"], ans: "The Compromise of 1877", explanation: "The Compromise of 1877 was an informal deal that settled the disputed 1876 presidential election; in exchange for Rutherford B. Hayes becoming president, federal troops were withdrawn from the South, effectively ending Reconstruction." },
            // Expanded
            { year: 1845, diff: 2, q: "'Manifest Destiny' was the belief that:", options: ["The US was destined to expand across the continent", "Slavery should be abolished", "The US should isolate itself", "Native Americans should rule"], ans: "The US was destined to expand across the continent" },
            { year: 1865, diff: 3, q: "The 'Black Codes' enacted after the Civil War were intended to:", options: ["Restrict the rights and movement of freedmen", "Grant voting rights", "Provide free land", "Punish Confederate leaders"], ans: "Restrict the rights and movement of freedmen" },
            { year: 1860, diff: 2, q: "The election of 1860 was the immediate cause of:", options: ["South Carolina's secession", "The Mexican War", "The Gold Rush", "The end of slavery"], ans: "South Carolina's secession" },
            { year: 1861, diff: 1, q: "Who was the President of the Confederacy?", options: ["Jefferson Davis", "Robert E. Lee", "Stonewall Jackson", "Alexander Stephens"], ans: "Jefferson Davis" },
            // Bulk Expansion
            { year: 1846, diff: 2, q: "The Oregon Treaty settled the border dispute with:", options: ["Britain", "Russia", "Spain", "Mexico"], ans: "Britain" },
            { year: 1848, diff: 2, q: "The Free Soil Party opposed:", options: ["The expansion of slavery into territories", "Slavery everywhere", "Tariffs", "Immigration"], ans: "The expansion of slavery into territories" },
            { year: 1852, diff: 1, q: "Who wrote 'Uncle Tom's Cabin'?", options: ["Harriet Beecher Stowe", "Frederick Douglass", "Mark Twain", "Walt Whitman"], ans: "Harriet Beecher Stowe" },
            { year: 1856, diff: 3, q: "The 'Caning of Charles Sumner' occurred in:", options: ["The US Senate", "The White House", "The Supreme Court", "A tavern"], ans: "The US Senate" },
            { year: 1858, diff: 2, q: "The Lincoln-Douglas Debates were for a seat in the:", options: ["US Senate (Illinois)", "Presidency", "House of Representatives", "Governor's Mansion"], ans: "US Senate (Illinois)" },
            { year: 1859, diff: 1, q: "John Brown's raid on Harpers Ferry aimed to:", options: ["Start a slave revolt", "Steal gold", "Capture Lee", "Secede from the Union"], ans: "Start a slave revolt" },
            { year: 1861, diff: 2, q: "The Anaconda Plan was the Union strategy to:", options: ["Blockade the South and control the Mississippi", "Invade Richmond immediately", "Assassinate Davis", "Burn Atlanta"], ans: "Blockade the South and control the Mississippi" },
            { year: 1862, diff: 2, q: "The Battle of Antietam is significant because it:", options: ["Led to the Emancipation Proclamation", "Ended the war", "Was a Confederate victory", "Captured Washington DC"], ans: "Led to the Emancipation Proclamation" },
            { year: 1863, diff: 1, q: "The Battle of Gettysburg is considered the:", options: ["Turning point of the Civil War", "First battle", "Last battle", "Bloodiest day"], ans: "Turning point of the Civil War" },
            { year: 1864, diff: 2, q: "Sherman's March to the Sea employed:", options: ["Total War tactics", "Guerrilla warfare", "Trench warfare", "Naval blockades"], ans: "Total War tactics" },
            { year: 1865, diff: 2, q: "The Freedmen's Bureau provided:", options: ["Food, clothing, and education to former slaves", "Land to all slaves", "Tickets to Africa", "Weapons"], ans: "Food, clothing, and education to former slaves" },
            { year: 1867, diff: 3, q: "The Tenure of Office Act was used to impeach:", options: ["Andrew Johnson", "Ulysses S. Grant", "Abraham Lincoln", "Rutherford B. Hayes"], ans: "Andrew Johnson" },
            // New Questions
            { year: 1850, diff: 1, q: "The Underground Railroad was:", options: ["A network to help slaves escape", "A subway", "A train line", "A secret society"], ans: "A network to help slaves escape" },
            { year: 1854, diff: 2, q: "The 'Bleeding Kansas' conflict was fought over:", options: ["Popular Sovereignty", "Gold", "Land", "Religion"], ans: "Popular Sovereignty" },
            { year: 1860, diff: 3, q: "The Crittenden Compromise was a failed attempt to:", options: ["Prevent secession", "End the war", "Abolish slavery", "Buy Cuba"], ans: "Prevent secession" },
            { year: 1863, diff: 2, q: "The NYC Draft Riots were primarily led by:", options: ["Irish immigrants", "Freedmen", "Soldiers", "Farmers"], ans: "Irish immigrants" },
            { year: 1865, diff: 3, q: "The 13th Amendment had a loophole regarding:", options: ["Punishment for crime", "Voting rights", "Women", "Taxes"], ans: "Punishment for crime" },
            { year: 1870, diff: 1, q: "Hiram Revels was the first:", options: ["Black Senator", "Black President", "Black General", "Black Judge"], ans: "Black Senator" }
        ],
        boss: {
            title: "SPEECH: THE GETTYSBURG ADDRESS",
            source: "Abraham Lincoln, 1863",
            text: "\"Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal... that this nation, under God, shall have a new birth of freedom.\"",
            question: "Lincoln's reference to a 'new birth of freedom' most directly foreshadowed:",
            options: ["The end of the Civil War", "The 13th Amendment abolishing slavery", "The re-election of 1864", "The surrender at Appomattox"],
            ans: "The 13th Amendment abolishing slavery"
        }
    },
    {
        period: 6,
        range: "1865-1898",
        name: "Industrialization & Gilded Age",
        questions: [
            // Level 1
            { year: 1869, diff: 1, q: "The Transcontinental Railroad was completed in:", options: ["Utah", "California", "New York", "Texas"], ans: "Utah", explanation: "The First Transcontinental Railroad was completed on May 10, 1869, with the driving of the 'Golden Spike' at Promontory Summit, Utah, connecting the Union Pacific and Central Pacific railroads." },
            { year: 1886, diff: 1, q: "The Statue of Liberty was a gift from:", options: ["Britain", "France", "Germany", "Spain"], ans: "France", explanation: "The Statue of Liberty was a gift from the people of France to the United States to commemorate the alliance between France and the US during the American Revolution." },
            { year: 1876, diff: 1, q: "Alexander Graham Bell invented the:", options: ["Lightbulb", "Telephone", "Airplane", "Radio"], ans: "Telephone", explanation: "Alexander Graham Bell was awarded the first US patent for the telephone in 1876, revolutionizing communication." },
            // Level 2
            { year: 1882, diff: 2, q: "The Chinese Exclusion Act was the first law to:", options: ["Restrict immigration by race", "Require passports", "Tax immigrants", "Ban all immigration"], ans: "Restrict immigration by race", explanation: "The Chinese Exclusion Act of 1882 was the first significant law restricting immigration into the United States, specifically suspending Chinese immigration for ten years and declaring Chinese immigrants ineligible for naturalization." },
            { year: 1890, diff: 2, q: "The Sherman Antitrust Act was designed to:", options: ["Support unions", "Break up monopolies", "Increase tariffs", "Regulate banks"], ans: "Break up monopolies", explanation: "The Sherman Antitrust Act was the first federal act that outlawed monopolistic business practices, though it was initially used more often against labor unions than against trusts." },
            { year: 1896, diff: 2, q: "Plessy v. Ferguson established:", options: ["Separate but Equal", "Integration", "Voting Rights", "Labor Rights"], ans: "Separate but Equal", explanation: "In Plessy v. Ferguson, the Supreme Court upheld the constitutionality of racial segregation laws for public facilities as long as the segregated facilities were equal in quality, a doctrine known as 'separate but equal'." },
            // Level 3
            { year: 1887, diff: 3, q: "The Dawes Act aimed to:", options: ["Preserve native culture", "Assimilate Native Americans", "Expand reservations", "Arm tribes"], ans: "Assimilate Native Americans", explanation: "The Dawes Act sought to assimilate Native Americans into US society by breaking up tribal lands into individual allotments and encouraging farming, which resulted in a massive loss of Native American land." },
            { year: 1892, diff: 3, q: "The Populist Party platform (Omaha Platform) called for:", options: ["Gold standard", "Free Silver", "Lower taxes", "Less government"], ans: "Free Silver", explanation: "The Populist Party's Omaha Platform called for the unlimited coinage of silver ('Free Silver') to increase the money supply and help farmers pay off debts, among other reforms like the direct election of senators." },
            { year: 1894, diff: 3, q: "The Pullman Strike was ended by:", options: ["Negotiation", "Federal Troops", "State Police", "Pinkertons"], ans: "Federal Troops", explanation: "President Grover Cleveland sent federal troops to break the Pullman Strike on the grounds that it was interfering with the delivery of the US mail." },
            // Expanded
            { year: 1880, diff: 2, q: "'Social Darwinism' was used to justify:", options: ["Extreme wealth inequality and imperialism", "Social welfare programs", "Labor unions", "Environmental protection"], ans: "Extreme wealth inequality and imperialism" },
            { year: 1889, diff: 3, q: "The 'Gospel of Wealth' by Andrew Carnegie argued that:", options: ["The wealthy had a duty to use their money for the public good", "The poor were lazy", "Government should tax the rich", "Monopolies were illegal"], ans: "The wealthy had a duty to use their money for the public good" },
            { year: 1886, diff: 2, q: "The Knights of Labor differed from the AFL in that they:", options: ["Accepted skilled and unskilled workers, women, and minorities", "Only allowed skilled white men", "Were a political party", "Opposed strikes"], ans: "Accepted skilled and unskilled workers, women, and minorities" },
            { year: 1889, diff: 1, q: "Jane Addams is best known for founding:", options: ["Hull House (Settlement House movement)", "The Red Cross", "The NAACP", "The Suffragette movement"], ans: "Hull House (Settlement House movement)" },
            // Bulk Expansion
            { year: 1862, diff: 2, q: "The Pacific Railway Act authorized the construction of:", options: ["The Transcontinental Railroad", "The Panama Canal", "The Erie Canal", "Interstate Highways"], ans: "The Transcontinental Railroad" },
            { year: 1867, diff: 1, q: "The US purchased Alaska from:", options: ["Russia", "France", "Britain", "Spain"], ans: "Russia" },
            { year: 1873, diff: 3, q: "The Panic of 1873 was caused by:", options: ["Over-speculation in railroads", "The Gold Rush", "War with Mexico", "High taxes"], ans: "Over-speculation in railroads" },
            { year: 1876, diff: 2, q: "The Battle of Little Bighorn resulted in the defeat of:", options: ["General Custer", "Sitting Bull", "Geronimo", "Chief Joseph"], ans: "General Custer" },
            { year: 1881, diff: 1, q: "Booker T. Washington founded:", options: ["Tuskegee Institute", "The NAACP", "The UNIA", "Howard University"], ans: "Tuskegee Institute" },
            { year: 1883, diff: 2, q: "The Pendleton Civil Service Act required:", options: ["Competitive exams for government jobs", "Loyalty oaths", "Segregation", "Union membership"], ans: "Competitive exams for government jobs" },
            { year: 1886, diff: 2, q: "The Haymarket Square Riot led to the decline of the:", options: ["Knights of Labor", "AFL", "IWW", "Populist Party"], ans: "Knights of Labor" },
            { year: 1890, diff: 3, q: "The Wounded Knee Massacre marked the end of:", options: ["Armed Native American resistance", "The Civil War", "Reconstruction", "The Gold Rush"], ans: "Armed Native American resistance" },
            { year: 1892, diff: 1, q: "Ellis Island opened as a station for:", options: ["Immigrants", "Soldiers", "Exports", "Trains"], ans: "Immigrants" },
            { year: 1893, diff: 3, q: "Frederick Jackson Turner's 'Frontier Thesis' argued that:", options: ["The frontier shaped American democracy", "The frontier was a wasteland", "Indians should keep the land", "Cities were superior"], ans: "The frontier shaped American democracy" },
            { year: 1896, diff: 1, q: "William McKinley defeated whom in the 1896 election?", options: ["William Jennings Bryan", "Teddy Roosevelt", "Grover Cleveland", "Woodrow Wilson"], ans: "William Jennings Bryan" },
            { year: 1898, diff: 2, q: "Yellow Journalism contributed to the outbreak of:", options: ["The Spanish-American War", "WWI", "The Civil War", "The Mexican War"], ans: "The Spanish-American War" },
            // New Questions
            { year: 1868, diff: 2, q: "The Burlingame Treaty was with:", options: ["China", "Japan", "Britain", "Mexico"], ans: "China" },
            { year: 1877, diff: 3, q: "The Great Railroad Strike of 1877 was the first:", options: ["National strike", "Union victory", "Government shutdown", "Civil Rights march"], ans: "National strike" },
            { year: 1880, diff: 1, q: "Thomas Edison is famous for inventing the:", options: ["Lightbulb", "Telephone", "Car", "Radio"], ans: "Lightbulb" },
            { year: 1887, diff: 2, q: "The Interstate Commerce Act was the first federal law to:", options: ["Regulate private industry (Railroads)", "Ban child labor", "Set minimum wage", "Protect unions"], ans: "Regulate private industry (Railroads)" },
            { year: 1890, diff: 1, q: "Jacob Riis wrote 'How the Other Half Lives' about:", options: ["Tenement life", "The rich", "Cowboys", "Soldiers"], ans: "Tenement life" },
            { year: 1896, diff: 3, q: "The 'Cross of Gold' speech supported:", options: ["Bimetallism", "Gold Standard", "Tariffs", "War"], ans: "Bimetallism" }
        ],
        boss: {
            title: "SPEECH: CROSS OF GOLD",
            source: "William Jennings Bryan, 1896",
            text: "\"You shall not press down upon the brow of labor this crown of thorns, you shall not crucify mankind upon a cross of gold.\"",
            question: "This speech was a passionate defense of:",
            options: ["The Gold Standard", "Bimetallism (Free Silver)", "Industrial Monopolies", "American Imperialism"],
            ans: "Bimetallism (Free Silver)"
        }
    },
    {
        period: 7,
        range: "1890-1945",
        name: "Global Conflict & Depression",
        questions: [
            // Level 1
            { year: 1914, diff: 1, q: "WWI began in Europe. The US initially was:", options: ["Allied with Britain", "Allied with Germany", "Neutral", "At war with Mexico"], ans: "Neutral", explanation: "When World War I broke out in 1914, President Woodrow Wilson declared the United States neutral, a policy that lasted until 1917." },
            { year: 1929, diff: 1, q: "The Stock Market Crash led to:", options: ["The Great Depression", "The Roaring 20s", "WWI", "The Cold War"], ans: "The Great Depression", explanation: "The Stock Market Crash of 1929 shattered confidence in the US economy, leading to bank failures and the Great Depression, the worst economic downturn in the history of the industrialized world." },
            { year: 1941, diff: 1, q: "The US entered WWII after:", options: ["D-Day", "Pearl Harbor", "Invasion of Poland", "Blitzkrieg"], ans: "Pearl Harbor", explanation: "The United States entered World War II following the surprise Japanese attack on the US naval base at Pearl Harbor, Hawaii, on December 7, 1941." },
            // Level 2
            { year: 1898, diff: 2, q: "The Spanish-American War resulted in US acquisition of:", options: ["Cuba", "Philippines, Puerto Rico, Guam", "Hawaii", "Alaska"], ans: "Philippines, Puerto Rico, Guam", explanation: "The Treaty of Paris (1898) ending the Spanish-American War gave the US control of the Philippines, Puerto Rico, and Guam, marking the emergence of the US as a global imperial power." },
            { year: 1919, diff: 2, q: "The Senate rejected the Treaty of Versailles because of:", options: ["Reparations", "The League of Nations", "Border changes", "War guilt"], ans: "The League of Nations", explanation: "The US Senate rejected the Treaty of Versailles primarily due to concerns that joining the League of Nations would compromise American sovereignty and drag the US into future European conflicts." },
            { year: 1933, diff: 2, q: "FDR's plan to fight the Depression was called:", options: ["The Square Deal", "The New Deal", "The Fair Deal", "The Great Society"], ans: "The New Deal", explanation: "Franklin D. Roosevelt's New Deal was a series of programs, public work projects, financial reforms, and regulations enacted between 1933 and 1939 to provide relief, recovery, and reform during the Great Depression." },
            // Level 3
            { year: 1904, diff: 3, q: "The Roosevelt Corollary to the Monroe Doctrine claimed US right to:", options: ["Intervene in Latin America", "Annex Canada", "Trade with China", "Ignore Europe"], ans: "Intervene in Latin America", explanation: "The Roosevelt Corollary asserted that the United States had the right to intervene in the affairs of Latin American nations to maintain stability and prevent European intervention, effectively making the US the 'policeman' of the Western Hemisphere." },
            { year: 1919, diff: 3, q: "Schenck v. US ruled that speech could be limited if it presented:", options: ["A clear and present danger", "False information", "Political dissent", "Religious bias"], ans: "A clear and present danger", explanation: "In Schenck v. United States, the Supreme Court ruled that freedom of speech could be restricted if the words spoken or printed represented to society a 'clear and present danger', such as during wartime." },
            { year: 1944, diff: 3, q: "Korematsu v. US upheld the constitutionality of:", options: ["The Draft", "Japanese Internment", "Rationing", "Censorship"], ans: "Japanese Internment", explanation: "In Korematsu v. United States, the Supreme Court upheld the internment of Japanese Americans during World War II as a 'military necessity', a decision that has since been widely condemned." },
            // Expanded
            { year: 1906, diff: 2, q: "The 'Muckrakers' were:", options: ["Journalists who exposed corruption and social problems", "Corrupt politicians", "Union leaders", "Farmers"], ans: "Journalists who exposed corruption and social problems" },
            { year: 1916, diff: 3, q: "The 'Great Migration' during WWI refers to:", options: ["The movement of African Americans from the South to the North", "Immigration from Europe", "Westward expansion", "Soldiers going to war"], ans: "The movement of African Americans from the South to the North" },
            { year: 1920, diff: 2, q: "The 'Harlem Renaissance' was a flowering of:", options: ["African American art, literature, and music", "Science and technology", "Religious revival", "Political conservatism"], ans: "African American art, literature, and music" },
            { year: 1920, diff: 1, q: "The 19th Amendment granted:", options: ["Women the right to vote", "Prohibition of alcohol", "Direct election of Senators", "Income tax"], ans: "Women the right to vote" },
            // Bulk Expansion
            { year: 1899, diff: 2, q: "The 'Open Door Policy' was intended to:", options: ["Ensure US trade with China", "Close US borders", "End the war in Philippines", "Annex Japan"], ans: "Ensure US trade with China" },
            { year: 1903, diff: 2, q: "The US acquired the rights to build the Panama Canal by:", options: ["Supporting a Panamanian revolution against Colombia", "Buying it from Spain", "Invading Mexico", "Treaty with Britain"], ans: "Supporting a Panamanian revolution against Colombia" },
            { year: 1911, diff: 3, q: "The Triangle Shirtwaist Factory Fire led to:", options: ["New workplace safety laws", "The end of unions", "The banning of shirts", "Child labor laws"], ans: "New workplace safety laws" },
            { year: 1913, diff: 3, q: "The Federal Reserve Act created:", options: ["A central banking system", "The IRS", "Social Security", "The Stock Market"], ans: "A central banking system" },
            { year: 1915, diff: 1, q: "The sinking of the Lusitania angered the US because:", options: ["128 Americans were killed", "It was a US ship", "It carried gold", "The President was on board"], ans: "128 Americans were killed" },
            { year: 1917, diff: 1, q: "The Zimmerman Telegram proposed an alliance between:", options: ["Germany and Mexico", "Germany and Russia", "Britain and France", "Japan and China"], ans: "Germany and Mexico" },
            { year: 1918, diff: 2, q: "Wilson's 'Fourteen Points' included a call for:", options: ["A League of Nations", "Punishing Germany severely", "US isolationism", "Global communism"], ans: "A League of Nations" },
            { year: 1924, diff: 2, q: "The National Origins Act of 1924:", options: ["Severely restricted immigration from S/E Europe and Asia", "Encouraged immigration", "Banned all immigration", "Created the Border Patrol"], ans: "Severely restricted immigration from S/E Europe and Asia" },
            { year: 1925, diff: 1, q: "The Scopes 'Monkey Trial' was about:", options: ["Teaching evolution in schools", "Animal rights", "Zoos", "Circus acts"], ans: "Teaching evolution in schools" },
            { year: 1932, diff: 1, q: "The 'Bonus Army' was a group of:", options: ["WWI veterans demanding early payment", "Unemployed bankers", "Farmers", "Socialists"], ans: "WWI veterans demanding early payment" },
            { year: 1935, diff: 2, q: "The Social Security Act provided:", options: ["Pensions for the elderly", "Free healthcare", "Jobs for youth", "Farm subsidies"], ans: "Pensions for the elderly" },
            { year: 1941, diff: 2, q: "The Lend-Lease Act allowed the US to:", options: ["Supply Britain without entering the war", "Trade with Germany", "Stay neutral", "Buy islands"], ans: "Supply Britain without entering the war" },
            { year: 1942, diff: 1, q: "The Manhattan Project was the code name for:", options: ["Developing the atomic bomb", "Invading Japan", "Spying on Russia", "Building tanks"], ans: "Developing the atomic bomb" },
            // New Questions
            { year: 1901, diff: 2, q: "Teddy Roosevelt's foreign policy was known as:", options: ["Big Stick Diplomacy", "Dollar Diplomacy", "Moral Diplomacy", "Isolationism"], ans: "Big Stick Diplomacy" },
            { year: 1913, diff: 2, q: "The 16th Amendment authorized:", options: ["Federal Income Tax", "Direct election of Senators", "Prohibition", "Women's Suffrage"], ans: "Federal Income Tax" },
            { year: 1919, diff: 3, q: "The Red Scare of 1919 was a reaction to:", options: ["The Russian Revolution", "The Great Depression", "The Civil War", "The Gold Rush"], ans: "The Russian Revolution" },
            { year: 1928, diff: 2, q: "The Kellogg-Briand Pact attempted to:", options: ["Outlaw war", "End tariffs", "Create the UN", "Ban alcohol"], ans: "Outlaw war" },
            { year: 1935, diff: 3, q: "The Neutrality Acts were designed to:", options: ["Keep the US out of WWII", "Help Britain", "Fight Germany", "Join the League of Nations"], ans: "Keep the US out of WWII" },
            { year: 1944, diff: 1, q: "D-Day was the Allied invasion of:", options: ["France (Normandy)", "Italy", "Germany", "Japan"], ans: "France (Normandy)" }
        ],
        boss: {
            title: "INAUGURAL ADDRESS",
            source: "Franklin D. Roosevelt, 1933",
            text: "\"So, first of all, let me assert my firm belief that the only thing we have to fear is fear itself—nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.\"",
            question: "FDR spoke these words during the height of:",
            options: ["World War II", "The Great Depression", "The Cold War", "The Vietnam War"],
            ans: "The Great Depression"
        }
    },
    {
        period: 8,
        range: "1945-1980",
        name: "Cold War & Civil Rights",
        questions: [
            // Level 1
            { year: 1969, diff: 1, q: "The first man on the moon was:", options: ["Glenn", "Armstrong", "Aldrin", "Gagarin"], ans: "Armstrong", explanation: "Neil Armstrong became the first person to walk on the Moon on July 20, 1969, during the Apollo 11 mission, famously declaring, 'That's one small step for [a] man, one giant leap for mankind.'" },
            { year: 1963, diff: 1, q: "MLK Jr. gave his 'I Have a Dream' speech in:", options: ["Selma", "Birmingham", "Washington DC", "Atlanta"], ans: "Washington DC", explanation: "Martin Luther King Jr. delivered his iconic 'I Have a Dream' speech on the steps of the Lincoln Memorial during the March on Washington for Jobs and Freedom in 1963." },
            { year: 1962, diff: 1, q: "The Cuban Missile Crisis was a standoff between US and:", options: ["China", "USSR", "Cuba", "Vietnam"], ans: "USSR", explanation: "The Cuban Missile Crisis was a 13-day confrontation between the United States and the Soviet Union concerning American ballistic missile deployment in Italy and Turkey with consequent Soviet ballistic missile deployment in Cuba." },
            // Level 2
            { year: 1947, diff: 2, q: "The policy of 'Containment' was first articulated in:", options: ["The Marshall Plan", "The Truman Doctrine", "NATO", "The UN Charter"], ans: "The Truman Doctrine", explanation: "The Truman Doctrine established the policy of containment, pledging US support for democracies against authoritarian threats (specifically communism), marking the start of the Cold War." },
            { year: 1954, diff: 2, q: "Brown v. Board of Education declared that:", options: ["Segregation is legal", "Separate is inherently unequal", "Schools must be funded equally", "Busing is mandatory"], ans: "Separate is inherently unequal", explanation: "In Brown v. Board of Education, the Supreme Court unanimously ruled that racial segregation in public schools was unconstitutional, overturning the 'separate but equal' doctrine established in Plessy v. Ferguson." },
            { year: 1964, diff: 2, q: "The Gulf of Tonkin Resolution gave the President power to:", options: ["Declare war", "Escalate war in Vietnam", "Negotiate peace", "Use nuclear weapons"], ans: "Escalate war in Vietnam", explanation: "The Gulf of Tonkin Resolution authorized President Lyndon B. Johnson to take all necessary measures to repel any armed attack against the forces of the United States and to prevent further aggression in Vietnam." },
            // Level 3
            { year: 1950, diff: 3, q: "McCarthyism refers to:", options: ["Anti-Communist hysteria", "Civil Rights activism", "Economic growth", "Suburbanization"], ans: "Anti-Communist hysteria", explanation: "McCarthyism refers to the practice of making accusations of subversion or treason without proper regard for evidence, characterized by the anti-Communist crusade led by Senator Joseph McCarthy in the 1950s." },
            { year: 1968, diff: 3, q: "The Tet Offensive was a turning point because:", options: ["US won militarily", "It turned US public opinion against the war", "North Vietnam surrendered", "China entered the war"], ans: "It turned US public opinion against the war", explanation: "Although the Tet Offensive was a military defeat for the Viet Cong, the scale and surprise of the attacks shocked the American public and fueled anti-war sentiment, marking a turning point in public support for the Vietnam War." },
            { year: 1973, diff: 3, q: "The War Powers Act was passed to:", options: ["Limit Presidential power to make war", "Increase military spending", "End the draft", "Support Israel"], ans: "Limit Presidential power to make war", explanation: "The War Powers Resolution (or Act) was a federal law intended to check the president's power to commit the United States to an armed conflict without the consent of the U.S. Congress." },
            // Expanded
            { year: 1948, diff: 2, q: "The 'Marshall Plan' was designed to:", options: ["Rebuild Europe and prevent the spread of Communism", "Punish Germany", "Create the UN", "Start the Korean War"], ans: "Rebuild Europe and prevent the spread of Communism" },
            { year: 1965, diff: 3, q: "The 'Great Society' programs under LBJ aimed to:", options: ["Eliminate poverty and racial injustice", "Win the Vietnam War", "Cut taxes", "Explore space"], ans: "Eliminate poverty and racial injustice" },
            { year: 1970, diff: 2, q: "The 'Stagflation' of the 1970s was a combination of:", options: ["High inflation and high unemployment", "Low inflation and high growth", "High taxes and low spending", "War and peace"], ans: "High inflation and high unemployment" },
            { year: 1974, diff: 1, q: "The Watergate scandal led to the resignation of:", options: ["Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan"], ans: "Richard Nixon" },
            // Bulk Expansion
            { year: 1949, diff: 2, q: "NATO was formed as a:", options: ["Military alliance against the Soviet Union", "Trade agreement", "Peace corps", "Space agency"], ans: "Military alliance against the Soviet Union" },
            { year: 1950, diff: 1, q: "The Korean War ended with:", options: ["A stalemate at the 38th parallel", "A US victory", "A Communist victory", "The unification of Korea"], ans: "A stalemate at the 38th parallel" },
            { year: 1953, diff: 3, q: "The CIA orchestrated a coup in Iran to:", options: ["Restore the Shah and protect oil interests", "Spread democracy", "Stop nuclear weapons", "Fight ISIS"], ans: "Restore the Shah and protect oil interests" },
            { year: 1955, diff: 1, q: "Rosa Parks sparked the:", options: ["Montgomery Bus Boycott", "March on Washington", "Freedom Rides", "Sit-ins"], ans: "Montgomery Bus Boycott" },
            { year: 1957, diff: 2, q: "The launch of Sputnik led the US to:", options: ["Create NASA and improve science education", "Declare war", "Build a wall", "End the space race"], ans: "Create NASA and improve science education" },
            { year: 1960, diff: 1, q: "The first televised presidential debates were between:", options: ["Kennedy and Nixon", "FDR and Dewey", "Eisenhower and Stevenson", "Carter and Ford"], ans: "Kennedy and Nixon" },
            { year: 1961, diff: 2, q: "The Bay of Pigs invasion was a failed attempt to:", options: ["Overthrow Fidel Castro", "Rescue hostages", "Stop drug trafficking", "Invade Mexico"], ans: "Overthrow Fidel Castro" },
            { year: 1964, diff: 2, q: "The Civil Rights Act of 1964:", options: ["Banned discrimination in public places", "Ended slavery", "Gave women the vote", "Desegregated the military"], ans: "Banned discrimination in public places" },
            { year: 1965, diff: 2, q: "The Voting Rights Act of 1965 aimed to:", options: ["End literacy tests and barriers to voting", "Lower the voting age", "Require ID", "Ban political parties"], ans: "End literacy tests and barriers to voting" },
            { year: 1968, diff: 1, q: "Which two leaders were assassinated in 1968?", options: ["MLK Jr. and Robert Kennedy", "JFK and Malcolm X", "Lincoln and Garfield", "Nixon and Ford"], ans: "MLK Jr. and Robert Kennedy" },
            { year: 1970, diff: 3, q: "The Kent State shootings occurred during a protest against:", options: ["The invasion of Cambodia", "The draft", "Civil Rights", "Nuclear power"], ans: "The invasion of Cambodia" },
            { year: 1972, diff: 2, q: "Nixon's visit to China was significant because it:", options: ["Opened diplomatic relations", "Ended the Vietnam War", "Started a war", "Sold Taiwan"], ans: "Opened diplomatic relations" },
            { year: 1979, diff: 2, q: "The Iranian Hostage Crisis contributed to the defeat of:", options: ["Jimmy Carter", "Ronald Reagan", "Gerald Ford", "Richard Nixon"], ans: "Jimmy Carter" },
            // New Questions
            { year: 1947, diff: 2, q: "The Taft-Hartley Act was passed to:", options: ["Restrict the power of labor unions", "Increase minimum wage", "End segregation", "Fund schools"], ans: "Restrict the power of labor unions" },
            { year: 1950, diff: 3, q: "NSC-68 called for:", options: ["Massive increase in military spending", "Nuclear disarmament", "Peace with Russia", "Isolationism"], ans: "Massive increase in military spending" },
            { year: 1956, diff: 1, q: "The Interstate Highway Act was signed by:", options: ["Eisenhower", "Truman", "Kennedy", "Nixon"], ans: "Eisenhower" },
            { year: 1961, diff: 3, q: "Eisenhower warned against the:", options: ["Military-Industrial Complex", "Communist Party", "Civil Rights Movement", "United Nations"], ans: "Military-Industrial Complex" },
            { year: 1966, diff: 2, q: "Miranda v. Arizona established:", options: ["Rights of the accused (Miranda Rights)", "Right to privacy", "Right to vote", "Free speech"], ans: "Rights of the accused (Miranda Rights)" },
            { year: 1973, diff: 1, q: "Roe v. Wade legalized:", options: ["Abortion", "Gay Marriage", "Marijuana", "Gambling"], ans: "Abortion" }
        ],
        boss: {
            title: "LETTER FROM BIRMINGHAM JAIL",
            source: "Martin Luther King Jr., 1963",
            text: "\"Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny. Whatever affects one directly, affects all indirectly.\"",
            question: "King wrote this letter to defend:",
            options: ["Violent revolution", "Nonviolent civil disobedience", "Black Separatism", "The Vietnam War"],
            ans: "Nonviolent civil disobedience"
        }
    },
    {
        period: 9,
        range: "1980-Present",
        name: "Modern America",
        questions: [
            // Level 1
            { year: 2001, diff: 1, q: "On 9/11, terrorists attacked the World Trade Center and:", options: ["The White House", "The Pentagon", "The Capitol", "The Statue of Liberty"], ans: "The Pentagon", explanation: "On September 11, 2001, al-Qaeda terrorists hijacked four planes; two hit the Twin Towers in NYC, one hit the Pentagon in Arlington, Virginia, and the fourth crashed in Pennsylvania." },
            { year: 2008, diff: 1, q: "The first African American President was:", options: ["Jackson", "Obama", "King", "Powell"], ans: "Obama", explanation: "Barack Obama made history in 2008 when he was elected as the 44th President of the United States, becoming the first African American to hold the office." },
            { year: 1989, diff: 1, q: "The symbol of the Cold War that fell in 1989 was:", options: ["Iron Curtain", "Berlin Wall", "Kremlin", "Great Wall"], ans: "Berlin Wall", explanation: "The fall of the Berlin Wall in November 1989 symbolized the collapse of communism in Eastern Europe and the beginning of the end of the Cold War." },
            // Level 2
            { year: 1980, diff: 2, q: "Reaganomics was based on the theory of:", options: ["Keynesianism", "Supply-side economics", "Socialism", "Protectionism"], ans: "Supply-side economics", explanation: "Reaganomics, or supply-side economics, advocated for tax cuts and deregulation to stimulate economic growth, based on the theory that benefits would 'trickle down' to the rest of the economy." },
            { year: 1991, diff: 2, q: "Operation Desert Storm was launched to liberate:", options: ["Iraq", "Kuwait", "Iran", "Saudi Arabia"], ans: "Kuwait", explanation: "Operation Desert Storm was a US-led coalition military operation to expel occupying Iraqi forces from Kuwait, which Iraq had invaded and annexed in 1990." },
            { year: 1994, diff: 2, q: "NAFTA was a trade agreement between US, Canada, and:", options: ["China", "Mexico", "Europe", "Japan"], ans: "Mexico", explanation: "The North American Free Trade Agreement (NAFTA) created a trilateral trade bloc in North America, eliminating most tariffs on trade between the US, Canada, and Mexico." },
            // Level 3
            { year: 2001, diff: 3, q: "The USA PATRIOT Act raised concerns about:", options: ["National Security", "Civil Liberties/Privacy", "Immigration", "Taxes"], ans: "Civil Liberties/Privacy", explanation: "Passed in the wake of 9/11, the USA PATRIOT Act expanded law enforcement's surveillance powers, raising significant concerns about the violation of civil liberties and privacy rights." },
            { year: 2010, diff: 3, q: "The Affordable Care Act (Obamacare) aimed to:", options: ["Nationalize hospitals", "Expand health insurance coverage", "Reduce doctor pay", "End Medicare"], ans: "Expand health insurance coverage", explanation: "The Affordable Care Act (ACA) was enacted to increase the quality and affordability of health insurance, lower the uninsured rate, and reduce the costs of healthcare." },
            { year: 2000, diff: 3, q: "Bush v. Gore was resolved by:", options: ["Congress", "The Supreme Court", "A recount", "Coin toss"], ans: "The Supreme Court", explanation: "The 2000 presidential election between George W. Bush and Al Gore was effectively decided by the Supreme Court case Bush v. Gore, which halted the recount in Florida." },
            // Expanded
            { year: 1994, diff: 2, q: "The 'Contract with America' (1994) was a platform for:", options: ["The Republican Party", "The Democratic Party", "The Green Party", "The Reform Party"], ans: "The Republican Party" },
            { year: 1999, diff: 3, q: "The 'Dot-com bubble' of the late 1990s was driven by:", options: ["Speculation in internet-based companies", "Real estate", "Oil prices", "Gold"], ans: "Speculation in internet-based companies" },
            { year: 2001, diff: 2, q: "The 'War on Terror' began in response to:", options: ["The 9/11 attacks", "The invasion of Iraq", "The Gulf War", "The Cold War"], ans: "The 9/11 attacks" },
            { year: 2008, diff: 1, q: "The 2008 financial crisis was triggered by:", options: ["The collapse of the housing market", "High taxes", "The war in Afghanistan", "Tech stocks"], ans: "The collapse of the housing market" },
            // Bulk Expansion
            { year: 1981, diff: 2, q: "Reagan fired striking members of which union?", options: ["PATCO (Air Traffic Controllers)", "UAW (Auto Workers)", "Teamsters", "Teachers"], ans: "PATCO (Air Traffic Controllers)" },
            { year: 1983, diff: 3, q: "The Strategic Defense Initiative (SDI) was nicknamed:", options: ["Star Wars", "The Manhattan Project", "Apollo", "Skynet"], ans: "Star Wars" },
            { year: 1986, diff: 3, q: "The Iran-Contra Affair involved selling arms to Iran to fund rebels in:", options: ["Nicaragua", "Cuba", "El Salvador", "Panama"], ans: "Nicaragua" },
            { year: 1990, diff: 1, q: "The Americans with Disabilities Act (ADA) prohibited:", options: ["Discrimination based on disability", "Smoking", "Alcohol", "Guns"], ans: "Discrimination based on disability" },
            { year: 1991, diff: 1, q: "The Soviet Union collapsed, marking the end of:", options: ["The Cold War", "WWII", "WWI", "The Vietnam War"], ans: "The Cold War" },
            { year: 1992, diff: 2, q: "The Los Angeles Riots were sparked by:", options: ["The Rodney King verdict", "The OJ Simpson trial", "High taxes", "Gang violence"], ans: "The Rodney King verdict" },
            { year: 1995, diff: 3, q: "The Oklahoma City Bombing was an act of:", options: ["Domestic terrorism", "Foreign terrorism", "Accident", "War"], ans: "Domestic terrorism" },
            { year: 1998, diff: 2, q: "Bill Clinton was impeached for:", options: ["Perjury and obstruction of justice", "Treason", "Bribery", "War crimes"], ans: "Perjury and obstruction of justice" },
            { year: 2000, diff: 1, q: "The 2000 Election came down to disputed votes in:", options: ["Florida", "Ohio", "Texas", "California"], ans: "Florida" },
            { year: 2003, diff: 2, q: "The US invaded Iraq based on intelligence about:", options: ["Weapons of Mass Destruction (WMDs)", "Oil", "Gold", "Hostages"], ans: "Weapons of Mass Destruction (WMDs)" },
            { year: 2005, diff: 1, q: "Hurricane Katrina caused massive devastation in:", options: ["New Orleans", "Miami", "Houston", "New York"], ans: "New Orleans" },
            { year: 2011, diff: 1, q: "Osama bin Laden was killed by US forces in:", options: ["Pakistan", "Afghanistan", "Iraq", "Iran"], ans: "Pakistan" },
            { year: 2015, diff: 2, q: "Obergefell v. Hodges legalized:", options: ["Same-sex marriage", "Marijuana", "Gambling", "Abortion"], ans: "Same-sex marriage" },
            // New Questions
            { year: 1986, diff: 2, q: "The Challenger explosion was a tragedy for:", options: ["NASA", "The Navy", "The Army", "The Air Force"], ans: "NASA" },
            { year: 1989, diff: 3, q: "The Exxon Valdez incident was a:", options: ["Massive oil spill", "Nuclear meltdown", "Terrorist attack", "Stock crash"], ans: "Massive oil spill" },
            { year: 1993, diff: 2, q: "The 'Don't Ask, Don't Tell' policy concerned:", options: ["Gays in the military", "Spies", "Immigrants", "Taxes"], ans: "Gays in the military" },
            { year: 2002, diff: 1, q: "The Department of Homeland Security was created after:", options: ["9/11", "Hurricane Katrina", "The Cold War", "WWII"], ans: "9/11" },
            { year: 2008, diff: 2, q: "The 'Great Recession' was compared to:", options: ["The Great Depression", "The Panic of 1873", "The Dot-com bubble", "The 1970s stagflation"], ans: "The Great Depression" },
            { year: 2016, diff: 1, q: "Donald Trump defeated whom in the 2016 election?", options: ["Hillary Clinton", "Bernie Sanders", "Joe Biden", "Ted Cruz"], ans: "Hillary Clinton" }
        ],
        boss: {
            title: "SPEECH: TEAR DOWN THIS WALL",
            source: "Ronald Reagan, 1987",
            text: "\"General Secretary Gorbachev, if you seek peace, if you seek prosperity for the Soviet Union and Eastern Europe, if you seek liberalization: Come here to this gate! Mr. Gorbachev, open this gate! Mr. Gorbachev, tear down this wall!\"",
            question: "This speech symbolized the US commitment to:",
            options: ["Ending the Cold War", "Starting World War III", "Invading Russia", "Building the Berlin Wall"],
            ans: "Ending the Cold War"
        }
    }
];

const presidentialTrivia = [
    {
        question: "Who was the first president to serve two non-consecutive terms?",
        answer: "Grover Cleveland",
        options: ["Grover Cleveland", "Theodore Roosevelt", "Franklin D. Roosevelt", "Woodrow Wilson"]
    },
    {
        question: "Who was the youngest elected president?",
        answer: "John F. Kennedy",
        options: ["John F. Kennedy", "Theodore Roosevelt", "Barack Obama", "Bill Clinton"]
    },
    {
        question: "Which president signed the Emancipation Proclamation?",
        answer: "Abraham Lincoln",
        options: ["Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "James Buchanan"]
    },
    {
        question: "Who was the first president to live in the White House?",
        answer: "John Adams",
        options: ["John Adams", "George Washington", "Thomas Jefferson", "James Madison"]
    },
    {
        question: "Which president is on the $20 bill?",
        answer: "Andrew Jackson",
        options: ["Andrew Jackson", "Alexander Hamilton", "Ulysses S. Grant", "Benjamin Franklin"]
    },
    {
        question: "Who was the only president to resign from office?",
        answer: "Richard Nixon",
        options: ["Richard Nixon", "Andrew Johnson", "Bill Clinton", "Donald Trump"]
    },
    {
        question: "Which president created the New Deal?",
        answer: "Franklin D. Roosevelt",
        options: ["Franklin D. Roosevelt", "Theodore Roosevelt", "Herbert Hoover", "Harry S. Truman"]
    },
    {
        question: "Who was the president during the War of 1812?",
        answer: "James Madison",
        options: ["James Madison", "James Monroe", "Thomas Jefferson", "John Quincy Adams"]
    },
    {
        question: "Who was the only president to serve as Chief Justice?",
        answer: "William Howard Taft",
        options: ["William Howard Taft", "John Adams", "Franklin D. Roosevelt", "Woodrow Wilson"]
    },
    {
        question: "Which president signed the Interstate Highway Act?",
        answer: "Dwight D. Eisenhower",
        options: ["Dwight D. Eisenhower", "Harry S. Truman", "John F. Kennedy", "Lyndon B. Johnson"]
    },
    {
        question: "Who was the first president to be impeached?",
        answer: "Andrew Johnson",
        options: ["Andrew Johnson", "Bill Clinton", "Richard Nixon", "Donald Trump"]
    },
    {
        question: "Which president was a former Hollywood actor?",
        answer: "Ronald Reagan",
        options: ["Ronald Reagan", "Donald Trump", "John F. Kennedy", "Jimmy Carter"]
    },
    {
        question: "Who was known as the 'Rough Rider'?",
        answer: "Theodore Roosevelt",
        options: ["Theodore Roosevelt", "Andrew Jackson", "Ulysses S. Grant", "Zachary Taylor"]
    },
    {
        question: "Which president was known as 'Silent Cal'?",
        answer: "Calvin Coolidge",
        options: ["Calvin Coolidge", "Herbert Hoover", "Warren G. Harding", "Woodrow Wilson"]
    },
    {
        question: "Who was the first president born in the United States?",
        answer: "Martin Van Buren",
        options: ["Martin Van Buren", "Andrew Jackson", "George Washington", "Thomas Jefferson"]
    },
    {
        question: "Which president's administration purchased Alaska?",
        answer: "Andrew Johnson",
        options: ["Andrew Johnson", "Ulysses S. Grant", "Abraham Lincoln", "James Buchanan"]
    },
    {
        question: "Who was the president during the Mexican-American War?",
        answer: "James K. Polk",
        options: ["James K. Polk", "Zachary Taylor", "John Tyler", "Andrew Jackson"]
    },
    {
        question: "Which president issued the Monroe Doctrine?",
        answer: "James Monroe",
        options: ["James Monroe", "John Quincy Adams", "James Madison", "Andrew Jackson"]
    }
];

const stimulusData = [
    {
        id: "stim-0",
        type: "text",
        content: "Sir, As I know that you will be pleased at the great victory with which Our Lord has crowned my voyage, I write this to you, from which you will learn how in thirty-three days, I passed from the Canary Islands to the Indies with the fleet which the most illustrious king and queen... gave to me. And there I found very many islands filled with people innumerable, and of them all I have taken possession...",
        source: "Christopher Columbus, Letter to Luis de Santangel, 1493",
        year: 1493,
        period: 1,
        questions: [
            {
                q: "The primary purpose of Columbus's letter was to:",
                options: ["Convince the Spanish Crown of the voyage's value", "Spread democracy to the New World", "Document scientific flora and fauna", "Protest against the treatment of Natives"],
                ans: "Convince the Spanish Crown of the voyage's value"
            },
            {
                q: "The 'taking possession' of islands mentioned by Columbus is best understood in the historical context of:",
                options: ["The Doctrine of Discovery", "The Enlightenment", "The Protestant Reformation", "The Industrial Revolution"],
                ans: "The Doctrine of Discovery"
            },
            {
                q: "From a historical point of view, the interactions described in the letter most directly led to:",
                options: ["The decline of Native American populations due to disease", "The immediate end of slavery", "The unification of European powers", "The rise of the Aztec Empire"],
                ans: "The decline of Native American populations due to disease"
            }
        ]
    },
    {
        id: "stim-0b",
        type: "text",
        content: "The Spanish have a perfect right to rule these barbarians of the New World and the adjacent islands, who in prudence, skill, virtues, and humanity are as inferior to the Spanish as children to adults, or women to men, for there exists between the two as great a difference as between savage and cruel races and the most merciful...",
        source: "Juan Ginés de Sepúlveda, On the Just Causes for War against the Indians, 1547",
        year: 1547,
        period: 1,
        questions: [
            {
                q: "Sepúlveda's point of view regarding Native Americans was most directly opposed by:",
                options: ["Bartolomé de Las Casas", "Hernán Cortés", "Christopher Columbus", "Ferdinand Magellan"],
                ans: "Bartolomé de Las Casas"
            },
            {
                q: "The intended audience for this argument was primarily:",
                options: ["The Spanish Crown and Council", "Native American leaders", "English colonists", "French fur traders"],
                ans: "The Spanish Crown and Council"
            },
            {
                q: "Sepúlveda's arguments were written in the historical context of the debate over:",
                options: ["The morality of the Encomienda System", "The border with Portugal", "The translation of the Bible", "The price of gold"],
                ans: "The morality of the Encomienda System"
            }
        ]
    },
    {
        id: "stim-1",
        type: "text",
        content: "The unity of government which constitutes you one people is also now dear to you. It is justly so, for it is a main pillar in the edifice of your real independence, the support of your tranquility at home, your peace abroad; of your safety; of your prosperity; of that very liberty which you so highly prize... It serves always to distract the public councils and enfeeble the public administration. It agitates the community with ill-founded jealousies and false alarms, kindles the animosity of one part against another, foments occasionally riot and insurrection.",
        source: "George Washington, Farewell Address, 1796",
        year: 1796,
        period: 3,
        questions: [
            {
                q: "From Washington's point of view, political parties were:",
                options: ["Dangerous and divisive", "Essential for democracy", "A necessary evil", "The best way to organize government"],
                ans: "Dangerous and divisive"
            },
            {
                q: "This address was delivered in the historical context of:",
                options: ["Deepening political divisions and foreign entanglements", "The end of the Civil War", "The victory in the War of 1812", "The signing of the Declaration of Independence"],
                ans: "Deepening political divisions and foreign entanglements"
            },
            {
                q: "The primary purpose of Washington's warning regarding foreign alliances was to:",
                options: ["Preserve national unity and neutrality", "Prepare for war with France", "Expand American territory", "Support the British Empire"],
                ans: "Preserve national unity and neutrality"
            }
        ]
    },
    {
        id: "stim-1b",
        type: "text",
        content: "Small islands not capable of protecting themselves, are the proper objects for kingdoms to take under their care; but there is something very absurd, in supposing a continent to be perpetually governed by an island. In no instance hath nature made the satellite larger than its primary planet.",
        source: "Thomas Paine, Common Sense, 1776",
        year: 1776,
        period: 3,
        questions: [
            {
                q: "The primary purpose of this pamphlet was to:",
                options: ["Convince colonists to support independence from Britain", "Propose a new form of government", "Negotiate a peace treaty with France", "Argue against slavery"],
                ans: "Convince colonists to support independence from Britain"
            },
            {
                q: "Paine's point of view was most heavily influenced by the ideas of:",
                options: ["The Enlightenment", "The Great Awakening", "Mercantilism", "The Renaissance"],
                ans: "The Enlightenment"
            },
            {
                q: "The historical context of this document is best described as:",
                options: ["The early stages of the American Revolution", "The aftermath of the French and Indian War", "The ratification of the Constitution", "The War of 1812"],
                ans: "The early stages of the American Revolution"
            }
        ]
    },
    {
        id: "stim-2",
        type: "text",
        content: "We hold these truths to be self-evident: that all men and women are created equal; that they are endowed by their Creator with certain inalienable rights; that among these are life, liberty, and the pursuit of happiness... The history of mankind is a history of repeated injuries and usurpations on the part of man toward woman, having in direct object the establishment of an absolute tyranny over her.",
        source: "Declaration of Sentiments, Seneca Falls Convention, 1848",
        year: 1848,
        period: 4,
        questions: [
            {
                q: "The historical context of this document's language is best understood as modeling:",
                options: ["The Declaration of Independence", "The Constitution", "The Bill of Rights", "Common Sense"],
                ans: "The Declaration of Independence"
            },
            {
                q: "The point of view of the organizers was also deeply rooted in which other reform movement?",
                options: ["Abolitionism", "Temperance", "Labor Unions", "Nativism"],
                ans: "Abolitionism"
            },
            {
                q: "The primary purpose of the movement launched by this document was to achieve:",
                options: ["Women's Suffrage", "Prohibition of Alcohol", "Abolition of Slavery", "Prison Reform"],
                ans: "Women's Suffrage"
            }
        ]
    },
    {
        id: "stim-3",
        type: "text",
        content: "The problem of the twentieth century is the problem of the color-line, the relation of the darker to the lighter races of men in Asia and Africa, in America and the islands of the sea.",
        source: "W.E.B. Du Bois, The Souls of Black Folk, 1903",
        year: 1903,
        period: 7,
        questions: [
            {
                q: "Du Bois's point of view regarding the 'color-line' was a direct challenge to the philosophy of:",
                options: ["Booker T. Washington", "Frederick Douglass", "Marcus Garvey", "Ida B. Wells"],
                ans: "Booker T. Washington"
            },
            {
                q: "In the historical context of this writing, which organization was founded to advance these goals?",
                options: ["NAACP", "UNIA", "SCLC", "SNCC"],
                ans: "NAACP"
            }
        ]
    },
    {
        id: "stim-4b",
        type: "text",
        content: "For we must consider that we shall be as a city upon a hill. The eyes of all people are upon us. So that if we shall deal falsely with our God in this work we have undertaken, and so cause Him to withdraw His present help from us, we shall be made a story and a by-word through the world.",
        source: "John Winthrop, A Model of Christian Charity, 1630",
        year: 1630,
        period: 2,
        questions: [
            {
                q: "The intended audience for Winthrop's sermon was:",
                options: ["The Puritan settlers of Massachusetts Bay", "The Jamestown colonists", "The Native American tribes", "The King of England"],
                ans: "The Puritan settlers of Massachusetts Bay"
            },
            {
                q: "The 'City upon a Hill' metaphor best reflects the Puritan point of view regarding:",
                options: ["American Exceptionalism and religious mission", "Religious Tolerance and diversity", "Separation of Church and State", "Manifest Destiny and expansion"],
                ans: "American Exceptionalism and religious mission"
            },
            {
                q: "The historical context of the society Winthrop describes was characterized by:",
                options: ["A strict theocratic hierarchy", "Religious freedom for all", "A separation of church and state", "An economy based on tobacco"],
                ans: "A strict theocratic hierarchy"
            }
        ]
    },
    {
        id: "stim-4c",
        type: "text",
        content: "The Declaration of Independence... defined as the fundamental principle of our government, that 'all men are created equal.' This was no scientific statement, but a simple declaration of the intent of the Creator... But if this be true, how can we justify the holding of slaves?",
        source: "William Lloyd Garrison, The Liberator, 1831",
        year: 1831,
        period: 4,
        questions: [
            {
                q: "The publication of 'The Liberator' is best understood in the historical context of:",
                options: ["The rise of Radical Abolitionism", "The Temperance Movement", "The Free Soil Party", "The Colonization Society"],
                ans: "The rise of Radical Abolitionism"
            },
            {
                q: "Garrison's point of view was most strongly opposed by:",
                options: ["Southern plantation owners", "Northern factory workers", "Western farmers", "Native Americans"],
                ans: "Southern plantation owners"
            },
            {
                q: "The primary purpose of the movement led by Garrison was to achieve:",
                options: ["Immediate and uncompensated emancipation", "Gradual emancipation with compensation", "Colonization of freed slaves", "Restrictions on the expansion of slavery"],
                ans: "Immediate and uncompensated emancipation"
            }
        ]
    },
    {
        id: "stim-5",
        type: "text",
        content: "That on the first day of January, in the year of our Lord one thousand eight hundred and sixty-three, all persons held as slaves within any State or designated part of a State, the people whereof shall then be in rebellion against the United States, shall be then, thenceforward, and forever free.",
        source: "Abraham Lincoln, Emancipation Proclamation, 1863",
        year: 1863,
        period: 5,
        questions: [
            {
                q: "The immediate legal purpose of this proclamation was to:",
                options: ["Free slaves only in Confederate-held territory", "Free all slaves in the United States", "End the Civil War", "Grant citizenship to former slaves"],
                ans: "Free slaves only in Confederate-held territory"
            },
            {
                q: "A major strategic purpose of issuing this proclamation was to:",
                options: ["Prevent British intervention", "Gaining support from the Border States", "Encouraging Southern secession", "Satisfying Northern Democrats"],
                ans: "Prevent British intervention"
            },
            {
                q: "This document fundamentally changed the historical context of the Civil War by:",
                options: ["Transforming it into a war against slavery", "Ending the draft in the North", "Allowing women to serve in combat", "Surrendering the Border States"],
                ans: "Transforming it into a war against slavery"
            }
        ]
    },
    {
        id: "stim-5b",
        type: "text",
        content: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal... that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.",
        source: "Abraham Lincoln, Gettysburg Address, 1863",
        year: 1863,
        period: 5,
        questions: [
            {
                q: "Lincoln's reference to 1776 places the Civil War in the historical context of:",
                options: ["The unfinished work of the American Revolution", "The Constitution's ratification", "The landing at Plymouth", "The start of the Civil War"],
                ans: "The unfinished work of the American Revolution"
            },
            {
                q: "A primary purpose of this speech was to redefine the war as a struggle for:",
                options: ["Human equality and a 'new birth of freedom'", "States' rights", "Economic dominance", "Territorial expansion"],
                ans: "Human equality and a 'new birth of freedom'"
            },
            {
                q: "The immediate historical context of this speech was:",
                options: ["The dedication of a military cemetery", "The signing of the Peace Treaty", "The inauguration of the President", "The surrender of Lee"],
                ans: "The dedication of a military cemetery"
            }
        ]
    },
    {
        id: "stim-6",
        type: "text",
        content: "The problem of our age is the proper administration of wealth, so that the ties of brotherhood may still bind together the rich and poor in harmonious relationship... The man of wealth thus becoming the mere agent and trustee for his poorer brethren, bringing to their service his superior wisdom, experience, and ability to administer, doing for them better than they would or could do for themselves.",
        source: "Andrew Carnegie, Wealth, 1889",
        year: 1889,
        period: 6,
        questions: [
            {
                q: "Carnegie's point of view as expressed here is best known as:",
                options: ["The Gospel of Wealth", "Social Darwinism", "The Social Gospel", "Laissez-Faire"],
                ans: "The Gospel of Wealth"
            },
            {
                q: "Critics of this point of view would most likely argue that it ignores:",
                options: ["Systemic inequality and labor exploitation", "The benefits of philanthropy", "The importance of industrialization", "The role of government in the economy"],
                ans: "Systemic inequality and labor exploitation"
            },
            {
                q: "Carnegie's views were in direct opposition to the point of view of:",
                options: ["Labor Unions and Socialism", "Laissez-Faire Capitalism", "Social Darwinism", "The Republican Party"],
                ans: "Labor Unions and Socialism"
            }
        ]
    },
    {
        id: "stim-6b",
        type: "text",
        content: "You shall not press down upon the brow of labor this crown of thorns, you shall not crucify mankind upon a cross of gold.",
        source: "William Jennings Bryan, Cross of Gold Speech, 1896",
        year: 1896,
        period: 6,
        questions: [
            {
                q: "The primary purpose of Bryan's speech was to defend:",
                options: ["Bimetallism / Free Silver", "The Gold Standard", "Protective Tariffs", "Industrial Monopolies"],
                ans: "Bimetallism / Free Silver"
            },
            {
                q: "The intended audience that most strongly supported Bryan's message was:",
                options: ["Populists and Farmers", "Big Business Owners", "Bankers", "Urban Factory Workers"],
                ans: "Populists and Farmers"
            },
            {
                q: "The historical context of the 1896 election marked the beginning of:",
                options: ["Republican dominance in national politics", "The collapse of the Democratic Party", "The rise of the Socialist Party", "The end of the Gilded Age"],
                ans: "Republican dominance in national politics"
            }
        ]
    },
    {
        id: "stim-7b",
        type: "text",
        content: "We intend to begin on the first of February unrestricted submarine warfare. We shall endeavor in spite of this to keep the United States of America neutral. In the event of this not succeeding, we make Mexico a proposal of alliance on the following basis: make war together, make peace together...",
        source: "Zimmermann Telegram, 1917",
        year: 1917,
        period: 7,
        questions: [
            {
                q: "This document provided the immediate historical context for:",
                options: ["US entry into World War I", "The Spanish-American War", "The Mexican-American War", "The Good Neighbor Policy"],
                ans: "US entry into World War I"
            },
            {
                q: "The proposal to Mexico involved territory lost in the historical context of:",
                options: ["The Mexican-American War", "The Texas Revolution", "The Gadsden Purchase", "The Spanish-American War"],
                ans: "The Mexican-American War"
            },
            {
                q: "At the time of this message, the prevailing public point of view in the US was:",
                options: ["Divided but shifting towards war", "Strongly isolationist", "Eager for war", "Pro-German"],
                ans: "Divided but shifting towards war"
            }
        ]
    },
    {
        id: "stim-8",
        type: "text",
        content: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
        source: "Martin Luther King Jr., I Have a Dream, 1963",
        year: 1963,
        period: 8,
        questions: [
            {
                q: "The immediate historical context of this speech was:",
                options: ["March on Washington", "Montgomery Bus Boycott", "Selma to Montgomery March", "Freedom Summer"],
                ans: "March on Washington"
            },
            {
                q: "A primary purpose of the movement led by King was realized by the passage of:",
                options: ["The Civil Rights Act of 1964", "The 13th Amendment", "Brown v. Board of Education", "The Equal Rights Amendment"],
                ans: "The Civil Rights Act of 1964"
            },
            {
                q: "King's point of view on non-violence was most directly influenced by:",
                options: ["Mahatma Gandhi", "Malcolm X", "Marcus Garvey", "Karl Marx"],
                ans: "Mahatma Gandhi"
            }
        ]
    },
    {
        id: "stim-8b",
        type: "text",
        content: "The truth of the matter is that you do have a right to know... I have never been a quitter. To leave office before my term is completed is abhorrent to every instinct in my body. But as President, I must put the interest of America first... Therefore, I shall resign the Presidency effective at noon tomorrow.",
        source: "Richard Nixon, Resignation Speech, 1974",
        year: 1974,
        period: 8,
        questions: [
            {
                q: "Nixon's resignation occurred in the historical context of:",
                options: ["The Watergate Scandal", "The Vietnam War", "The Iran-Contra Affair", "Economic Stagflation"],
                ans: "The Watergate Scandal"
            },
            {
                q: "The events leading to this speech fueled a growing public point of view characterized by:",
                options: ["Distrust in government", "Patriotism", "Support for executive privilege", "Confidence in the media"],
                ans: "Distrust in government"
            },
            {
                q: "In the aftermath of this event, the historical context of Ford's presidency was defined by:",
                options: ["Pardoning Nixon", "Ending the Vietnam War", "Raising taxes", "Visiting China"],
                ans: "Pardoning Nixon"
            }
        ]
    },
    {
        id: "stim-9",
        type: "text",
        content: "In this present crisis, government is not the solution to our problem; government is the problem. From time to time we've been tempted to believe that society has become too complex to be managed by self-rule, that government by an elite group is superior to government for, by, and of the people.",
        source: "Ronald Reagan, First Inaugural Address, 1981",
        year: 1981,
        period: 9,
        questions: [
            {
                q: "Reagan's assertion marked a reaction against the historical context of:",
                options: ["The New Deal and Great Society", "The Progressive Era", "The Gilded Age", "Manifest Destiny"],
                ans: "The New Deal and Great Society"
            },
            {
                q: "The economic point of view supporting this excerpt is best known as:",
                options: ["Supply-Side Economics", "Keynesian Economics", "Mercantilism", "Socialism"],
                ans: "Supply-Side Economics"
            },
            {
                q: "The political point of view expressed here was most strongly supported by:",
                options: ["The New Right / Conservative Coalition", "The New Deal Coalition", "The Silent Majority", "The Counterculture"],
                ans: "The New Right / Conservative Coalition"
            }
        ]
    },
    {
        id: "stim-9b",
        type: "text",
        content: "We will make no distinction between the terrorists who committed these acts and those who harbor them... Today, our fellow citizens, our way of life, our very freedom came under attack in a series of deliberate and deadly terrorist acts.",
        source: "George W. Bush, Address to the Nation, September 11, 2001",
        year: 2001,
        period: 9,
        questions: [
            {
                q: "This address marked the beginning of a new historical context defined by:",
                options: ["The War on Terror", "The Cold War", "Containment", "Isolationism"],
                ans: "The War on Terror"
            },
            {
                q: "A direct domestic consequence of the historical context described was:",
                options: ["The USA PATRIOT Act", "The Affordable Care Act", "The Voting Rights Act", "The Immigration Act of 1965"],
                ans: "The USA PATRIOT Act"
            },
            {
                q: "The military actions following this speech were directed at the historical context of the Taliban regime in:",
                options: ["Afghanistan", "Iraq", "Iran", "North Korea"],
                ans: "Afghanistan"
            }
        ]
    }
];
