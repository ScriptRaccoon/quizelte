type Question = {
	question: string;
	answers: string[];
	correctAnswer: number;
	explanation?: string;
};

export const questions: Question[] = [
	{
		question: "What does HTML stand for?",
		answers: [
			"Home Text Monitoring Language",
			"HyperText Markup Language",
			"Hierarchical Temporal Memory Language",
		],
		correctAnswer: 1,
	},
	{
		question: "CSS stands for ...",
		answers: [
			"Cascading Style Sheets",
			"Cyberstyling Scripts",
			"Computational System Store",
		],
		correctAnswer: 0,
	},
	{
		question: "SVG stands for ...",
		answers: [
			"Standard Virtual Glitch",
			"Script Velocity Graph",
			"Scalable Vector Graphics",
		],
		correctAnswer: 2,
	},
	{
		question: "What does SPA stand for?",
		answers: [
			"Solid Parameter Adjustment",
			"Secure Patch Alignment",
			"Single Page Application",
		],
		correctAnswer: 2,
	},
	{
		question: "When did JavaScript first appear?",
		answers: ["1993", "1994", "1995", "1996"],
		correctAnswer: 2,
	},
	{
		question: "What does 'Vanilla JS' mean?",
		answers: [
			"A variant of JavaScript with less features",
			"Just JavaScript without any framework",
			"A brand-new blazingly fast JavaScript framework",
		],
		correctAnswer: 1,
	},
	{
		question: "React was developed by ...",
		answers: ["Amazon", "Facebook", "Google", "Jesus"],
		correctAnswer: 1,
	},
	{
		question:
			"Which of the following is NOT a JavaScript runtime?",
		answers: ["Oden", "Node", "Deno"],
		correctAnswer: 0,
	},
	{
		question:
			"Which JavaScript framework does NOT use a Virtual DOM?",
		answers: ["React", "Vue", "Solid"],
		correctAnswer: 2,
	},
	{
		question:
			"The build tool Vite uses HMR, which stands for ...",
		answers: [
			"Huge Memory Relocation",
			"Hot Module Replacement",
			"Hashed Memoization Rules",
		],
		correctAnswer: 1,
	},
	{
		question:
			"Which of the following languages does NOT compile to JavaScript?",
		answers: ["TypeScript", "CoffeeScript", "PyScript", "Elm"],
		correctAnswer: 2,
		explanation:
			"PyScript uses WebAssembly and can talk to JavaScript, but doesn't compile to it.",
	},
	{
		question:
			"How many npm packages are there approximately? (2020)",
		answers: ["1.300.000", "2.700.000", "4.200.000"],
		correctAnswer: 0,
	},
	{
		question:
			"How many heading tags (h1, h2, etc.) does HTML support?",
		answers: ["4", "5", "6", "7"],
		correctAnswer: 2,
	},
	{
		question: "The hex color #FFFF00 is ...",
		answers: ["orange", "yellow", "purple", "teal"],
		correctAnswer: 1,
	},
	{
		question: "In CSS, :hover and :checked are ...",
		answers: [
			"pseudo-classes",
			"modifier-classes",
			"state-classes",
		],
		correctAnswer: 0,
	},
	{
		question:
			"Which CSS property sets the roundedness of an element?",
		answers: [
			"border-roundedness",
			"corner-roundedness",
			"border-radius",
			"corner-radius",
		],
		correctAnswer: 2,
	},
	{
		question:
			"Given <main id='main' class='main'>, which CSS selector has the highest specificity?",
		answers: ["main", "#main", ".main"],
		correctAnswer: 1,
	},
	{
		question: "What is the brand-new 'parent selector' in CSS?",
		answers: [":before", ":has", ":parent"],
		correctAnswer: 1,
	},
	{
		question:
			"The CSS assignment translate: rotate(90deg) translateX(20px) ...",
		answers: [
			"first rotates, then translates the element",
			"first translates, then rotates the element",
			"The order does not matter.",
		],
		correctAnswer: 0,
	},
	{
		question:
			"Which keyword does NOT declare a variable in JavaScript?",
		answers: ["let", "const", "var", "define"],
		correctAnswer: 3,
	},
	{
		question: "In JavaScript, [] == 0 returns ...",
		answers: ["true", "false", "This depends on strict mode."],
		correctAnswer: 0,
		explanation: "Notice that [] === 0 would return false.",
	},
	{
		question:
			"In JavaScript, which array method executes a function on every element of the array?",
		answers: ["every", "forEach", "forEvery", "forAll"],
		correctAnswer: 1,
		explanation:
			"Notice that the 'every' method checks a condition for every element.",
	},
	{
		question: "In JavaScript, typeof [NaN] returns ...",
		answers: ["NaN", "array", "undefined", "object"],
		correctAnswer: 3,
		explanation:
			"Every array in JavaScript is an object in disguise.",
	},
	{
		question: "In JavaScript, promises are used to ...",
		answers: [
			"delay an operation",
			"detect properties of an object",
			"run code asynchronously",
		],
		correctAnswer: 2,
	},
	{
		question:
			"How many types (String, etc.) does JavaScript have?",
		answers: ["5", "6", "7", "8"],
		correctAnswer: 3,
		explanation:
			"The types are: Boolean, Null, Undefined, Number, BigInt, String, Symbol, Object.",
	},
];
