// This prerequisites self-assessment will provide a baseline and assure you that you are ready for the material to come

// If Statements

// Challenge 1
// Use an if statement to double the variable num if num is greater than 2.
const doubleVarGreaterThanTwo = function(num) {
	if (num > 2) {
		return num * 2;
	}
	return num;
};


// Challenge 2
// Use an if statement to double the variable newNum if newNum is less than 2.
const doubleVarLessThanTwo = function(newNum) {
	if (newNum < 2) {
		return newNum * 2;
	}
	return newNum;
};


// Challenge 3
// Use an if statement to determine if num from Challenge 1 is even.  If it is, log true to the console.  Otherwise, log false to the console.
const checkForEvens = function(num) {
	if (num % 2 === 0) {
		return true;
	}
	return false;
};


// Challenge 4
// You are given an array of elements called checkMe.  Use an if statement to log true if the length of the array is greater than 5, and false if it is not.
let checkMe = [1, 2, 3];
const checkArrLength = arr => {
	if (arr.length > 5) {
		return true;
	}
	return false;
};


// Challenge 5
// You are given a variable called isDivisibleBy4.  Use an if statement to determine if its value is divisible by 4.  Log true to the console if it is, and false to the console if it isn't.
let isDivisibleBy4 = 25;
const checkDivisibleBy4 = function(num) {
	if (num % 4 === 0) {
		return true;
	}
	return false;
};

console.log(checkDivisibleBy4(isDivisibleBy4));

// ---

// Loops and iteration

// Challenge 6
// Use a while loop to increment count by 2 and count2 by 3 on each repeat of the block of code. Run the code block of your while loop 4 times total.
const IncrementCount = (times, count, count2) => {
	while (times++ < 4) {
		count += 2;
		count2 += 3;
	}
	return `count = ${count} | count2 = ${count2}`;
};

console.log(IncrementCount(0, 2, 2));

// Challenge 7
// Use a for loop to initialize a variable addThis to 0, increment addThis by 1 on each run of the code block, and then to repeat the code block as long as addThis is less than 10. In the code block, add the value of addThis to sum. The value of sum should be the sum of the numbers 0 through 9.
const totalSum = sum => {
	for (let addThis = 0; addThis < 10; addThis++) {
		sum += addThis;
	}
	return sum;
};

console.log(totalSum(0));

// Challenge 8
// You are given a variable countDown that is initialized to 10.  Use a for loop to decrease it's value by 1 on every iteration of the loop until it's value is 0.
let countDown = 10;
const decreaseVarByOne = function(num) {
	for (; num > 0; num--) {}
	return num;
};


// Challenge 9
// You are given an array of 5 numbers called increaseByTwo.  Use a for loop to iterate through the array and increase each number by two.
let increaseByTwo = [1, 2, 3, 4, 5];
const IncreaseNumInArrByTwo = function(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] + 2);
	}
	return newArr;
};

// Challenge 10
// Using increaseByTwo from Challenge 9,  iterate through the modified array and multiply a number by 10 if it is greater than or equal to 5.
const multiplyNumBy10IfGreaterThan5 = function(arr) {
	const newArr = arr;
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] > 5) {
			newArr[i] *= 10;
		}
	}
	return newArr;
};

// Challenge 11
// You are given an empty array called fillMe.  Using a for loop, fill the array with numbers from 0 to 10.
const fillMe = [];
const fillArray = function(arr) {
	for (let i = 0; i < 11; i++) {
		arr.push(i);
	}
	return arr;
};

// Challenge 12
// You are given a new empty array called modifiedFillMe.  Using a for loop, loop backwards through the fillMe array from Challenge 11 and populate the new array with the numbers if they are even.
const modifiedFillMe = [];
const AddEvensToArray = function(arr1, arr2) {
	for (let i = arr1.length - 1; i >= 0; i--) {
		if (arr1[i] % 2 === 0) {
			arr2.push(arr1[i]);
		}
	}
	return arr2;
};

// Challenge 13
// You are provided with an object called checkObj.  Using a for... in loop, determine if the object contains the property foundNum.  If it exists, log Found! to the console, otherwise log, Does not exist! to the console.
let checkObj = {
	oddNum: 1,
	evenNum: 2,
	foundNum: 5,
	randomNum: 18,
};

const findProp = function(obj) {
	for (const prop in obj) {
		if (prop === 'foundNum') {
			return 'Found!';
		}
	}
	return 'Does not exist!';
};

// Challenge 14
// You are provided with another empty array called objToArray.  Using a for... in loop, fill the array with all of the numbers from the checkObj object from the previous challenge if they are greater than or equal to 2.
const objToArray = [];
const fillArrWithNumInObj = function(obj, arr) {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if (obj[prop] >= 2) {
				objToArray.push(obj[prop]);
			}
		}
	}
	return arr;
};

// Challenge 15
// Using a for loop, iterate through the objToArray to determine if any of the numbers are divisible by 6.  If there are any, log true to the console.  If there aren't any, log false to the console.
const isDivisibleBy6 = arr => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 6 === 0) {
			return true;
		}
	}
	return false;
};


// Challenge 16
// You are provided with an empty array called nestedArr.  Using a for loop, add 5 sub-arrays to nestedArr, with each nested array containing the string 'loop' concatenated with the corresponding index in nestedArr as it's first element, and just the index as it's second element. Example of a subarray: ['loop3', 3]
const nestedArr = [];
const AddSubArr = function(array) {
	for (let i = 0; i < 5; i++) {
		array.push([`loop${i}`, i]);
	}
	return array;
};

// Challenge 17
// Create a variable called loopNumbers and initialize it to an empty object literal. Using a for loop, iterate through nestedArr from the previous challenge.  For each iteration of your loop, assign a new property to loopNumbers where the property name is the first element in each nested array in nestedArr and the value is the second element.
const loopNumbers = {};
const arrToObj = (arr, obj) => {
	for (let i = 0; i < arr.length; i++) {
		obj[arr[i][0]] = arr[i][1];
	}
	return obj;
};

// Challenge 18
// Using a for...in loop, iterate through loopNumbers from the previous challenge and determine how many properties are contained within the object.
const numberObjProps = obj => {
	let length = 0;
	for (let prop in obj) {
		length += 1;
	}
	return length;
};

// Challenge 19
// You are given an array of integers called possibleIterable.  Using an if statement, loop through the array and log each element to the console only if the number of elements in the array is greater than 3.
let possibleIterable = [4, 3, 9, 6, 23];
const AddNumInArrGreaterThan3 = arr => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 3) {
			console.log(arr[i]);
		}
	}
};

// Challenge 20
// You are given a variable called sumMe that is initialized to an object literal containing several key/value pairs, and a variable called total that is initialized to 0.  Using a for... in loop, iterate through sumMe.  If the value of the property that is being evaluated on the current iteration of the loop is a number, add it to total.
let sumMe = {
	hello: 'there',
	you: 8,
	are: 7,
	almost: '10',
	done: '!',
};
const AddNumInObj = obj => {
	let total = 0;
	for (let prop in sumMe) {
		if (obj.hasOwnProperty(prop)) {
			if (typeof sumMe[prop] === 'number') {
				total += sumMe[prop];
			}
		}
	}
	return total;
};
