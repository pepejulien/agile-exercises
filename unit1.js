// These challenges may seem accessible, but make sure you diagram them out or talk through them aloud in the same way we did in class. Understanding this precise approach to communicating your code will ensure that all the hard challenges to come follow much more naturally

// // Challenge 1A

// Create a function addTwo that accepts a number, and returns the number plus 2.

const addTwo = function(num) {
	return num + 2;
};

// Challenge 1

// Create a function addS that accepts a string, and returns the string with an "s" added to the end.

const addS = str => {
	return `${str}s`;
};

// Challenge 2

// Examine the code given to you. Determine what arguments must be passed into isX1 and isX2 respectively to obtain an output of true for both, and pass in the arguments accordingly.

const x = 3;

const isX1 = num => {
	const x = 5;
	return num === x;
};

const isX2 = num => {
	return num === x;
};


// Challenge 3

// Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry, as done in the commented out lines below the code given to you. You may add code to the places marked ADD CODE HERE?, though it might not be necessary to add code to all four places.

let calls = '';

const jerry = str => {
	calls += 'Jerry';
	kramer();
};

const george = str => {
	calls += 'George';
	elaine();
};

const elaine = str => {
	calls += 'Elaine';
};

const kramer = str => {
	calls += 'Kramer';
	george();
};

jerry();

// ---- Global Memory

// calls: ''
// jerry: FF
// george: FF
// elaine: FF
// kramer: FF

// ---- Global Execution Context
// - Local Execution Environment
// - Local Memory
// jerry() -> calls = 'Jerry'
// kramer() -> calls = 'JerryKramer'
// george() -> calls = 'JerryKramerGeorge'
// elaine() -> calls = 'JerryKramerGeorgeElaine'

// ---- Call Stack:

// elaine()
// george()
// kramer()
// jerry()
