export type Category = 'Miscellaneous' | 'Science' | 'Geography' | 'History' | 'Literature' | 'Pop Culture' | 'Food' | 'Capitals' | 'New' | 'New words' | 'Old words' | 'Sports' | 'Medicine' | 'Coding';

export interface Question {
	question: string;
	answer: string;
	category: Category;
}

export const questions: Question[] = [
	{ question: 'Who discovered penicillin?', answer: 'Alexander Fleming', category: 'Science' },
	{
		question: 'What is the hardest natural substance on Earth?',
		answer: 'Diamond',
		category: 'Science',
	},
	{ question: 'How many bones are in the adult human body?', answer: '206', category: 'Science' },
	{
		question: "What gas makes up about 78% of Earth's atmosphere?",
		answer: 'Nitrogen',
		category: 'Science',
	},

	{
		question: 'What is the fastest-growing major religion in the world?',
		answer: 'Islam',
		category: 'Miscellaneous',
	},

	{
		question: 'What are the three longest rivers in the world, and where are they located?',
		answer: 'Nile River (Africa), Amazon River (South America), Yangtze River (China)',
		category: 'Geography',
	},

	{
		question: 'What are the three tallest mountains in the world?',
		answer: 'Mount Everest, K2, Kangchenjunga',
		category: 'Geography',
	},

	{
		question: 'What are the five largest countries in the world by land area?',
		answer: 'Russia, Canada, China, United States, Brazil',
		category: 'Geography',
	},

	{
		question: 'What are the five most populous countries in the world?',
		answer: 'China, India, United States, Indonesia, Pakistan',
		category: 'Geography',
	},

	{
		question: 'What are the three largest deserts in the world?',
		answer: 'Antarctic Desert, Arctic Desert, Sahara Desert',
		category: 'Geography',
	},

	{
		question: 'What are four major seas of the world?',
		answer: 'Mediterranean Sea, Caribbean Sea, Red Sea, Baltic Sea',
		category: 'Geography',
	},

	{
		question: 'In Greek mythology, who is the goddess of marriage, equivalent to Juno in Roman mythology?',
		answer: 'Hera',
		category: 'Miscellaneous',
	},

	{
		question: 'In Greek mythology, who is the goddess of wisdom, equivalent to Minerva in Roman mythology?',
		answer: 'Athena',
		category: 'Miscellaneous',
	},

	{
		question: "Which artist created 'Guernica' and 'Les Demoiselles d'Avignon' and helped pioneer Cubism?",
		answer: 'Pablo Picasso',
		category: 'Miscellaneous',
	},
	{
		question: "Which artist painted 'Water Lilies' and 'Impression: Sunrise' and helped found Impressionism?",
		answer: 'Claude Monet',
		category: 'Miscellaneous',
	},
	{
		question: "Which Surrealist artist painted 'The Persistence of Memory'?",
		answer: 'Salvador Dalí',
		category: 'Miscellaneous',
	},
	{
		question: "Which Baroque artist painted 'The Night Watch'?",
		answer: 'Rembrandt van Rijn',
		category: 'Miscellaneous',
	},

	{
		question: 'Which two musicians are tied for the most Grammy Award wins?',
		answer: 'Beyoncé Knowles and Quincy Jones',
		category: 'Pop Culture',
	},

	{
		question: "Which director directed 'Goodfellas' and 'Taxi Driver'?",
		answer: 'Martin Scorsese',
		category: 'Pop Culture',
	},

	// Keeping Walt Disney Oscar wins as-is conceptually
	{
		question: 'Who holds the record for the most Academy Award wins (Oscars) with 22 competitive Oscars?',
		answer: 'Walt Disney',
		category: 'Pop Culture',
	},

	{
		question: 'Which actor holds the record for the most Academy Award wins for acting, with four Oscars?',
		answer: 'Katharine Hepburn',
		category: 'Pop Culture',
	},

	// World Capitals

	{ question: 'What is the capital of Portugal?', answer: 'Lisbon', category: 'Capitals' },
	{ question: 'What is the capital of Greece?', answer: 'Athens', category: 'Capitals' },
	{ question: 'What is the capital of Austria?', answer: 'Vienna', category: 'Capitals' },
	{ question: 'What is the capital of the Czech Republic?', answer: 'Prague', category: 'Capitals' },
	{ question: 'What is the capital of Poland?', answer: 'Warsaw', category: 'Capitals' },
	{ question: 'What is the capital of Hungary?', answer: 'Budapest', category: 'Capitals' },
	{ question: 'What is the capital of Ireland?', answer: 'Dublin', category: 'Capitals' },
	{ question: 'What is the capital of Norway?', answer: 'Oslo', category: 'Capitals' },
	{ question: 'What is the capital of Sweden?', answer: 'Stockholm', category: 'Capitals' },
	{ question: 'What is the capital of Finland?', answer: 'Helsinki', category: 'Capitals' },

	{ question: 'What is the capital of North Korea?', answer: 'Pyongyang', category: 'Capitals' },
	{ question: 'What is the capital of Thailand?', answer: 'Bangkok', category: 'Capitals' },
	{ question: 'What is the capital of Vietnam?', answer: 'Hanoi', category: 'Capitals' },
	{ question: 'What is the capital of Indonesia?', answer: 'Jakarta', category: 'Capitals' },
	{ question: 'What is the capital of India?', answer: 'New Delhi', category: 'Capitals' },
	{ question: 'What is the capital of Pakistan?', answer: 'Islamabad', category: 'Capitals' },

	{ question: 'What is the capital of Kenya?', answer: 'Nairobi', category: 'Capitals' },
	{ question: 'What is the capital of Algeria?', answer: 'Algiers', category: 'Capitals' },
	{ question: 'What is the capital of Canada?', answer: 'Ottawa', category: 'Capitals' },

	{ question: 'What is the capital of Argentina?', answer: 'Buenos Aires', category: 'Capitals' },
	{ question: 'What is the capital of Chile?', answer: 'Santiago', category: 'Capitals' },
	{ question: 'What is the capital of Peru?', answer: 'Lima', category: 'Capitals' },
	{ question: 'What is the capital of Australia?', answer: 'Canberra', category: 'Capitals' },
	{ question: 'What is the capital of Saudi Arabia?', answer: 'Riyadh', category: 'Capitals' },
	{ question: 'What is the capital of South Africa?', answer: 'Pretoria', category: 'Capitals' },

	{
		question: 'What is the name of the famous document, sealed by King John of England in 1215, that established that even the King must obey the law?',
		answer: 'Magna Carta',
		category: 'History',
	},

	// U.S. & Modern History
	{
		question: 'When did Christopher Columbus arrive in the Americas?',
		answer: '1492',
		category: 'History',
	},
	{ question: 'When did the Mayflower land at Plymouth?', answer: '1620', category: 'History' },
	{
		question: 'When was the Declaration of Independence signed?',
		answer: '1776',
		category: 'History',
	},
	{
		question: 'When was the United States Constitution signed?',
		answer: '1787',
		category: 'History',
	},
	{ question: 'When was the Louisiana Purchase completed?', answer: '1803', category: 'History' },

	{ question: 'When did the California Gold Rush begin?', answer: '1848', category: 'History' },
	{
		question: 'When did the American Civil War begin and end?',
		answer: '1861–1865',
		category: 'History',
	},
	{
		question: 'When was the Emancipation Proclamation issued?',
		answer: '1863',
		category: 'History',
	},
	{ question: 'When did the United States enter World War I?', answer: '1917', category: 'History' },
	{
		question: 'When did women gain the right to vote in the United States?',
		answer: '1920',
		category: 'History',
	},
	{
		question: 'When did the stock market crash that caused the Great Depression occur?',
		answer: '1929',
		category: 'History',
	},
	{ question: 'When was the attack on Pearl Harbor?', answer: '1941', category: 'History' },
	{ question: 'When did World War II end?', answer: '1945', category: 'History' },
	{
		question: "When did Martin Luther King Jr. deliver the 'I Have a Dream' speech?",
		answer: '1963',
		category: 'History',
	},
	{ question: 'When was the Civil Rights Act passed?', answer: '1964', category: 'History' },
	{
		question: 'When did the Apollo 11 moon landing take place?',
		answer: '1969',
		category: 'History',
	},
	{ question: 'When did the Vietnam War end?', answer: '1973', category: 'History' },
	{ question: 'When did the Gulf War take place?', answer: '1991', category: 'History' },

	// Ancient & World History
	{
		question: 'When did the first major civilizations begin to develop?',
		answer: '3500 BCE',
		category: 'History',
	},
	{
		question: 'When were the Egyptian pyramids constructed?',
		answer: '2500 BCE',
		category: 'History',
	},
	{ question: 'When was Buddhism founded?', answer: '500 BCE', category: 'History' },
	{
		question: 'When did Alexander the Great build his empire?',
		answer: '330 BCE',
		category: 'History',
	},
	{ question: 'When did the Roman Empire begin?', answer: '27 BCE', category: 'History' },
	{ question: 'When did the Western Roman Empire fall?', answer: '476', category: 'History' },
	{ question: 'When did Islam arise?', answer: '610', category: 'History' },
	{ question: 'When did the Viking Age begin?', answer: '793', category: 'History' },
	{ question: 'When did the First Crusade begin?', answer: '1096', category: 'History' },
	{
		question: 'When did the Black Death begin spreading in Europe?',
		answer: '1347',
		category: 'History',
	},
	{ question: 'When did the Industrial Revolution begin?', answer: '1760', category: 'History' },
	{ question: 'When did the French Revolution begin?', answer: '1789', category: 'History' },
	{ question: 'When did World War I begin?', answer: '1914', category: 'History' },
	{ question: 'When did World War II begin?', answer: '1939', category: 'History' },
	{ question: 'When was the United Nations founded?', answer: '1945', category: 'History' },
	{ question: 'When did the Cold War begin?', answer: '1940s', category: 'History' },
	{ question: 'When did the Berlin Wall fall?', answer: '1989', category: 'History' },

	// Chemistry — "Name the element" with descriptions
	{
		question: 'Which element is the lightest and most abundant in the universe?',
		answer: 'Hydrogen',
		category: 'Science',
	},
	{
		question: 'Which element is the second lightest and an inert noble gas?',
		answer: 'Helium',
		category: 'Science',
	},

	{
		question: 'Which element is the basis of life and forms diamond and graphite?',
		answer: 'Carbon',
		category: 'Science',
	},
	{
		question: "Which element makes up most of Earth's atmosphere and is essential for DNA and proteins?",
		answer: 'Nitrogen',
		category: 'Science',
	},
	{
		question: "Which element makes up 21% of Earth's atmosphere?",
		answer: 'Oxygen',
		category: 'Science',
	},

	{
		question: 'Which lightweight metal does not rust?',
		answer: 'Aluminum',
		category: 'Science',
	},
	{
		question: 'Which element is a major component of sand?',
		answer: 'Silicon',
		category: 'Science',
	},
	{
		question: 'Which element is essential for DNA and ATP and is commonly used in fertilizers?',
		answer: 'Phosphorus',
		category: 'Science',
	},
	{
		question: 'Which yellow nonmetal is used in gunpowder and matches?',
		answer: 'Sulfur',
		category: 'Science',
	},

	{
		question: 'Which essential electrolyte is important for heart function?',
		answer: 'Potassium',
		category: 'Science',
	},
	{
		question: 'Which metal is needed for hemoglobin and is the main component of steel?',
		answer: 'Iron',
		category: 'Science',
	},
	{
		question: 'Which metal is an excellent conductor used in wiring and coins?',
		answer: 'Copper',
		category: 'Science',
	},
	{
		question: 'Which metal supports immune function and galvanizes steel to prevent rust?',
		answer: 'Zinc',
		category: 'Science',
	},

	{
		question: 'Which dense and toxic metal was formerly used in pipes and paint?',
		answer: 'Lead',
		category: 'Science',
	},

	// General Science
	{
		question: 'What is the approximate speed of light in a vacuum?',
		answer: '300,000 km/s',
		category: 'Science',
	},

	{
		question: 'What is the Sun primarily made of?',
		answer: 'Hydrogen and helium',
		category: 'Science',
	},

	// Literature — Author questions

	{ question: "Who wrote 'To Kill a Mockingbird'?", answer: 'Harper Lee', category: 'Literature' },

	{ question: "Who wrote 'Pride and Prejudice'?", answer: 'Jane Austen', category: 'Literature' },
	{ question: "Who wrote 'Jane Eyre'?", answer: 'Charlotte Brontë', category: 'Literature' },

	{
		question: 'What is the name of the whaling ship in Moby-Dick?',
		answer: 'The Pequod',
		category: 'Literature',
	},

	{ question: 'When did the modern Olympic Games begin?', answer: '1896 Greece', category: 'Sports' },
	{
		question: 'Which NFL team has the most all-time wins?',
		answer: 'Chicago Bears',
		category: 'Sports',
	},

	{
		question: "Which Hall of Fame quarterback, nicknamed 'The Sheriff', set the NFL single-season records for both passing touchdowns and passing yards in 2013 on his way to a record fifth career MVP award?",
		answer: 'Peyton Manning',
		category: 'Sports',
	},

	// Great Lakes – 5
	{
		question: 'Which of the Great Lakes is the deepest and holds the most water?',
		answer: 'Lake Superior',
		category: 'Geography',
	},
	{
		question: 'Which Great Lake is the only one entirely within the United States?',
		answer: 'Lake Michigan',
		category: 'Geography',
	},
	{
		question: 'What are the 5 great lakes',
		answer: 'Superior, Michigan, Erie, Huron, Ontario',
		category: 'Geography',
	},
	{
		question: 'Which Great Lake lies at the lowest elevation and drains into the Atlantic Ocean via the St. Lawrence River?',
		answer: 'Lake Ontario',
		category: 'Geography',
	},
	{
		question: 'Which Great Lake is known for having the worst storms and shipwreck history, including the sinking of the Edmund Fitzgerald?',
		answer: 'Lake Superior',
		category: 'Geography',
	},

	// Shakespeare – 7
	{
		question: 'What tragedy is Shakespeare’s longest play?',
		answer: 'Hamlet',
		category: 'Literature',
	},
	{
		question: 'Which Shakespeare play features the characters Rosencrantz and Guildenstern?',
		answer: 'Hamlet',
		category: 'Literature',
	},

	{
		question: 'What Shakespeare comedy centers around a magical forest ruled by Oberon and Titania?',
		answer: 'A Midsummer Night’s Dream',
		category: 'Literature',
	},
	{
		question: 'Which Shakespeare play tells the story of a Scottish nobleman who kills his king after hearing a prophecy and is destroyed by ambition and guilt?',
		answer: 'Macbeth',
		category: 'Literature',
	},
	{
		question: "Shakespeare's 6 biggest plays",
		answer: "Romeo & Juliet, Hamlet, Macbeth, Othello, A Midsummer Night's Dream, King Lear",
		category: 'Literature',
	},

	// Medicine

	{
		question: 'What does “NPO” mean in a hospital setting?',
		answer: 'Nothing by mouth',
		category: 'Medicine',
	},
	{
		question: 'What does “IV” stand for?',
		answer: 'Intravenous',
		category: 'Medicine',
	},

	{
		question: 'Which imaging scan is commonly used in the ER to quickly evaluate trauma, bleeding, or internal injuries?',
		answer: 'CT scan. Bonus: Pan scan is a full-body CT scan',
		category: 'Medicine',
	},
	{
		question: 'Which imaging method uses magnets instead of radiation and is best for the brain, spine, and soft tissues?',
		answer: 'MRI',
		category: 'Medicine',
	},
	{
		question: 'Which imaging technique uses sound waves and is often used for pregnancy and gallbladder exams?',
		answer: 'Ultrasound',
		category: 'Medicine',
	},
	{
		question: 'Which type of scan uses radioactive tracers and is mainly used to detect cancer?',
		answer: 'PET scan',
		category: 'Medicine',
	},
	{
		question: 'What bedside ultrasound exam is used in trauma patients to quickly look for internal bleeding?',
		answer: 'FAST exam',
		category: 'Medicine',
	},

	{ question: 'What term means low blood oxygen levels?', answer: 'Hypoxia', category: 'Medicine' },
	{ question: 'What prefix means "fast" in medical terminology?', answer: 'Tachy-', category: 'Medicine' },
	{ question: 'What prefix means "slow" in medical terminology?', answer: 'Brady-', category: 'Medicine' },
	{ question: 'What medical terms mean surgical removal of tissue or an organ?', answer: 'Ectomy / resection', category: 'Medicine' },

	{ question: 'What condition describes evidence of inadequate organ perfusion?', answer: 'Shock', category: 'Medicine' },
	{ question: 'What term describes blood not adequately reaching organs?', answer: 'Poor blood perfusion', category: 'Medicine' },
	{ question: 'What condition describes a life-threatening response to infection in the bloodstream?', answer: 'Sepsis', category: 'Medicine' },
	{ question: 'What medical term means passing out or fainting?', answer: 'Syncope', category: 'Medicine' },

	{ question: 'What cavity of the body contains the lungs and heart?', answer: 'Thoracic cavity (thorax)', category: 'Medicine' },
	{ question: 'What thin tissue lines the lungs and chest wall?', answer: 'Pleura', category: 'Medicine' },
	{ question: 'What condition involves air in the chest cavity causing lung collapse?', answer: 'Pneumothorax', category: 'Medicine' },
	{ question: 'What condition involves blood accumulating in the chest cavity?', answer: 'Hemothorax', category: 'Medicine' },

	{ question: 'What term means reduced or absent blood flow to tissue?', answer: 'Ischemia', category: 'Medicine' },
	{ question: 'What term means tissue damage caused by lack of oxygen?', answer: 'Infarction', category: 'Medicine' },
	{ question: 'What term describes damage to heart muscle due to lack of oxygen?', answer: 'Myocardial infarction', category: 'Medicine' },

	{ question: 'What condition occurs when blood flow to part of the brain is interrupted or bleeding occurs?', answer: 'Stroke', category: 'Medicine' },

	{ question: 'What term describes a substance that speeds up chemical reactions in the body?', answer: 'Enzyme', category: 'Medicine' },

	{ question: 'What procedure places a tube into the chest to remove air or fluid around the lung?', answer: 'Chest tube', category: 'Medicine' },
	{ question: 'What emergency procedure involves opening the chest wall to rapidly release trapped air or fluid?', answer: 'Venting a chest', category: 'Medicine' },
	{ question: 'What procedure involves placing a tube into the airway to help a patient breathe?', answer: 'Intubation', category: 'Medicine' },
	{
		question: 'What term means difficulty breathing or shortness of breath?',
		answer: 'Dyspnea',
		category: 'Medicine',
	},

	{
		question: 'What term means swelling caused by fluid buildup?',
		answer: 'Edema',
		category: 'Medicine',
	},
	{
		question: 'What term describes bluish discoloration of the skin due to low oxygen?',
		answer: 'Cyanosis',
		category: 'Medicine',
	},
	{
		question: 'What term means a sudden worsening of a condition?',
		answer: 'Acute',
		category: 'Medicine',
	},

	// Famous Kings & Queens – 7
	{
		question: 'Which English king signed the Magna Carta in 1215?',
		answer: 'King John',
		category: 'New',
	},
	{
		question: 'Which queen ruled England from 1837 to 1901?',
		answer: 'Queen Victoria',
		category: 'History',
	},
	{
		question: 'What Egyptian queen was the last active ruler of the Ptolemaic Kingdom of Egypt from 50-30BC?',
		answer: 'Cleopatra VII',
		category: 'History',
	},
	{
		question: 'Which Spanish monarchs funded Christopher Columbus’s 1492 voyage?',
		answer: 'King Ferdinand and Queen Isabella',
		category: 'History',
	},
	{
		question: 'Which English king broke from the Catholic Church and founded the Church of England?',
		answer: 'Henry VIII',
		category: 'History',
	},
	{
		question: 'Which queen became the longest-reigning British monarch before being surpassed by Elizabeth II?',
		answer: 'Queen Victoria',
		category: 'History',
	},

	// coding

	{
		question: 'What do you call a function that is passed into another function to be executed later, often after an asynchronous operation completes?',
		answer: 'Callback',
		category: 'Coding',
	},

	{
		question: 'What TypeScript construct defines the shape of an object without generating runtime code?',
		answer: 'Interface',
		category: 'Coding',
	},

	{
		question: 'What Node.js mechanism schedules and executes asynchronous callbacks and promises?',
		answer: 'Event loop',
		category: 'Coding',
	},
	{
		question: 'What Node.js design principle allows it to handle many concurrent connections efficiently?',
		answer: 'Non-blocking I/O',
		category: 'Coding',
	},
	{
		question: 'What execution model does Node.js use for JavaScript code?',
		answer: 'Single-threaded',
		category: 'Coding',
	},
	{
		question: 'What JavaScript abstraction represents an eventual async result in Node.js?',
		answer: 'Promise',
		category: 'Coding',
	},
	{
		question: 'What Node.js execution unit runs JavaScript code and has its own memory space?',
		answer: 'Process',
		category: 'Coding',
	},
	{
		question: 'What Node.js construct allows CPU-intensive work to run in parallel without blocking the main event loop?',
		answer: 'Thread',
		category: 'Coding',
	},
	{
		question: 'What Node.js abstraction allows processing large data without loading it all into memory?',
		answer: 'Streams',
		category: 'Coding',
	},

	{
		question: 'What Node.js global provides access to environment variables and process lifecycle information?',
		answer: 'process',
		category: 'Coding',
	},
	{
		question: 'What Express concept allows logic to run before or after a route handler?',
		answer: 'Middleware',
		category: 'Coding',
	},
	{
		question: 'What HTTP feature allows Node servers to reuse TCP connections for better performance?',
		answer: 'Keep-alive',
		category: 'Coding',
	},
	{
		question: 'What Node.js technique allows a single application to use multiple CPU cores?',
		answer: 'Clustering',
		category: 'Coding',
	},
	{
		question: 'What Node.js API schedules a callback to run after a delay?',
		answer: 'setTimeout',
		category: 'Coding',
	},
	{
		question: 'What Node.js concept allows handling errors from async functions using try/catch?',
		answer: 'async / await',
		category: 'Coding',
	},
	{
		question: 'What Node.js behavior allows multiple requests to be handled concurrently despite a single thread?',
		answer: 'Asynchronous execution',
		category: 'Coding',
	},
	{
		question: 'What JavaScript concept allows a function to access variables from its outer scope after that scope has returned?',
		answer: 'Closure',
		category: 'Coding',
	},
	{
		question: 'What phase of execution sets up variable and function declarations before code runs?',
		answer: 'Hoisting',
		category: 'Coding',
	},
	{
		question: 'Are objects passed by value or by reference in JavaScript?',
		answer: 'By reference',
		category: 'Coding',
	},
	{
		question: 'What Node.js module is commonly used to build web servers?',
		answer: 'http',
		category: 'Coding',
	},

	{
		question: 'What is a reusable unit of code that can be imported using require or import in JavaScript?',
		answer: 'Module',
		category: 'Coding',
	},
	{
		question: 'What term describes a collection of related functionality designed to solve a specific problem or provide a set of features?',
		answer: 'Library',
		category: 'Coding',
	},
	{
		question: 'What term refers to a distributable unit of code published to a package manager like npm, including metadata and dependencies?',
		answer: 'Package',
		category: 'Coding',
	},
	{
		question: 'What term describes an API that does not store client state between requests?',
		answer: 'Stateless',
		category: 'Coding',
	},

	{
		question: 'What JavaScript method is commonly used to transform each element in an array into a new array?',
		answer: 'Array.map',
		category: 'Coding',
	},

	{
		question: 'What browser global provides access to the DOM and page structure?',
		answer: 'document',
		category: 'Coding',
	},
	{
		question: 'What global API is commonly used in the browser to make HTTP requests?',
		answer: 'fetch',
		category: 'Coding',
	},
	{
		question: 'What Node.js global object represents the global scope, similar to window in the browser?',
		answer: 'global',
		category: 'Coding',
	},
	{
		question: 'What Node.js variable contains the absolute path of the current module’s directory?',
		answer: '__dirname',
		category: 'Coding',
	},
	{
		question: 'What execution units run inside a process and share its memory space?',
		answer: 'Threads',
		category: 'Coding',
	},

	{
		question: 'What is the difference between type and interface in TypeScript?',
		answer: 'interface is extendable and supports declaration merging; type is more flexible and can represent unions, primitives, and intersections',
		category: 'Coding',
	},
	{
		question: 'When should you prefer an interface in TypeScript?',
		answer: 'When defining object shapes, public APIs, or when extension and declaration merging are needed',
		category: 'Coding',
	},
	{
		question: 'What is a union type in TypeScript?',
		answer: 'A type that can be one of several types',
		category: 'Coding',
	},
	{
		question: 'Why is unknown safer than any in TypeScript?',
		answer: 'It forces type checking before a value can be used',
		category: 'Coding',
	},
	{
		question: 'What problem do generics solve in TypeScript?',
		answer: 'They enable reusable, type-safe code',
		category: 'Coding',
	},
	{
		question: 'What TypeScript type represents an object with string keys and unknown values?',
		answer: 'Record<string, unknown>',
		category: 'Coding',
	},

	// Famous Football Players – 7 (American Football)
	{
		question: 'Which NFL quarterback has won the most Super Bowl titles?',
		answer: 'Tom Brady',
		category: 'Sports',
	},
	{
		question: 'Which wide receiver holds the NFL records for most career receptions, receiving yards, and receiving touchdowns?',
		answer: 'Jerry Rice',
		category: 'Sports',
	},
	{
		question: 'Who was the first NFL player to rush for over 2,000 yards in a single season?',
		answer: 'O.J. Simpson',
		category: 'Sports',
	},
	{
		question: "Which NFL quarterback became known as 'Broadway Joe' and famously guaranteed a Super Bowl victory?",
		answer: 'Joe Namath',
		category: 'Sports',
	},

	// Henry VIII
	{
		question: 'Which Tudor king ruled England in the early 1500s and married Anne Boleyn?',
		answer: 'Henry VIII',
		category: 'History',
	},

	// Elizabeth I

	{
		question: 'Which monarch ruled England during the defeat of the Spanish Armada in 1588?',
		answer: 'Elizabeth I',
		category: 'New',
	},
	{
		question: 'Which daughter of Henry VIII reigned during England’s Golden Age?',
		answer: 'Elizabeth I',
		category: 'New',
	},

	// Elizabeth II
	{
		question: 'Which British monarch was the longest-reigning in the country’s history?',
		answer: 'Elizabeth II',
		category: 'New',
	},

	{
		question: 'Which monarch built the Palace of Versailles as a symbol of royal power?',
		answer: 'Louis XIV',
		category: 'New',
	},
	{
		question: 'Which king famously said, “I am the state”?',
		answer: 'Louis XIV (Sun King)',
		category: 'New',
	},

	{
		question: 'Which military commander was defeated at the Battle of Waterloo in 1815?',
		answer: 'Napoleon Bonaparte',
		category: 'Food',
	},
	{
		question: 'Which ruler rose to power after the French Revolution and dominated Europe?',
		answer: 'Napoleon Bonaparte',
		category: 'New',
	},

	// Julius Caesar
	{
		question: 'Which Roman leader was assassinated in 44 BC?',
		answer: 'Julius Caesar',
		category: 'New',
	},

	// Alexander the Great
	{
		question: 'Which Macedonian king created one of the largest empires in ancient history?',
		answer: 'Alexander the Great',
		category: 'Food',
	},
	{
		question: 'Which student of Aristotle became king at age 20?',
		answer: 'Alexander the Great',
		category: 'New',
	},

	{
		question: 'What narrow strait separates Alaska from Russia and marks the boundary between North America and Asia?',
		answer: 'Bering Strait',
		category: 'New',
	},
	{
		question: 'What strait connects the Atlantic Ocean to the Mediterranean Sea and separates Spain from North Africa?',
		answer: 'Strait of Gibraltar',
		category: 'New',
	},
	{
		question: 'What man-made canal cuts across Central America, allowing ships to travel between the Atlantic and Pacific Oceans without sailing around South America?',
		answer: 'Panama Canal',
		category: 'New',
	},
	{
		question: 'What man-made canal connects the Mediterranean Sea to the Red Sea, dramatically shortening the sea route between Europe and Asia?',
		answer: 'Suez Canal',
		category: 'New',
	},
	{
		question: 'What body of water separates Great Britain from mainland Europe and connects the Atlantic Ocean to the North Sea?',
		answer: 'English Channel',
		category: 'Food',
	},
	{
		question: 'What body of water in the Middle East is one of the world’s most important regions for oil production and shipping?',
		answer: 'Persian Gulf',
		category: 'New',
	},
	{
		question: 'What body of water is between Iran and Saudi Arabia?',
		answer: 'Persian Gulf',
		category: 'New',
	},

	{
		question: 'What 1066 battle resulted in William the Conqueror taking control of England?',
		answer: 'Battle of Hastings',
		category: 'New',
	},
	{
		question: 'What 1815 battle marked the final defeat of Napoleon Bonaparte?',
		answer: 'Battle of Waterloo',
		category: 'History',
	},
	{
		question: 'What American Civil War battle is considered the turning point of the war and the bloodiest single battle fought on U.S. soil?',
		answer: 'Battle of Gettysburg',
		category: 'New',
	},
	{
		question: 'What World War I battle became a symbol of trench warfare and one of the longest and bloodiest battles in history?',
		answer: 'Battle of Verdun',
		category: 'New',
	},

	{
		question: 'What World War II naval battle is considered the turning point of the Pacific War between the United States and Japan?',
		answer: 'Battle of Midway',
		category: 'New',
	},

	{
		question: 'What ancient battle featured a famous last stand by 300 Spartans against the Persian army?',
		answer: 'Battle of Thermopylae',
		category: 'Food',
	},
	{
		question: 'What 1415 battle during the Hundred Years’ War saw English longbowmen defeat a much larger French force?',
		answer: 'Battle of Agincourt',
		category: 'Food',
	},

	{
		question: 'Which former Viking from Normandy became a French ruler and conquered England in the 1000s?',
		answer: 'William the Conqueror',
		category: 'New',
	},

	{
		question: 'Which French teenage peasant girl led troops during the Hundred Years’ War and was later executed for heresy?',
		answer: 'Joan of Arc',
		category: 'New',
	},

	{
		question: 'Which German monk started the Protestant Reformation by criticizing the Catholic Church in the 1500s?',
		answer: 'Martin Luther',
		category: 'New',
	},

	{
		question: 'What famous Gothic cathedral in Paris is known for its twin towers and was severely damaged by a fire in 2019?',
		answer: 'Notre-Dame Cathedral',
		category: 'New',
	},
	{
		question: 'What ancient Incan city located high in the Andes Mountains is one of Peru’s most famous archaeological sites?',
		answer: 'Machu Picchu',
		category: 'New',
	},

	{
		question: 'What lavish palace near Paris was the center of French royal power under King Louis XIV?',
		answer: 'Palace of Versailles',
		category: 'New',
	},
	{
		question: 'What 1919 treaty officially ended World War I and imposed heavy penalties on Germany?',
		answer: 'Treaty of Versailles',
		category: 'Food',
	},

	{
		question: 'What river did Julius Caesar cross in 49 BC, an act that symbolized a point of no return and led to Roman civil war?',
		answer: 'The Rubicon (small river in ancient Italy)',
		category: 'New',
	},
	{
		question: 'What long conflict between England and France lasted from the 1300s to the 1400s?',
		answer: 'Hundred Years’ War',
		category: 'New',
	},

	{
		question: 'What event is commonly considered the start of World War I?',
		answer: 'The assassination of Archduke Franz Ferdinand',
		category: 'New',
	},
	{
		question: 'Which river runs through Paris?',
		answer: 'The Seine',
		category: 'New',
	},

	{
		question: 'What year did the Titanic sink?',
		answer: '1912',
		category: 'New',
	},
	{
		question: "What novel begins with the line 'Call me Ishmael'?",
		answer: 'Moby-Dick',
		category: 'New',
	},

	{
		question: 'What mountain range separates Europe and Asia?',
		answer: 'The Ural Mountains',
		category: 'New',
	},

	{
		question: 'What is the largest mammal on Earth?',
		answer: 'The blue whale',
		category: 'New',
	},

	{
		question: 'Which Polish-born scientist helped lay the foundation for modern nuclear science through her work on radioactive elements?',
		answer: 'Marie Curie',
		category: 'New',
	},

	{
		question: 'What was the name of the first artificial satellite launched into space?',
		answer: 'Sputnik 1',
		category: 'New',
	},

	{
		question: 'What was the name of the space telescope launched in 1990 that revolutionized astronomy?',
		answer: 'The Hubble Space Telescope',
		category: 'New',
	},
	{
		question: 'Which Apollo mission famously experienced an in-flight emergency but returned safely to Earth?',
		answer: 'Apollo 13',
		category: 'New',
	},
	{
		question: 'Which Apollo mission was the first to orbit the Moon with a crew aboard?',
		answer: 'Apollo 8',
		category: 'New',
	},

	{
		question: 'What spacecraft was the first to leave the solar system?',
		answer: 'Voyager 1',
		category: 'New',
	},

	{
		question: 'What river runs through London?',
		answer: 'The River Thames',
		category: 'New',
	},
	{
		question: 'Which French king was executed during the French Revolution?',
		answer: 'Louis XVI',
		category: 'New',
	},
	{
		question: 'What prison’s storming in 1789 is considered the symbolic start of the French Revolution?',
		answer: 'The Bastille',
		category: 'New',
	},
	{
		question: 'What radical period of the French Revolution saw mass executions of perceived enemies?',
		answer: 'The Reign of Terror',
		category: 'New',
	},
	{
		question: 'Which device became the infamous symbol of executions during the French Revolution?',
		answer: 'The guillotine',
		category: 'New',
	},
	{
		question: 'Which revolutionary leader became most associated with the Reign of Terror?',
		answer: 'Maximilien Robespierre',
		category: 'New',
	},
	{
		question: 'Which French queen, married to Louis XVI, was executed during the French Revolution and is often (incorrectly) associated with the phrase "Let them eat cake"?',
		answer: 'Marie Antoinette',
		category: 'New',
	},
	{
		question: 'Which two major wars fought by France in the 18th century left the country deeply in debt and helped trigger the French Revolution?',
		answer: 'The Seven Years’ War and the American Revolutionary War',
		category: 'New',
	},

	{
		question: 'Name the 8 Ivy League schools and their locations.',
		answer: 'Harvard University (Cambridge, MA); Yale University (New Haven, CT); Princeton University (Princeton, NJ); Columbia University (New York City, NY); UPenn (Philadelphia, PA); Brown University (Providence, RI); Dartmouth College (Hanover, NH); Cornell University (Ithaca, NY)',
		category: 'New',
	},

	{
		question: 'What are the five biggest islands in the world (excluding continents)?',
		answer: 'Greenland, New Guinea (near Indonesia), Borneo, Madagascar, Baffin Island (Canada, near Greenland)',
		category: 'New',
	},

	{
		question: 'What are the five main islands in Indonesia?',
		answer: 'Borneo, New Guinea, Sumatra, Java, Sulawesi',
		category: 'New',
	},

	{
		question: 'Which river is the longest in the United States?',
		answer: 'The Missouri River',
		category: 'New',
	},
	{
		question: 'Which U.S. state has the most active volcanoes?',
		answer: 'Alaska',
		category: 'New',
	},
	{
		question: 'What mountain range runs along the eastern United States?',
		answer: 'The Appalachian Mountains',
		category: 'New',
	},
	{
		question: 'What are the three largest deserts in the United States, and where are they located?',
		answer: 'Great Basin Desert — primarily Nevada, plus parts of Utah, Oregon, Idaho, and California; Chihuahuan Desert — southern New Mexico and west Texas; Sonoran Desert — southern Arizona and southeastern California',
		category: 'New',
	},
	{
		question: 'What is the highest mountain peak in the United States?',
		answer: 'Denali (Mount McKinley)',
		category: 'New',
	},
	{
		question: 'Which U.S. river flows through the Grand Canyon?',
		answer: 'The Colorado River',
		category: 'New',
	},
	{
		question: 'What U.S. state is nicknamed the "Land of 10,000 Lakes"?',
		answer: 'Minnesota',
		category: 'New',
	},

	{
		question: 'What is the deepest point in the world’s oceans?',
		answer: 'The Mariana Trench (Challenger Deep). Pacific Ocean - Near Japan & Philippines',
		category: 'New',
	},
	{
		question: 'Which country is both in Europe and Asia?',
		answer: 'Turkey',
		category: 'New',
	},
	{
		question: 'What is the largest lake in the world by surface area?',
		answer: 'The Caspian Sea',
		category: 'New',
	},
	{
		question: 'Which country has the most lakes?',
		answer: 'Canada',
		category: 'New',
	},
	{
		question: 'What sea separates Africa from Europe?',
		answer: 'The Mediterranean Sea',
		category: 'New',
	},
	{
		question: 'Which Asian country was formerly known as Siam?',
		answer: 'Thailand',
		category: 'New',
	},
	{
		question: 'Which explorer was the first to circumnavigate the globe in 1520',
		answer: 'Ferdinand Magellan',
		category: 'New',
	},
	{
		question: 'Which Viking explorer reached North America around the year 1000?',
		answer: 'Leif Erikson',
		category: 'New',
	},
	{
		question: 'Which Spanish explorer conquered the Aztec Empire in 1520?',
		answer: 'Hernán Cortés',
		category: 'New',
	},
	{
		question: 'Which explorer was the first to reach India by sea from Europe in 1497?',
		answer: 'Vasco da Gama',
		category: 'New',
	},

	{
		question: 'Which American general, who served in the Civil War, later became the 18th president of the United States?',
		answer: 'Ulysses S. Grant',
		category: 'New',
	},
	{
		question: 'Which American general defected to the British during the Revolutionary War?',
		answer: 'Benedict Arnold',
		category: 'New',
	},

	{
		question: 'Which U.S. general was known for aggressive tank warfare in World War II?',
		answer: 'George S. Patton',
		category: 'New',
	},
	{
		question: 'Which South African leader co-founded the armed group Umkhonto we Sizwe in 1961 and later became president of South Africa?',
		answer: 'Nelson Mandela',
		category: 'New',
	},

	{
		question: 'Which sea separates Southern Europe from North Africa and is bordered by countries like Italy, Greece, Egypt, and Spain?',
		answer: 'Mediterranean Sea',
		category: 'New',
	},
	{
		question: 'Which sea lies between Eastern Europe and Western Asia and is bordered by countries such as Turkey, Bulgaria, Romania, Ukraine, and Georgia?',
		answer: 'Black Sea',
		category: 'New',
	},

	{
		question: 'Who was the U.S. president during World War I and led the country when it entered the war in 1917?',
		answer: 'Woodrow Wilson',
		category: 'New',
	},
	{
		question: 'Which U.S. president led the United States through most of World War II and served an unprecedented four terms in office?',
		answer: 'Franklin D. Roosevelt 1933-1945',
		category: 'New',
	},
	{
		question: 'Which U.S. president took office in 1945 after Franklin D. Roosevelt’s death and oversaw the end of World War II later that same year?',
		answer: 'Harry S. Truman',
		category: 'New',
	},
	{
		question: 'Which U.S. president served from 1953–1961 and was a former Supreme Allied Commander in World War II?',
		answer: 'Dwight D. Eisenhower',
		category: 'New',
	},

	{
		question: 'Which U.S. president signed the Civil Rights Act of 1964, outlawing segregation and discrimination?',
		answer: 'Lyndon B. Johnson',
		category: 'New',
	},
	{
		question: 'What Supreme Court case in 1954 declared racial segregation in public schools unconstitutional?',
		answer: 'Brown v. Board of Education',
		category: 'New',
	},
	{
		question: 'Which U.S. First Lady was a strong advocate for women’s rights, civil rights, and social justice, continuing her activism long after leaving the White House?',
		answer: 'Eleanor Roosevelt',
		category: 'New',
	},

	{
		question: 'Which First Lady is most closely associated with promoting national parks, forests, and environmental beautification during the 1960s?',
		answer: 'Lady Bird Johnson',
		category: 'New',
	},
	{
		question: 'Where and when did Rosa Parks’ refusal to give up her bus seat occur, a defining moment of the U.S. Civil Rights Movement?',
		answer: 'Montgomery, Alabama 1955',
		category: 'New',
	},
	{
		question: 'Which abolitionist escaped slavery in Maryland in 1849 and went on to lead enslaved people to freedom through the Underground Railroad?',
		answer: 'Harriet Tubman',
		category: 'New',
	},
	{
		question: 'Which Catholic nun became globally known for caring for the poor and sick in Calcutta (Kolkata), India, and won the Nobel Peace Prize in 1979?',
		answer: 'Mother Teresa',
		category: 'New',
	},
	{
		question: 'Which British nurse became known as the founder of modern nursing for her work improving medical care during the Crimean War (Russia vs Britain, France and Ottoman Empire) in the 1850s?',
		answer: 'Florence Nightingale',
		category: 'New',
	},
	{
		question: 'Which empire, centered in modern-day Turkey, ruled large parts of Southeastern Europe, the Middle East, and North Africa from around 1300 until 1922?',
		answer: 'Ottoman Empire',
		category: 'New',
	},
	{
		question: 'What blood type is known as the universal donor?',
		answer: 'O negative',
		category: 'New',
	},
	{
		question: 'Which body of water lies between Africa and the Arabian Peninsula and connects to the Mediterranean Sea via the Suez Canal?',
		answer: 'Red Sea',
		category: 'New',
	},
	{
		question: 'Which body of water, bordered by Russia, Iran, Kazakhstan, Turkmenistan, and Azerbaijan, is the largest enclosed inland body of water in the world?',
		answer: 'Caspian Sea',
		category: 'New',
	},
	{
		question: 'Which sea lies in Northern Europe, bordered by countries such as Sweden, Finland, Germany, Poland, and the Baltic states, and connects to the North Sea?',
		answer: 'Baltic Sea',
		category: 'New',
	},
	{
		question: 'Which sea lies between the Arabian Peninsula and the Indian subcontinent and is part of the Indian Ocean?',
		answer: 'Arabian Sea',
		category: 'New',
	},
	{
		question: 'Which peninsula in the Middle East is home to countries such as Saudi Arabia, Yemen, and Oman, and is bordered by the Red Sea, Arabian Sea, and Persian Gulf?',
		answer: 'Arabian Peninsula',
		category: 'New',
	},
	{
		question: 'Which two rivers are known as the cradle of civilization, flowing through ancient Mesopotamia in the Middle East?',
		answer: 'Tigris and Euphrates',
		category: 'New',
	},
	{
		question: 'During which centuries did Genghis Khan rise to power and conquer much of Asia and Eastern Europe?',
		answer: 'Late 12th and early 13th centuries',
		category: 'New',
	},
	{
		question: 'Which Chinese revolutionary founded the People’s Republic of China in 1949 and led the Chinese Communist Party?',
		answer: 'Mao Zedong',
		category: 'New',
	},
	{
		question: 'Who is the current president of China and general secretary of the Chinese Communist Party, having consolidated power since the 2010s?',
		answer: 'Xi Jinping',
		category: 'New',
	},

	{
		question: 'In which modern-day country was the Buddha born?',
		answer: 'Nepal',
		category: 'New',
	},
	{
		question: 'Which Chinese philosopher, who lived from 551–479 BCE, emphasized morality, family loyalty, respect for elders, and social harmony?',
		answer: 'Confucius',
		category: 'New',
	},
	{
		question: 'Which scientist published Principia in 1687 and was a central figure of the Scientific Revolution?',
		answer: 'Isaac Newton',
		category: 'New',
	},
	{
		question: 'When did Albert Einstein rise to global prominence after developing the theory of relativity?',
		answer: 'Early 20th century (roughly 1905–1920s)',
		category: 'New',
	},
	{
		question: 'Which Italian astronomer, around 1620, supported the heliocentric model, arguing that Earth orbits the Sun?',
		answer: 'Galileo Galilei',
		category: 'New',
	},
	{
		question: 'Which Indian leader became famous around 1910s–1940s for promoting nonviolent resistance to achieve independence from British rule?',
		answer: 'Mahatma Gandhi',
		category: 'New',
	},

	{
		question: 'Which Venetian explorer traveled across Asia in the late 13th century, beginning his journey around 1271?',
		answer: 'Marco Polo',
		category: 'New',
	},
	{
		question: 'Which American explorers led an expedition from the Mississippi River to the Pacific Ocean after the Louisiana Purchase?',
		answer: 'Lewis and Clark',
		category: 'New',
	},
	{
		question: 'Who led the Israelites out of Egypt?',
		answer: 'Moses',
		category: 'Miscellaneous',
	},
	{
		question: 'Who betrayed Jesus?',
		answer: 'Judas',
		category: 'Miscellaneous',
	},
	{
		question: 'Who wrote many of the letters (epistles) in the New Testament?',
		answer: 'Paul',
		category: 'Miscellaneous',
	},
	{
		question: 'What event marks the Israelites’ escape from slavery in Egypt?',
		answer: 'The Exodus',
		category: 'Miscellaneous',
	},
	{
		question: 'Which book in the Bible contains the Ten Commandments?',
		answer: 'Exodus',
		category: 'Miscellaneous',
	},
	{
		question: 'Which book in the Bible is primarily a collection of songs and prayers?',
		answer: 'Psalms',
		category: 'Miscellaneous',
	},
	{
		question: 'Which book in the Bible tells the creation story?',
		answer: 'Genesis',
		category: 'Miscellaneous',
	},
	{
		question: 'Which book in the Bible is known for symbolic visions about the end times?',
		answer: 'Revelation',
		category: 'Miscellaneous',
	},
	{
		question: 'Which four books of the New Testament are considered the Gospels and tell the story of Jesus’ life and teachings?',
		answer: 'Matthew, Mark, Luke, and John',
		category: 'Miscellaneous',
	},

	{
		question: 'What ancient region, often called the cradle of civilization, was located mostly in modern-day Iraq between the Tigris and Euphrates rivers?',
		answer: 'Mesopotamia',
		category: 'New',
	},

	{
		question: 'What title is given to the spiritual leader of Tibetan Buddhism?',
		answer: 'Dalai Lama. There have been 14 total',
		category: 'New',
	},
	{
		question: 'What security protocol encrypts data sent between a web browser and a server, helping protect information like passwords and credit card numbers?',
		answer: 'SSL - Secure Sockets Layer',
		category: 'New',
	},
	{
		question: 'In web security, what digital document is used to verify a website’s identity and enable encrypted connections over HTTPS?',
		answer: 'Certificate',
		category: 'New',
	},

	{
		question: 'In Apache Kafka, what do you call a named stream of records used to organize messages?',
		answer: 'Topic',
		category: 'Coding',
	},
	{
		question: 'In Kafka, what determines how messages in a topic are distributed across brokers?',
		answer: 'Partitions',
		category: 'Coding',
	},

	{
		question: 'What distributed platform is commonly used for event streaming and real-time data pipelines?',
		answer: 'Kafka',
		category: 'Coding',
	},
	{
		question: 'What is NestJS commonly used for in backend development?',
		answer: 'Building scalable server-side applications',
		category: 'Coding',
	},

	{
		question: 'What JavaScript or TypeScript feature allows metadata or behavior to be attached to classes and methods?',
		answer: 'Decorator',
		category: 'Coding',
	},
	{
		question: 'What TypeScript keyword prevents a class property from being reassigned after initialization?',
		answer: 'readonly',
		category: 'Coding',
	},
	{
		question: 'What term describes a structured software foundation that enforces patterns and provides reusable components?',
		answer: 'Framework',
		category: 'Coding',
	},
	{
		question: 'In Express.js, what do you call the component responsible for handling HTTP requests and responses?',
		answer: 'Controller',
		category: 'Coding',
	},
	{
		question: 'In Apache Kafka, what do you call a server that stores data and handles read and write requests?',
		answer: 'Broker',
		category: 'Coding',
	},

	{
		question: 'In JavaScript, what keyword refers to the object that is currently executing a function?',
		answer: 'this',
		category: 'Coding',
	},

	{
		question: 'Characterized by the use of stone tools and early human development, roughly what years did the Stone Age last?',
		answer: 'c. 2.5 million years ago to c. 3300 BCE',
		category: 'New',
	},
	{
		question: 'Marked by the rise of early civilizations and the use of bronze tools and weapons, roughly what years did the Bronze Age last?',
		answer: 'c. 3300 BCE to c. 1200 BCE',
		category: 'New',
	},
	{
		question: 'Characterized by the widespread use of iron tools and weapons following the Bronze Age collapse, roughly when did the Iron Age begin?',
		answer: 'c. 1200 BCE',
		category: 'New',
	},

	{
		question: 'Which countries lie to the north, east, and west of Saudi Arabia?',
		answer: 'North: Jordan and Iraq; North: Iran, United Arab Emirates; West: Red Sea, Africa, Egypt',
		category: 'New',
	},

	{
		question: "Which U.S. president served from 1901 to 1909, promoted the idea of 'Speak softly and carry a big stick,' and oversaw the construction of the Panama Canal?",
		answer: 'Theodore Roosevelt',
		category: 'New',
	},

	{
		question: 'Which Russian scientist (1849–1936) is known for discovering classical conditioning through experiments involving dogs?',
		answer: 'Ivan Pavlov',
		category: 'New',
	},

	{
		question: 'Roughly what percentage of the world’s proven oil reserves are located in the Middle East?',
		answer: 'About 50%',
		category: 'New',
	},
	{
		question: 'Which country holds the world’s largest proven oil reserves?',
		answer: 'Venezuela',
		category: 'New',
	},
	{
		question: 'In geology, what type of sedimentary rock contains kerogen, an organic material that has not fully turned into oil?',
		answer: 'Shale',
		category: 'New',
	},

	{
		question: 'Which oil-producing region spanning Texas and New Mexico accounts for nearly half of total U.S. oil production?',
		answer: 'Permian Basin',
		category: 'New',
	},

	{
		question: 'What organization coordinates oil production policies among major oil-producing countries?',
		answer: 'OPEC',
		category: 'New',
	},
	{
		question: 'What type of oil is trapped in low-permeability rock and often extracted using hydraulic fracturing?',
		answer: 'Shale oil',
		category: 'New',
	},
	{
		question: 'What npm tool allows you to run a package without installing it globally?',
		answer: 'npx',
		category: 'Coding',
	},
	{
		question: 'Which U.S. president managed the Cuban Missile Crisis in 1962, challenged America to land a man on the Moon, and famously said, "Ask not what your country can do for you—ask what you can do for your country"?',
		answer: 'John F. Kennedy',
		category: 'New',
	},
	{
		question: 'Which former Hollywood actor became U.S. president and is closely associated with conservative economics and the final phase of the Cold War?',
		answer: 'Ronald Reagan',
		category: 'New',
	},
	{
		question: 'Which U.S. president served from 1829–1837, was nicknamed "Old Hickory," expanded executive power, and signed the Indian Removal Act in 1830, leading to the Trail of Tears?',
		answer: 'Andrew Jackson',
		category: 'New',
	},
	{
		question: 'Which U.S. president served from 1809–1817, is known as the "Father of the Constitution," and led the nation during the War of 1812 against Great Britain?',
		answer: 'James Madison',
		category: 'New',
	},

	{
		question: 'What are the three main types of rocks?',
		answer: 'Igneous, sedimentary, and metamorphic',
		category: 'New',
	},
	{
		question: 'Which type of rock forms from cooled magma or lava?',
		answer: 'Igneous',
		category: 'New',
	},
	{
		question: 'Which type of rock forms from compacted sediments over time?',
		answer: 'Sedimentary',
		category: 'New',
	},
	{
		question: 'Which rock type forms when existing rock is changed by heat and pressure?',
		answer: 'Metamorphic',
		category: 'New',
	},
	{
		question: 'What process breaks rocks down into smaller pieces at Earth’s surface?',
		answer: 'Weathering',
		category: 'New',
	},
	{
		question: 'What is the most abundant element in Earth’s crust?',
		answer: 'Oxygen',
		category: 'New',
	},
	{
		question: 'What was the forced relocation of Native American tribes, primarily the Cherokee, from the southeastern United States to present-day Oklahoma during 1838–1839 called?',
		answer: 'Trail of Tears',
		category: 'New',
	},

	{
		question: 'Which AWS service lets you create a logically isolated virtual network where you can define subnets, route tables, and security groups?',
		answer: 'VPC',
		category: 'Coding',
	},
	{
		question: 'Which AWS service provides resizable virtual servers in the cloud that you can start, stop, and scale as needed?',
		answer: 'EC2',
		category: 'Coding',
	},
	{
		question: 'Which AWS service allows you to run code in response to events without provisioning or managing servers?',
		answer: 'Lambda',
		category: 'Coding',
	},
	{
		question: 'Which AWS service is designed for durable, scalable object storage commonly used for backups, static assets, and data lakes?',
		answer: 'S3',
		category: 'Coding',
	},

	{
		question: 'What AWS service is commonly used for DNS and domain management?',
		answer: 'Route 53',
		category: 'Coding',
	},
	{
		question: 'What AWS service distributes incoming traffic across multiple servers?',
		answer: 'Elastic Load Balancer (ELB)',
		category: 'Coding',
	},
	{
		question: 'What AWS service controls user access and permissions?',
		answer: 'IAM',
		category: 'Coding',
	},
	{
		question: 'What type of workloads is Lambda best suited for?',
		answer: 'Event-driven or short-running tasks',
		category: 'Coding',
	},

	{
		question: 'What phrase uses the first and last Greek letters to mean “the beginning and the end”?',
		answer: 'Alpha and Omega',
		category: 'New',
	},

	{
		question: 'Which country sits on the isthmus that splits North America and South America?',
		answer: 'Panama',
		category: 'New',
	},

	{
		question: 'What term describes a substance or treatment that kills or inhibits the growth of microorganisms such as bacteria, viruses, and fungi?',
		answer: 'Antimicrobial',
		category: 'Medicine',
	},

	{
		question: 'What are some common antibiotics?',
		answer: 'Amoxicillin, azithromycin (Z-Pak), Ceftriaxone, Augmentin, Keflex',
		category: 'Medicine',
	},
	{
		question: 'What medical condition involves a dangerous bulging or weakening of a blood vessel wall that can rupture?',
		answer: 'Aneurysm',
		category: 'Medicine',
	},
	{
		question: 'What medical condition occurs when a blood clot, air bubble, or other material travels through the bloodstream and blocks a vessel?',
		answer: 'Embolism',
		category: 'Medicine',
	},
	{
		question: 'What system translates human-readable domain names like example.com into IP addresses?',
		answer: 'DNS',
		category: 'Coding',
	},
	{
		question: 'What term describes a smaller network segment created by dividing a larger IP network?',
		answer: 'Subnet',
		category: 'Coding',
	},
	{
		question: 'What device connects a home or office network to an internet service provider by modulating and demodulating signals?',
		answer: 'Modem',
		category: 'Coding',
	},
	{
		question: 'What networking device directs data packets between different networks, such as a home network and the internet?',
		answer: 'Router',
		category: 'Coding',
	},
	{
		question: 'What device connects multiple devices within the same local network and forwards data based on MAC addresses?',
		answer: 'Switch',
		category: 'Coding',
	},
	{
		question: 'What networking component acts as an entry and exit point between two different networks, often translating protocols?',
		answer: 'Gateway',
		category: 'Coding',
	},
	{
		question: 'What year did Henry Ford’s Model T first go on sale?',
		answer: '1908',
		category: 'New',
	},

	{
		question: 'What year did Thomas Edison invent the first practical light bulb, helping bring electricity into homes and cities?',
		answer: '1879',
		category: 'New',
	},
	{
		question: 'What electrical system championed by Nikola Tesla and George Westinghouse became the global standard for transmitting power over long distances?',
		answer: 'Alternating current (AC)',
		category: 'New',
	},

	{
		question: 'Which engineer’s improvements to the steam engine in the late 1700s made large-scale factories and railroads economically viable?',
		answer: 'James Watt',
		category: 'New',
	},
	{
		question: 'In which country did the Industrial Revolution begin in the late 1700s before spreading to the rest of the world?',
		answer: 'Great Britain',
		category: 'New',
	},

	{
		question: 'Which steel magnate built U.S. Steel in 1901 after rising to power during the late 1800s, helping make America the world’s leading industrial power?',
		answer: 'Andrew Carnegie',
		category: 'New',
	},
	{
		question: 'Which oil tycoon founded Standard Oil in 1870 and went on to control about 90% of U.S. oil production by the 1880s?',
		answer: 'John D. Rockefeller',
		category: 'New',
	},
	{
		question: 'Which railroad and shipping tycoon built a vast transportation empire during the mid-1800s, becoming one of the richest Americans by 1877?',
		answer: 'Cornelius Vanderbilt',
		category: 'New',
	},
	{
		question: 'Which powerful banker and financier dominated Wall Street in the late 1800s and famously stabilized the U.S. economy during the Panic of 1907?',
		answer: 'J.P. Morgan',
		category: 'New',
	},

	{
		question: 'What term describes the period from about 1870 to 1900 when the United States became extremely wealthy and industrialized, but also suffered from deep inequality and political corruption?',
		answer: 'The Gilded Age',
		category: 'New',
	},
	{
		question: "Which 18th-century French aristocrat and writer became infamous for his sexually explicit and transgressive novels, giving rise to the term 'sadism'?",
		answer: 'Marquis de Sade',
		category: 'New',
	},

	{
		question: "What international military alliance was formed in 1949 to provide collective defense among North American and European countries during the Cold War?",
		answer: "NATO",
		category: "New",
	},
	{
		question: "What medical term refers to severe or uncontrolled bleeding, either internal or external, that can become life-threatening if not treated promptly?",
		answer: "hemmorage",
		category: "Medicine",
	},
	{
		question: "What type of short chain of amino acids acts as a biological signaling molecule and is often discussed in medicine, fitness, and biotechnology?",
		answer: "peptide",
		category: "Medicine",
	},
	{
		question: "What class of medication or agent raises blood pressure by causing blood vessels to constrict, often used in critical care settings?",
		answer: "pressor",
		category: "Medicine",
	},
	{
		question: "What term is used in healthcare to describe patients or situations requiring intense monitoring and immediate medical attention?",
		answer: "high acuity",
		category: "Medicine",
	},
	{
		question: "What is the main difference between the Arctic and the Antarctic in terms of geography and location on Earth?",
		answer: "The Arctic is a region of floating sea ice around the North Pole, while the Antarctic is a frozen continent surrounding the South Pole.",
		category: "New",
	},
	{
		question: "What is the difference between England, Great Britain, and the United Kingdom?",
		answer: "England is a country; Great Britain is the island containing England, Scotland, and Wales; and the United Kingdom is the political state made up of England, Scotland, Wales, and Northern Ireland.",
		category: "New",
	},

	
	{
		question: "Japan is made up of how many main islands?",
		answer: "4 (Honshu, Hokkaido, Kyushu, Shikoku)",
		category: "New",
	  },
	  {
		question: "What is the Japanese tea ceremony called?",
		answer: "Chanoyu (also known as Sado or Chado)",
		category: "New",
	  },
	  {
		question: "What Japanese snack is made from dried seaweed sheets?",
		answer: "Nori",
		category: "New",
	  },
	  {
		question: "Which Japanese city is famous for its historic temples and was the capital of Japan for over 1,000 years?",
		answer: "Kyoto",
		category: "New",
	  },
	  {
		question: "Which Japanese city is known for its street food, nightlife, and nickname 'Japan’s Kitchen'?",
		answer: "Osaka",
		category: "New",
	  },
	  
	
	
];
