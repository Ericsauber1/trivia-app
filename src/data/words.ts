export type WordCategory = 'New' | 'Old';

export interface Word {
	word: string;
	definition: string;
	category: WordCategory;
	example: string;
}

export const words: Word[] = [
	{
		word: 'Auspicious',
		definition: 'Suggesting favorable conditions or future success',
		category: 'Old',
		example: 'The clear skies on launch day were an auspicious sign for the mission.',
	},
	{
		word: 'Disparate',
		definition: 'Essentially different in kind or nature; not easily compared',
		category: 'Old',
		example: 'The committee struggled to unite the disparate interests of scientists and politicians.',
	},
	{
		word: 'Indignant',
		definition: 'Feeling anger or annoyance at perceived injustice',
		category: 'Old',
		example: 'She was indignant at being blamed for a mistake she didn’t make.',
	},
	{
		word: 'Punitive',
		definition: 'Intended to impose punishment rather than correction',
		category: 'Old',
		example: 'The judge rejected a purely punitive sentence.',
	},
	{
		word: 'Earnest',
		definition: 'Showing sincere, serious conviction',
		category: 'Old',
		example: 'He spoke with earnest concern about the decision.',
	},
	{
		word: 'Benevolent',
		definition: 'Kindly and well-meaning; motivated by goodwill',
		category: 'Old',
		example: 'The program was funded by a benevolent donor.',
	},
	{
		word: 'Poignant',
		definition: 'Deeply moving, often with a sense of sadness or longing',
		category: 'Old',
		example: 'The final scene was poignant and unforgettable.',
	},
	{
		word: 'Reproach',
		definition: 'To express disapproval or disappointment',
		category: 'Old',
		example: 'He looked at her with quiet reproach.',
	},
	{
		word: 'Exultant',
		definition: 'Filled with triumphant joy or elation',
		category: 'Old',
		example: 'The team was exultant after their victory.',
	},
	{
		word: 'Sordid',
		definition: 'Filthy, degrading, or morally corrupt',
		category: 'Old',
		example: 'The investigation revealed a sordid web of corruption.',
	},
	{
		word: 'Languid',
		definition: 'Slow, relaxed, or lacking energy',
		category: 'Old',
		example: 'They spent a languid afternoon by the lake.',
	},
	{
		word: 'Ingenuous',
		definition: 'Innocent, trusting, and naïve',
		category: 'New',
		example: 'Her ingenuous questions revealed her inexperience.',
	},
	{
		word: 'Superfluous',
		definition: 'Unnecessary; exceeding what is sufficient',
		category: 'New',
		example: 'The extra details were superfluous.',
	},
	{
		word: 'Vapid',
		definition: 'Dull, shallow, or lacking substance',
		category: 'New',
		example: 'The dialogue was vapid and uninspired.',
	},
	{
		word: 'Impudent',
		definition: 'Offensively bold or disrespectful',
		category: 'New',
		example: 'His impudent comment shocked the audience.',
	},
	{
		word: 'Infallible',
		definition: 'Incapable of making mistakes or being wrong',
		category: 'Old',
		example: 'No system is truly infallible.',
	},
	{
		word: 'Vilify',
		definition: 'To portray or speak of as wicked or contemptible',
		category: 'Old',
		example: 'The campaign attempted to vilify its critics.',
	},
	{
		word: 'Interminable',
		definition: 'So long as to seem endless or wearisome',
		category: 'New',
		example: 'The negotiations felt interminable.',
	},
	{
		word: 'Allusion',
		definition: 'An indirect or subtle reference',
		category: 'Old',
		example: 'The speech contained an allusion to earlier failures.',
	},
	{
		word: 'Perturb',
		definition: 'To disturb or unsettle mentally',
		category: 'Old',
		example: 'The unexpected news seemed to perturb him.',
	},

	{
		word: 'Contentious',
		definition: 'Likely to cause disagreement, argument, or controversy',
		category: 'New',
		example: 'The proposal became contentious once budget cuts were discussed.',
	},
	{
		word: 'Presumptuous',
		definition: 'Overstepping boundaries; taking liberties without permission or justification',
		category: 'New',
		example: 'It was presumptuous of him to assume he was invited to the meeting.',
	},
	{
		word: 'Scrupulous',
		definition: 'Extremely careful, thorough, and ethical in behavior or actions',
		category: 'New',
		example: 'He was scrupulous about citing his sources accurately.',
	},
	{
		word: 'Substantiate',
		definition: 'To support a claim with evidence or proof',
		category: 'New',
		example: 'The researcher was asked to substantiate her conclusions with data.',
	},

	{
		word: 'Pundit',
		definition: 'An expert or commentator who gives opinions in a particular field',
		category: 'New',
		example: 'Political pundits debated the election results on television.',
	},
	{
		word: 'Posterity',
		definition: 'All future generations of people',
		category: 'New',
		example: 'The discovery was preserved for posterity.',
	},
	{
		word: 'Machiavellian',
		definition: 'Cunning, manipulative, and willing to use deceit to achieve power',
		category: 'Old',
		example: 'His Machiavellian tactics helped him rise quickly in politics.',
	},
	{
		word: 'Hyperbole',
		definition: 'Exaggerated statements or claims not meant to be taken literally',
		category: 'New',
		example: 'Saying the bag weighed a ton was pure hyperbole.',
	},
	{
		word: 'Hedonistic',
		definition: 'Focused on the pursuit of pleasure and self-indulgence',
		category: 'New',
		example: 'The vacation became a hedonistic escape from daily responsibilities.',
	},
	{
		word: 'Euphemism',
		definition: 'A mild or indirect word used to replace one considered harsh or unpleasant',
		category: 'New',
		example: '“Passed away” is a common euphemism for death.',
	},
	{
		word: 'Ambivalent',
		definition: 'Having mixed or conflicting feelings about something',
		category: 'New',
		example: 'She felt ambivalent about moving to a new city.',
	},
	{
		word: 'Insipid',
		definition: 'Lacking flavor, interest, or vitality; dull',
		category: 'New',
		example: 'He found the novel insipid despite its popularity.',
	},

	{
		word: 'Furtive',
		definition: 'Attempting to avoid notice or attention, often because of guilt or secrecy',
		category: 'New',
		example: 'He cast a furtive glance over his shoulder before slipping the letter into his coat.',
	},
	{
		word: 'Abjure',
		definition: 'To formally or decisively reject or renounce a belief, claim, or course of action',
		category: 'New',
		example: 'The character abjures his former ideals after witnessing the consequences of his actions.',
	},
	{
		word: 'Aphorism',
		definition: 'A concise statement expressing a general truth or observation',
		category: 'New',
		example: '‘Power tends to corrupt’ is an aphorism often cited in political literature.',
	},
	{
		word: 'Disseminate',
		definition: 'To spread or distribute something, especially information or ideas, widely to many people',
		category: 'New',
		example: 'If untreated, the infection can disseminate from the lungs to other organs throughout the body.',
	},
	{
		word: 'Subversive',
		definition: 'Seeking to undermine or overthrow established authority, institutions, or norms',
		category: 'New',
		example: 'The author’s subversive ideas quietly challenged long-held social norms.',
	},
	{
		word: 'Squalid',
		definition: 'Extremely dirty, filthy, or unpleasant due to neglect or poverty',
		category: 'New',
		example: 'They lived in a squalid apartment with peeling walls and broken plumbing.',
	},
	{
		word: 'Inexorable',
		definition: 'Impossible to stop or prevent; relentless',
		category: 'New',
		example: 'The inexorable passage of time eventually changes even the strongest traditions.',
	},

	{
		word: 'Prudent',
		definition: 'Showing careful judgment and good sense, especially about practical matters or the future',
		category: 'New',
		example: 'It was prudent to save money during the good months in case business slowed later.',
	},
	{
		word: 'Lechery',
		definition: 'Excessive or uncontrolled sexual desire or behavior',
		category: 'New',
		example: 'The scandal exposed years of lechery hidden behind the politician’s public image.',
	},
	{
		word: 'Seminal',
		definition: 'Highly influential or original, laying the foundation for future developments',
		category: 'New',
		example: 'That album was a seminal work that reshaped the entire genre.',
	},

	{
		word: 'Prodigal',
		definition: 'Wastefully extravagant, or relating to someone who leaves home and later returns',
		category: 'New',
		example: 'After years of prodigal spending, he finally learned to live within his means.',
	},
	{
		word: 'Erroneous',
		definition: 'Incorrect or based on a mistake',
		category: 'New',
		example: 'The report was based on erroneous data and had to be revised.',
	},
	{
		word: 'Irreverent',
		definition: 'Showing a lack of respect for things generally taken seriously',
		category: 'New',
		example: 'Her irreverent humor shocked some but delighted others.',
	},
	{
		word: 'Formative',
		definition: 'Having a significant influence on development or character',
		category: 'New',
		example: 'Those early years were formative in shaping his worldview.',
	},
	{
		word: 'Incredulous',
		definition: 'Unwilling or unable to believe something',
		category: 'New',
		example: 'She stared at the email, incredulous that she had actually won.',
	},

	{
		word: 'Ennui',
		definition: 'A deep feeling of boredom, weariness, or dissatisfaction with life',
		category: 'New',
		example: 'After months of the same routine, he began to feel a quiet ennui creeping into his days.',
	},
{
		word: 'Faustian',
		definition: 'Relating to sacrificing moral integrity or values in order to achieve power, success, or knowledge',
		category: 'New',
		example: 'The deal felt Faustian — he gained wealth and influence but lost the trust of everyone around him.',
	},
	{
		word: 'Banal',
		definition: 'So lacking in originality as to be obvious and boring; predictable and uninteresting',
		category: 'New',
		example: 'The speech was full of banal platitudes that left the audience unmoved.',
	  },
	  
	  {
		word: 'Colloquial',
		definition: 'Characteristic of or used in informal everyday conversation rather than formal speech or writing',
		category: 'New',
		example: 'The professor reminded students that colloquial expressions like "gonna" are inappropriate in academic essays.',
	  },

	  {
		word: 'Affable',
		definition: 'Friendly and easy to talk to',
		category: 'New',
		example: 'Their new neighbor was so affable that within a week he knew everyone on the block by name.',
	},
	{
		word: 'Licentious',
		definition: 'Immoral; showing no regard for rules or decency',
		category: 'New',
		example: 'The poet\'s licentious behavior scandalized the same town that had once celebrated him.',
	},
	{
		word: 'Bedizened',
		definition: 'Dressed up garishly; overdressed with showy ornamentation',
		category: 'New',
		example: 'She arrived bedizened in sequins and costume jewelry, outshining even the stage lights.',
	},
	{
		word: 'Ardently',
		definition: 'With intense passion or enthusiasm',
		category: 'New',
		example: 'He argued ardently for the proposal, refusing to yield even after three hours of debate.',
	},
	{
		word: 'Importunity',
		definition: 'Persistent, pushy demands; the act of pestering someone',
		category: 'New',
		example: 'Worn down by the salesman\'s importunity, she signed the contract just to end the conversation.',
	},
	{
		word: 'Haughty',
		definition: 'Arrogantly acting superior to others',
		category: 'New',
		example: 'She gave a haughty nod to the staff and swept past without another word.',
	},
	{
		word: 'Denouement',
		definition: 'The final resolution or outcome of a situation',
		category: 'New',
		example: 'The novel\'s denouement ties up every subplot in a single quiet conversation on a train platform.',
	},
	{
		word: 'Insolence',
		definition: 'Rude, disrespectful behavior toward someone',
		category: 'New',
		example: 'The sergeant had no patience for insolence from a recruit three days into training.',
	},
	{
		word: 'Acrimony',
		definition: 'Bitterness and hostility in words or manner',
		category: 'New',
		example: 'What began as a polite disagreement over the budget dissolved into acrimony by the end of the meeting.',
	},
	  
	{
		word: 'Tacit',
		definition: 'Understood or implied without being stated outright',
		category: 'New',
		example: 'There was a tacit agreement among the roommates that no one would touch the top shelf of the fridge.',
	},
	{
		word: 'Guile',
		definition: 'Sly or cunning intelligence, especially when used to deceive',
		category: 'New',
		example: 'He lacked the strength to win the argument outright, so he relied on guile, steering the committee toward his plan without anyone noticing.',
	},
	{
		word: 'Irascible',
		definition: 'Easily made angry; hot-tempered',
		category: 'New',
		example: 'The irascible old landlord would start shouting if you so much as parked a foot over the line.',
	},
	{
		word: 'Homage',
		definition: 'Special honor or respect shown publicly, often through a tribute or reference to someone\'s work',
		category: 'New',
		example: 'The film\'s opening shot is an homage to the director\'s favorite Hitchcock thriller.',
	},
	{
		word: 'Infirmity',
		definition: 'Physical or mental weakness, especially from age or illness',
		category: 'New',
		example: 'Despite the infirmity of his later years, he still insisted on walking to the corner store every morning.',
	},
];
