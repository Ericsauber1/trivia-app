export type Category = 'Miscellaneous' | 'Science' | 'Geography' | 'History' | 'Literature' | 'Pop Culture' | 'Food' | 'Capitals' | 'New';

export interface Question {
	question: string;
	answer: string;
	category: Category;
}

export const questions: Question[] = [
	{ question: 'What is the largest island in the world?', answer: 'Greenland', category: 'Geography' },
	{
		question: 'Which country has the most time zones, including its overseas territories?',
		answer: 'France',
		category: 'Geography',
	},
	{
		question: 'What is the smallest country in the world by area?',
		answer: 'Vatican City',
		category: 'Geography',
	},
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
		question: 'What is the largest religion in the world by number of followers?',
		answer: 'Christianity',
		category: 'Miscellaneous',
	},
	{
		question: 'What is the fastest-growing major religion in the world?',
		answer: 'Islam',
		category: 'Miscellaneous',
	},
	{
		question: 'What is the longest mountain range in the world?',
		answer: 'The Andes',
		category: 'Geography',
	},
	{
		question: 'Which ancient civilization is considered the first to use writing?',
		answer: 'The Sumerians',
		category: 'History',
	},
	
	{
		question: 'Which city has the highest population in the world?',
		answer: 'Tokyo',
		category: 'Geography',
	},
	{
		question: 'What was the first country to grant women the right to vote?',
		answer: 'New Zealand',
		category: 'History',
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
		question: 'Which three films are tied for the most Academy Award wins with 11 Oscars each?',
		answer: 'Ben-Hur, Titanic, The Lord of the Rings: The Return of the King',
		category: 'Pop Culture',
	},

	{
		question: 'In Greek mythology, who is the king of the gods, equivalent to Jupiter in Roman mythology?',
		answer: 'Zeus',
		category: 'Miscellaneous',
	},
	{
		question: 'In Greek mythology, who is the goddess of marriage, equivalent to Juno in Roman mythology?',
		answer: 'Hera',
		category: 'Miscellaneous',
	},
	{
		question: 'In Greek mythology, who is the god of the sea, equivalent to Neptune in Roman mythology?',
		answer: 'Poseidon',
		category: 'Miscellaneous',
	},
	{
		question: 'In Greek mythology, who is the god of the underworld, equivalent to Pluto in Roman mythology?',
		answer: 'Hades',
		category: 'Miscellaneous',
	},
	{
		question: 'In Greek mythology, who is the goddess of wisdom, equivalent to Minerva in Roman mythology?',
		answer: 'Athena',
		category: 'Miscellaneous',
	},
	{
		question: 'In Greek mythology, who is the god of war, equivalent to Mars in Roman mythology?',
		answer: 'Ares',
		category: 'Miscellaneous',
	},
	{
		question: 'In Greek mythology, who is the goddess of love, equivalent to Venus in Roman mythology?',
		answer: 'Aphrodite',
		category: 'Miscellaneous',
	},
	// Art: Artists and their famous works
	{
		question: "Which artist painted the 'Mona Lisa' and 'The Last Supper' during the Renaissance?",
		answer: 'Leonardo da Vinci',
		category: 'Miscellaneous',
	},
	{
		question: "Which artist painted the Sistine Chapel ceiling and sculpted 'David' during the Renaissance?",
		answer: 'Michelangelo',
		category: 'Miscellaneous',
	},
	{
		question: "Which artist painted 'Starry Night' and 'Sunflowers'?",
		answer: 'Vincent van Gogh',
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
		question: "Which Expressionist artist painted 'The Scream'?",
		answer: 'Edvard Munch',
		category: 'Miscellaneous',
	},

	// Music, Pop Culture & Film
	{
		question: 'How many symphonies did Ludwig van Beethoven compose?',
		answer: '9',
		category: 'Pop Culture',
	},
	{
		question: 'Which artist has the most entries on the Billboard Hot 100 chart?',
		answer: 'Drake',
		category: 'Pop Culture',
	},
	{
		question: 'Which band has the most number-one hits on the Billboard charts?',
		answer: 'The Beatles',
		category: 'Pop Culture',
	},

	// Keeping Grammy fact as a combined answer, per your instruction
	{
		question: 'Which two musicians are tied for the most Grammy Award wins?',
		answer: 'Beyoncé Knowles and Quincy Jones',
		category: 'Pop Culture',
	},

	{
		question: 'What is the best-selling album of all time?',
		answer: 'Thriller',
		category: 'Pop Culture',
	},
	{
		question: 'What is the highest-grossing concert tour of all time?',
		answer: "Taylor Swift's Eras Tour",
		category: 'Pop Culture',
	},
	{
		question: 'What is the highest-grossing film of all time?',
		answer: 'Avatar',
		category: 'Pop Culture',
	},

	// Directors (using specific famous films)
	{
		question: "Which director directed 'Goodfellas' and 'Taxi Driver'?",
		answer: 'Martin Scorsese',
		category: 'Pop Culture',
	},
	{
		question: "Which director directed 'Jurassic Park' and 'E.T. the Extra-Terrestrial'?",
		answer: 'Steven Spielberg',
		category: 'Pop Culture',
	},
	{
		question: "Which director directed 'Pulp Fiction' and 'Kill Bill'?",
		answer: 'Quentin Tarantino',
		category: 'Pop Culture',
	},
	{
		question: "Which director directed '2001: A Space Odyssey' and 'The Shining'?",
		answer: 'Stanley Kubrick',
		category: 'Pop Culture',
	},

	{
		question: 'What is the longest-running film franchise in history?',
		answer: 'James Bond',
		category: 'Pop Culture',
	},
	{
		question: 'Which actress holds the record for the most Academy Award nominations?',
		answer: 'Meryl Streep',
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
	{ question: 'What is the capital of the United Kingdom?', answer: 'London', category: 'Capitals' },
	{ question: 'What is the capital of France?', answer: 'Paris', category: 'Capitals' },
	{ question: 'What is the capital of Italy?', answer: 'Rome', category: 'Capitals' },
	{ question: 'What is the capital of Germany?', answer: 'Berlin', category: 'Capitals' },
	{ question: 'What is the capital of Spain?', answer: 'Madrid', category: 'Capitals' },
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
	{ question: 'What is the capital of Japan?', answer: 'Tokyo', category: 'Capitals' },
	{ question: 'What is the capital of China?', answer: 'Beijing', category: 'Capitals' },
	{ question: 'What is the capital of South Korea?', answer: 'Seoul', category: 'Capitals' },
	{ question: 'What is the capital of North Korea?', answer: 'Pyongyang', category: 'Capitals' },
	{ question: 'What is the capital of Thailand?', answer: 'Bangkok', category: 'Capitals' },
	{ question: 'What is the capital of Vietnam?', answer: 'Hanoi', category: 'Capitals' },
	{ question: 'What is the capital of Indonesia?', answer: 'Jakarta', category: 'Capitals' },
	{ question: 'What is the capital of India?', answer: 'New Delhi', category: 'Capitals' },
	{ question: 'What is the capital of Pakistan?', answer: 'Islamabad', category: 'Capitals' },
	{ question: 'What is the capital of Egypt?', answer: 'Cairo', category: 'Capitals' },
	{ question: 'What is the capital of Kenya?', answer: 'Nairobi', category: 'Capitals' },
	{ question: 'What is the capital of Algeria?', answer: 'Algiers', category: 'Capitals' },
	{ question: 'What is the capital of Canada?', answer: 'Ottawa', category: 'Capitals' },
	{ question: 'What is the capital of Mexico?', answer: 'Mexico City', category: 'Capitals' },
	{ question: 'What is the capital of Brazil?', answer: 'Brasília', category: 'Capitals' },
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
	{ question: 'When did the 9/11 terrorist attacks occur?', answer: '2001', category: 'History' },

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
	{ question: 'When was Jesus Christ born?', answer: '4 BCE', category: 'History' },
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
		question: 'Which light metal is used in batteries and some medicines?',
		answer: 'Lithium',
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
		question: "Which element makes up 21% of Earth's atmosphere and is required for respiration?",
		answer: 'Oxygen',
		category: 'Science',
	},
	{
		question: 'Which soft metal is part of table salt and essential for nerve function?',
		answer: 'Sodium',
		category: 'Science',
	},
	{
		question: 'Which light metal is important for muscle and enzyme function?',
		answer: 'Magnesium',
		category: 'Science',
	},
	{
		question: 'Which lightweight metal does not rust and is widely used in industry?',
		answer: 'Aluminum',
		category: 'Science',
	},
	{
		question: 'Which element is a major component of sand and is used in computer chips?',
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
		question: 'Which greenish gas is used to disinfect water?',
		answer: 'Chlorine',
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
		question: 'Which metal is the best electrical conductor and is used in jewelry and coins?',
		answer: 'Silver',
		category: 'Science',
	},
	{
		question: 'Which metal is highly valuable, does not tarnish, and is extremely malleable?',
		answer: 'Gold',
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
	{ question: 'Who discovered the law of gravity?', answer: 'Isaac Newton', category: 'Science' },
	{
		question: 'What are the three main layers of Earth?',
		answer: 'Crust, mantle, core',
		category: 'Science',
	},
	{
		question: 'What is the Sun primarily made of?',
		answer: 'Hydrogen and helium',
		category: 'Science',
	},

	// Literature — Author questions

	{ question: "Who wrote 'To Kill a Mockingbird'?", answer: 'Harper Lee', category: 'Literature' },
	{ question: "Who wrote 'Moby-Dick'?", answer: 'Herman Melville', category: 'Literature' },
	{ question: "Who wrote 'Pride and Prejudice'?", answer: 'Jane Austen', category: 'Literature' },
	{ question: "Who wrote 'Jane Eyre'?", answer: 'Charlotte Brontë', category: 'Literature' },

	{ question: "Who wrote 'The Republic'?", answer: 'Plato', category: 'Literature' },

	{
		question: 'Sherlock Holmes first appeared in the works of which author?',
		answer: 'Arthur Conan Doyle',
		category: 'Literature',
	},
	{
		question: 'Which dystopian novel features a society divided into castes such as Alpha and Beta?',
		answer: 'Brave New World',
		category: 'Literature',
	},

	{
		question: 'What is the title of the first book in the A Song of Ice and Fire series?',
		answer: 'A Game of Thrones',
		category: 'Literature',
	},
	{
		question: 'Which novel features the characters Piggy, Ralph, and Jack?',
		answer: 'Lord of the Flies',
		category: 'Literature',
	},

	{
		question: 'Which classic novella features the characters George and Lennie?',
		answer: 'Of Mice and Men',
		category: 'Literature',
	},
	{
		question: 'Which novel opens with the line “It was the best of times, it was the worst of times”?',
		answer: 'A Tale of Two Cities',
		category: 'Literature',
	},
	{
		question: 'What is the name of the whaling ship in Moby-Dick?',
		answer: 'The Pequod',
		category: 'Literature',
	},

	{
		question: 'The Handmaid’s Tale takes place in a theocratic state called what?',
		answer: 'Gilead',
		category: 'Literature',
	},
	{
		question: 'Which classic novel features the character Atticus Finch?',
		answer: 'To Kill a Mockingbird',
		category: 'Literature',
	},

	{
		question: 'In Greek mythology and literature, who is the king of Ithaca?',
		answer: 'Odysseus',
		category: 'Literature',
	},
	{
		question: 'Which poet wrote the line “Do not go gentle into that good night”?',
		answer: 'Dylan Thomas',
		category: 'Literature',
	},
	{
		question: 'Les Misérables was written by which French author?',
		answer: 'Victor Hugo',
		category: 'Literature',
	},

	{
		question: 'Which American novel features Scout Finch narrating her childhood in the 1930s South?',
		answer: 'To Kill a Mockingbird',
		category: 'Literature',
	},

	// Sports
	{
		question: 'Which NFL team has won the most Super Bowls?',
		answer: 'New England Patriots',
		category: 'Pop Culture',
	},
	{
		question: 'Which MLB team has won the most World Series titles?',
		answer: 'New York Yankees',
		category: 'Pop Culture',
	},
	{
		question: "Who is the NBA's all-time leading scorer?",
		answer: 'LeBron James',
		category: 'Pop Culture',
	},
	{
		question: 'Which country has won the most FIFA World Cups?',
		answer: 'Brazil',
		category: 'Pop Culture',
	},
	{
		question: 'Who holds the record for the most Olympic gold medals?',
		answer: 'Michael Phelps',
		category: 'Pop Culture',
	},
	{
		question: 'Who has scored the most goals in professional soccer history?',
		answer: 'Cristiano Ronaldo',
		category: 'Pop Culture',
	},
	{
		question: "Who holds the record for the most women's Grand Slam tennis titles?",
		answer: 'Serena Williams',
		category: 'Pop Culture',
	},
	{ question: 'When did the modern Olympic Games begin?', answer: '1896 Greece', category: 'Pop Culture' },
	{
		question: 'Which NFL team has the most all-time wins?',
		answer: 'Chicago Bears',
		category: 'Pop Culture',
	},

	{
		question: "Which Hall of Fame quarterback, nicknamed 'The Sheriff', set the NFL single-season records for both passing touchdowns and passing yards in 2013 on his way to a record fifth career MVP award?",
		answer: 'Peyton Manning',
		category: 'Pop Culture',
	},




	// Food & Drink
	{
		question: 'Which cocktail is made with rum, mint, lime, sugar, and soda water?',
		answer: 'Mojito',
		category: 'Food',
	},
	{
		question: 'Which cocktail is traditionally made with gin or vodka and vermouth?',
		answer: 'Martini',
		category: 'Food',
	},
	{
		question: 'What is the hottest chili pepper in the world?',
		answer: 'Carolina Reaper',
		category: 'Food',
	},
	{
		question: 'What type of rice is traditionally used to make risotto?',
		answer: 'Arborio rice',
		category: 'Food',
	},
	{
		question: 'Which country is best known for producing feta cheese?',
		answer: 'Greece',
		category: 'Food',
	},
	{
		question: 'Which Middle Eastern food is made from ground chickpeas or fava beans and deep-fried?',
		answer: 'Falafel',
		category: 'Food',
	},
	{
		question: 'Which dish of raw fish cured in citrus originated in Peru?',
		answer: 'Ceviche',
		category: 'Food',
	},
	{
		question: 'What is the name of the fifth basic taste, discovered after sweet, sour, salty, and bitter?',
		answer: 'Umami',
		category: 'Food',
	},
	{
		question: 'What is the most expensive spice in the world by weight?',
		answer: 'Saffron',
		category: 'Food',
	},

	// new 12/12

	// Great Lakes – 5
	{
		question: 'Which of the Great Lakes is the deepest and holds the most water?',
		answer: 'Lake Superior',
		category: 'New',
	},
	{
		question: 'Which Great Lake is the only one entirely within the United States?',
		answer: 'Lake Michigan',
		category: 'New',
	},
	{
		question: 'What are the 5 great lakes',
		answer: 'Superior, Michigan, Erie, Huron, Ontario',
		category: 'New',
	},
	{
		question: 'Which Great Lake lies at the lowest elevation and drains into the Atlantic Ocean via the St. Lawrence River?',
		answer: 'Lake Ontario',
		category: 'New',
	},
	{
		question: 'Which Great Lake is known for having the worst storms and shipwreck history, including the sinking of the Edmund Fitzgerald?',
		answer: 'Lake Superior',
		category: 'New',
	},

	// Shakespeare – 7
	{
		question: 'What tragedy is Shakespeare’s longest play?',
		answer: 'Hamlet',
		category: 'New',
	},
	{
		question: 'Which Shakespeare play features the characters Rosencrantz and Guildenstern?',
		answer: 'Hamlet',
		category: 'New',
	},
	{
		question: "In which Shakespeare play has the line 'All the world’s a stage'",
		answer: 'As You Like It',
		category: 'New',
	},
	{
		question: 'What Shakespeare comedy centers around a magical forest ruled by Oberon and Titania?',
		answer: 'A Midsummer Night’s Dream',
		category: 'New',
	},
	{
		question: "Which Shakespeare play tells the story of a Scottish nobleman who kills his king after hearing a prophecy and is destroyed by ambition and guilt?",
		answer: 'Macbeth',
		category: 'New',
	},
	{
		question: "Shakespeare's 6 biggest plays",
		answer: "Romeo & Juliet, Hamlet, Macbeth, Othello, A Midsummer Night's Dream, King Lear",
		category: 'New',
	},

	// Famous Kings & Queens – 7
	{
		question: 'Which English king signed the Magna Carta in 1215?',
		answer: 'King John',
		category: 'New',
	},
	{
		question: 'Which queen ruled England from 1837 to 1901 during the Victorian era?',
		answer: 'Queen Victoria',
		category: 'New',
	},
	{
		question: "Who was the French king known as the 'Sun King'?",
		answer: 'Louis XIV',
		category: 'New',
	},
	{
		question: 'What Egyptian queen was the last active ruler of the Ptolemaic Kingdom of Egypt from 50-30BC?',
		answer: 'Cleopatra VII',
		category: 'New',
	},
	{
		question: 'Which Spanish monarchs funded Christopher Columbus’s 1492 voyage?',
		answer: 'King Ferdinand and Queen Isabella',
		category: 'New',
	},
	{
		question: 'Which English king broke from the Catholic Church and founded the Church of England?',
		answer: 'Henry VIII',
		category: 'New',
	},
	{
		question: 'Which queen became the longest-reigning British monarch before being surpassed by Elizabeth II?',
		answer: 'Queen Victoria',
		category: 'New',
	},

	// Famous Football Players – 7 (American Football)
	{
		question: 'Which NFL quarterback has won the most Super Bowl titles?',
		answer: 'Tom Brady',
		category: 'New',
	},
	{
		question: 'Which wide receiver holds the NFL records for most career receptions, receiving yards, and receiving touchdowns?',
		answer: 'Jerry Rice',
		category: 'New',
	},
	{
		question: 'Who was the first NFL player to rush for over 2,000 yards in a single season?',
		answer: 'O.J. Simpson',
		category: 'New',
	},
	{
		question: "Which NFL quarterback became known as 'Broadway Joe' and famously guaranteed a Super Bowl victory?",
		answer: 'Joe Namath',
		category: 'New',
	},

	
		// Henry VIII
		{
		  question: 'Which English king is famous for having six wives?',
		  answer: 'Henry VIII',
		  category: 'New'
		},
		{
		  question: 'Which monarch broke from the Catholic Church to establish the Church of England?',
		  answer: 'Henry VIII',
		  category: 'New'
		},
		{
		  question: 'Which Tudor king ruled England in the early 1500s and married Anne Boleyn?',
		  answer: 'Henry VIII',
		  category: 'New'
		},
	  
		// Elizabeth I
		{
		  question: 'Which English queen was known as the “Virgin Queen”?',
		  answer: 'Elizabeth I',
		  category: 'New'
		},
		{
		  question: 'Which monarch ruled England during the defeat of the Spanish Armada in 1588?',
		  answer: 'Elizabeth I',
		  category: 'New'
		},
		{
		  question: 'Which daughter of Henry VIII reigned during England’s Golden Age?',
		  answer: 'Elizabeth I',
		  category: 'New'
		},
	  
		// Elizabeth II
		{
		  question: 'Which British monarch was the longest-reigning in the country’s history?',
		  answer: 'Elizabeth II',
		  category: 'New'
		},
		{
		  question: 'Which queen ruled the United Kingdom from 1952 to 2022?',
		  answer: 'Elizabeth II',
		  category: 'New'
		},
		{
		  question: 'Which monarch witnessed Britain transition from empire to a modern state?',
		  answer: 'Elizabeth II',
		  category: 'New'
		},
	  
		// Louis XIV
		{
		  question: 'Which French king was known as the “Sun King”?',
		  answer: 'Louis XIV',
		  category: 'New'
		},
		{
		  question: 'Which monarch built the Palace of Versailles as a symbol of royal power?',
		  answer: 'Louis XIV',
		  category: 'New'
		},
		{
		  question: 'Which king famously said, “I am the state”?',
		  answer: 'Louis XIV',
		  category: 'New'
		},
	  
		// Napoleon Bonaparte
		{
		  question: 'Which French leader crowned himself emperor in 1804?',
		  answer: 'Napoleon Bonaparte',
		  category: 'New'
		},
		{
		  question: 'Which military commander was defeated at the Battle of Waterloo in 1815?',
		  answer: 'Napoleon Bonaparte',
		  category: 'New'
		},
		{
		  question: 'Which ruler rose to power after the French Revolution and dominated Europe?',
		  answer: 'Napoleon Bonaparte',
		  category: 'New'
		},
	  
		// Julius Caesar
		{
		  question: 'Which Roman leader was assassinated on the Ides of March in 44 BC?',
		  answer: 'Julius Caesar',
		  category: 'New'
		},
		{
		  question: 'Which general famously crossed the Rubicon, signaling civil war?',
		  answer: 'Julius Caesar',
		  category: 'New'
		},
		{
		  question: 'Which Roman dictator was betrayed by members of the Senate?',
		  answer: 'Julius Caesar',
		  category: 'New'
		},
	  
		// Alexander the Great
		{
		  question: 'Which Macedonian king created one of the largest empires in ancient history?',
		  answer: 'Alexander the Great',
		  category: 'New'
		},
		{
		  question: 'Which conqueror was undefeated in battle and reached as far as India?',
		  answer: 'Alexander the Great',
		  category: 'New'
		},
		{
		  question: 'Which student of Aristotle became king at age 20?',
		  answer: 'Alexander the Great',
		  category: 'New'
		},
	  
		// Cleopatra VII
		{
		  question: 'Who was the last active pharaoh of Ancient Egypt?',
		  answer: 'Cleopatra VII',
		  category: 'New'
		},
		{
		  question: 'Which queen of Egypt was allied with Julius Caesar and Mark Antony?',
		  answer: 'Cleopatra VII',
		  category: 'New'
		},
		{
		  question: 'Which ruler famously committed suicide after the Roman conquest of Egypt?',
		  answer: 'Cleopatra VII',
		  category: 'New'
		}
	  
	  
];
