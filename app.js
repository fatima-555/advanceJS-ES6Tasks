    // ================== ES6 TASKS =====================

//01
//GLOBAL SCOPE
// Declare variables in the global scope
var varVariable = "I am a var variable";
let letVariable = "I am a let variable";
const constVariable = "I am a const variable";

// Log all three variables to the console
console.log("varVariable:", varVariable); // Accessible globally
console.log("letVariable:", letVariable); // Accessible globally
console.log("constVariable:", constVariable); // Accessible globally

// Test if they are added to the global object
console.log("Is varVariable on window/globalThis?", globalThis.varVariable !== undefined); // true
console.log("Is letVariable on window/globalThis?", globalThis.letVariable !== undefined); // false
console.log("Is constVariable on window/globalThis?", globalThis.constVariable !== undefined); // false

//02
//FUNCTION SCOPE
// Define a function
function testFunctionScope() {
    // Declare variables inside the function
    var varVariable = "I am a var variable inside a function";
    let letVariable = "I am a let variable inside a function";
    const constVariable = "I am a const variable inside a function";

    // Log variables inside the function
    console.log("Inside the function:");
    console.log("varVariable:", varVariable);
    console.log("letVariable:", letVariable);
    console.log("constVariable:", constVariable);
}

// Call the function
testFunctionScope();

// Try to log variables outside the function
console.log("Outside the function:");
try {
    console.log("varVariable:", varVariable); // Should throw an error
} catch (error) {
    console.log("varVariable is not accessible outside the function");
}

try {
    console.log("letVariable:", letVariable); // Should throw an error
} catch (error) {
    console.log("letVariable is not accessible outside the function");
}

try {
    console.log("constVariable:", constVariable); // Should throw an error
} catch (error) {
    console.log("constVariable is not accessible outside the function");
}

//03
//BLOCK SCOPE
// Block scope example using an if statement
if (true) {
    // Declare variables inside the block
    var varVariable = "I am a var variable inside a block";
    let letVariable = "I am a let variable inside a block";
    const constVariable = "I am a const variable inside a block";

    // Log variables inside the block
    console.log("Inside the block:");
    console.log("varVariable:", varVariable);
    console.log("letVariable:", letVariable);
    console.log("constVariable:", constVariable);
}

// Try to log variables outside the block
console.log("Outside the block:");
console.log("varVariable:", varVariable); // Accessible
try {
    console.log("letVariable:", letVariable); // Should throw an error
} catch (error) {
    console.log("letVariable is not accessible outside the block");
}

try {
    console.log("constVariable:", constVariable); // Should throw an error
} catch (error) {
    console.log("constVariable is not accessible outside the block");
}

//04
//HOISTING
// Log a var variable before it is declared
console.log("Before declaration:", myVar);

var myVar = "I am a var variable";

// Log the variable after declaration
console.log("After declaration:", myVar);


//05
// Logging a let variable before it is declared
try {
    console.log("Before declaration (let):", myLetVar);
} catch (error) {
    console.log("Error with let:", error.message);
}

let myLetVar = "I am a let variable";

// Logging a const variable before it is declared
try {
    console.log("Before declaration (const):", myConstVar);
} catch (error) {
    console.log("Error with const:", error.message);
}

const myConstVar = "I am a const variable";

//06
//Re-Declaration
// Re-declaring with var
var varVariable = "First declaration with var";
var varVariable = "Second declaration with var"; // No error
console.log("varVariable:", varVariable);

// Re-declaring with let
try {
    // let letVariable = "First declaration with let";
    let letVariable = "Second declaration with let"; // Error
} catch (error) {
    console.log("Error with let:", error.message);
}

// Re-declaring with const
try {
    // const constVariable = "First declaration with const";
    const constVariable = "Second declaration with const"; // Error
} catch (error) {
    console.log("Error with const:", error.message);
}

//07
//Re-assignment
// Re-assignment with var
var varVariable = "Initial value with var";
console.log("Before re-assignment (var):", varVariable);
varVariable = "New value with var"; // Allowed
console.log("After re-assignment (var):", varVariable);

// Re-assignment with let
// let letVariable = "Initial value with let";
console.log("Before re-assignment (let):", letVariable);
letVariable = "New value with let"; // Allowed
console.log("After re-assignment (let):", letVariable);

// Re-assignment with const
try {
    const constVariable = "Initial value with const";
    console.log("Before re-assignment (const):", constVariable);
    constVariable = "New value with const"; // Error
    console.log("After re-assignment (const):", constVariable);
} catch (error) {
    console.log("Error with const:", error.message);
}

//08
//Temporal Dead Zone (TDZ)
// Example with let
try {
    console.log("Accessing let variable before declaration:", myLetVar); // TDZ error
    let myLetVar = "I am a let variable inside a block";
} catch (error) {
    console.log("Error with let:", error.message);
}

// Example with const
try {
    console.log("Accessing const variable before declaration:", myConstVar); // TDZ error
    const myConstVar = "I am a const variable inside a block";
} catch (error) {
    console.log("Error with const:", error.message);
}

//09
//When to use var, let, and const
// Good use case for var
function varExample() {
    for (var i = 0; i < 3; i++) {
        console.log("Inside loop with var:", i);
    }
    // i is still accessible here because var is function-scoped
    console.log("Outside loop with var:", i);
}
varExample();

// Good use case for let
function letExample() {
    let total = 0; // Use let for variables that will change value
    for (let i = 1; i <= 5; i++) {
        total += i; // Increment total
        console.log("Inside loop with let:", i);
    }
    // i is not accessible outside the loop because let is block-scoped
    console.log("Total using let:", total);
}
letExample();

// Good use case for const
function constExample() {
    const PI = 3.14159; // Use const for values that should not change
    const radius = 5;

    const area = PI * radius * radius; // Calculate the area of a circle
    console.log("Area of the circle using const:", area);

    // Uncommenting the next line would throw an error:
    // PI = 3.14; // Error: Assignment to constant variable
}
constExample();


//10
//String Interpolation
// Create variables for first name and last name
let firstName = "John";
let lastName = "Doe";

// Use a template literal to create the full name
let fullName = `${firstName} ${lastName}`;

// Log the full name to the console
console.log("Full Name:", fullName);

//11
//Multi-line Strings
// Use a template literal to create a multi-line string (e.g., an address)
let address = `
123 Main St
Apartment 4B
New York, NY 10001
USA
`;

// Log the address to the console
console.log("Address:", address);

//12
//Simple Expressions
// Create variables for two numbers
let num1 = 5;
let num2 = 10;

// Use a template literal to create a string that includes the sum of the numbers
let result1 = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

// Log the string to the console
console.log(result1);

//13
//Function Calls
// Create a function that takes two numbers and returns their product
function multiply(num1, num2) {
    return num1 * num2;
}

// Use a template literal to call the multiply function inside a string
let result = `The product of 6 and 7 is ${multiply(6, 7)}.`;

// Log the result to the console
console.log(result);

//14
//Creating a Tagged Template
// Create a simple tag function
function tag(strings) {
    console.log(strings);  // Log the array of strings
}

// Use the tag function with a template literal
let name = "John";
let greeting = tag`Hello, ${name}! Welcome to the platform.`;


//15
//Formatting
// Create a tag function that formats the string to uppercase
function uppercaseTag(strings, ...expressions) {
    // Combine the static strings and expressions, then convert the result to uppercase
    let result = strings.reduce((acc, curr, index) => {
        return acc + curr + (expressions[index] || '');
    }, '');
    
    return result.toUpperCase();  // Return the uppercase formatted string
}

// Use the tag function with a template literal
let name1 = "John";
let greeting1 = uppercaseTag`Hello, ${name}! Welcome to the platform.`;

// Log the result to the console
console.log(greeting);

//16
//Conditional Logic
// Create a variable for the current hour (0 to 23)
let currentHour = new Date().getHours();

// Use a template literal to display a different message based on the time of day
let message = `Good ${currentHour < 12 ? 'Morning' : 'Afternoon'}, it's ${currentHour} o'clock!`;

// Log the message to the console
console.log(message);


//17
//Loops within Template Literals
// Create an array of items (e.g., a shopping list)
let shoppingList = ["Apples", "Bananas", "Oranges", "Milk", "Bread"];

// Use a template literal with a loop to generate an HTML list
let htmlList = `
<ul>
  ${shoppingList.map(item => `<li>${item}</li>`).join('')}
</ul>
`;

// Log the generated HTML list to the console
console.log(htmlList);


//18
//Escaping Backticks
// Create a string that includes a backtick character using a template literal
let stringWithBacktick = `This is a string with a backtick: \` inside it.`;

// Log the string to the console
console.log(stringWithBacktick);


//19
//Nested Template Literals
// Create a nested template literal for a table with rows and cells
let table = `
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  ${['Alice', 'Bob', 'Charlie'].map(name => `
  <tr>
    <td>${name}</td>
    <td>${Math.floor(Math.random() * 50) + 20}</td> <!-- Random Age -->
  </tr>`).join('')}
</table>
`;

// Log the result to the console
console.log(table);


//20
//Simple Condition
// Create a variable age
let age = 20;

// Use the ternary operator to assign a value to canVote based on age
let canVote = (age >= 18) ? "Yes" : "No";

// Log canVote to the console
console.log(canVote);


//21
//Even or Odd
// Create a variable number
let number = 7;  // You can change this value to test different numbers

// Use the ternary operator to assign a value to evenOrOdd based on whether the number is even or odd
let evenOrOdd = (number % 2 === 0) ? "Even" : "Odd";

// Log evenOrOdd to the console
console.log(evenOrOdd);


//22
//Grade Evaluation
// Create a variable score
let score = 85;  // You can change this value to test different scores

// Use the ternary operator to assign a grade based on the score
let grade = (score >= 90) ? "A" :
           (score >= 80) ? "B" :
           (score >= 70) ? "C" :
           (score >= 60) ? "D" : "F";

// Log grade to the console
console.log(grade);


//23
//Login Status
// Create a variable isLoggedIn
let isLoggedIn = true;  // Change this value to test different login statuses

// Use the ternary operator with logical operators to assign a value to statusMessage
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

// Log statusMessage to the console
console.log(statusMessage);


//24
//Discount Eligibility
// Create variables isMember and purchaseAmount
let isMember = true;  // Change this to true or false to test
let purchaseAmount = 150;  // Change this value to test different amounts

// Use the ternary operator with logical operators to assign a discount
let discount = (isMember && purchaseAmount > 100) ? (purchaseAmount * 0.10) : 0;

// Log discount to the console
console.log(discount);


//25
//Determine Max Value
// Create a function maxValue that returns the larger of two numbers
function maxValue(a, b) {
    return (a > b) ? a : b;  // Use the ternary operator to compare and return the larger value
  }
  
  // Call the function with two numbers and log the result
  let result2 = maxValue(10, 20);
  console.log(result2);  // This will log the larger number, which is 20
  
//26
//Greeting Message
// Create a function greet that returns a greeting message
function greet(name = "") {
    // Use the ternary operator to check if name is provided or not
    return (name.trim() === "") ? "Hello, guest!" : `Hello, ${name}!`;
  }
  
  // Call the function with a name and log the result
  console.log(greet("Alice"));  // Output: Hello, Alice!
  
  // Call the function without a name and log the result
  console.log(greet());  // Output: Hello, guest!

  
//27
//Mapping Values
// Step 1: Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6];

// Step 2: Use the map method with a ternary operator
const transformedNumbers = numbers.map(num => (num % 2 === 0 ? num * 2 : num * 3));

// Step 3: Log the new array to the console
console.log("Transformed Array:", transformedNumbers);


//28
//Filtering Values
// Step 1: Create an array of strings
const strings = ["cat", "house", "sun", "breeze", "dog"];

// Step 2: Use the filter method with a ternary operator
const filteredStrings = strings.filter(str => (str.length > 3 ? true : false));

// Step 3: Log the new array to the console
console.log("Filtered Array:", filteredStrings);

//29
//Copying an Array
// Step 1: Create an array originalArray with some elements
const originalArray = [1, 2, 3, 4, 5];

// Step 2: Use the spread operator to create a copy
const copiedArray = [...originalArray];

// Step 3: Log both arrays to verify the content
console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);

// Step 4: Verify they are not the same reference
console.log("Are they the same reference?", originalArray === copiedArray);

//30
//Merging Arrays
// Step 1: Create two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Step 2: Use the spread operator to merge the arrays
const mergedArray = [...array1, ...array2];

// Step 3: Log the merged array to the console
console.log("Merged Array:", mergedArray);

//31
//Adding Elements to an Array
// Step 1: Create an array with some elements
const numbers1 = [2, 3, 4];

// Step 2: Add a new element at the beginning and end using the spread operator
const updatedNumbers = [1, ...numbers, 5];

// Step 3: Log the updated array to the console
console.log("Updated Numbers Array:", updatedNumbers);


//32
//Copying an Object
// Step 1: Create an object with some key-value pairs
const originalObject = { name: "John", age: 30, city: "New York" };

// Step 2: Use the spread operator to create a copy
const copiedObject = { ...originalObject };

// Step 3: Log both objects to verify the content
console.log("Original Object:", originalObject);
console.log("Copied Object:", copiedObject);

// Step 4: Verify they are not the same reference
console.log("Are they the same reference?", originalObject === copiedObject);


//33
//Merging Objects
// Step 1: Create two objects with some overlapping keys
const object1 = { name: "Alice", age: 25, city: "New York" };
const object2 = { age: 30, city: "Los Angeles", profession: "Engineer" };

// Step 2: Use the spread operator to merge the objects
const mergedObject = { ...object1, ...object2 };

// Step 3: Log the merged object to the console
console.log("Merged Object:", mergedObject);


//34
//Updating Object Properties:
// Step 1: Create an object with properties name, age, and email
const user = { name: "Jane Doe", age: 28, email: "jane.doe@example.com" };

// Step 2: Use the spread operator to update the email and add address
const updatedUser = { ...user, email: "jane.new@example.com", address: "123 Main St" };

// Step 3: Log the updated user object to the console
console.log("Updated User Object:", updatedUser);


//35
//Passing Array Elements as Arguments
// Step 1: Create a function that returns the sum of three numbers
function sum(a, b, c) {
    return a + b + c;
}

// Step 2: Create an array with three elements
const numbers2 = [5, 10, 15];

// Step 3: Use the spread operator to pass array elements as arguments
const result3 = sum(...numbers);

// Step 4: Log the result to the console
console.log("The sum is:", result);


//36
//Combining Multiple Arrays
// Step 1: Create a function to combine multiple arrays
function combineArrays(...arrays) {
    return [].concat(...arrays); // Combine all arrays using the spread operator
}

// Step 2: Call the function with multiple arrays
const array01 = [1, 2, 3];
const array02 = [4, 5, 6];
const array03 = [7, 8, 9];

const combinedArray = combineArrays(array01, array02, array03);

// Step 3: Log the result to the console
console.log("Combined Array:", combinedArray);


//37
// rest-parameter-spread-operator

// Step 1: Create a function to multiply the first argument with all additional arguments
function multiply(first, ...args) {
    return args.map(num => num * first); // Multiply each additional argument by the first argument
}

// Step 2: Call the function with a number and additional arguments
const result4 = multiply(2, 5, 10, 15, 20);

// Step 3: Log the result to the console
console.log("Result:", result);


//38
// spread-nested-arrays

// Step 1: Create a nested array
const nestedArray = [[1, 2], [3, 4], [5, 6]];

// Step 2: Create a shallow copy of the nested array using the spread operator
const copiedArray1 = [...nestedArray];

// Step 3: Modify the inner arrays in the copied array
copiedArray[0][0] = 10;
copiedArray[1][1] = 20;

// Step 4: Log both arrays to observe the effect of shallow copying
console.log("Original Array:", nestedArray);
console.log("Copied Array:", copiedArray);


//39
// sum-function.js

// Step 1: Create a sum function using the rest operator to accept any number of arguments
function sum(...args) {
    // Step 2: Return the sum of all arguments using reduce
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Step 3: Call the function with different numbers of arguments
console.log("Sum of 1, 2, 3:", sum(1, 2, 3));  // Output: 6
console.log("Sum of 5, 10, 15:", sum(5, 10, 15));  // Output: 30
console.log("Sum of 10, 20:", sum(10, 20));  // Output: 30
console.log("Sum of 100, 200, 300, 400:", sum(100, 200, 300, 400));  // Output: 1000
console.log("Sum of no arguments:", sum());  // Output: 0


//40
// average-function

// Step 1: Create a function that calculates the average of any number of arguments
function average(...args) {
    // Step 2: Return the average of all arguments
    if (args.length === 0) {
        return 0; // To handle the case when no arguments are passed
    }
    const sum = args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / args.length;
}

// Step 3: Call the function with different numbers of arguments
console.log("Average of 1, 2, 3:", average(1, 2, 3));  // Output: 2
console.log("Average of 5, 10, 15:", average(5, 10, 15));  // Output: 10
console.log("Average of 10, 20:", average(10, 20));  // Output: 15
console.log("Average of 100, 200, 300, 400:", average(100, 200, 300, 400));  // Output: 250
console.log("Average of no arguments:", average());  // Output: 0


//41
// first-and-rest

// Step 1: Create an array with at least 5 elements
const numbers3 = [10, 20, 30, 40, 50, 60];

// Step 2: Use array destructuring with the rest operator
const [first, ...rest] = numbers;

// Step 3: Log the first element and the remaining elements to the console
console.log("First element:", first);  // Output: 10
console.log("Remaining elements:", rest);  // Output: [20, 30, 40, 50, 60]


//42
// skip-and-rest

// Step 1: Create an array with at least 5 elements
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

// Step 2: Use array destructuring to skip the first two elements
const [, , ...remainingColors] = colors;

// Step 3: Log the remaining colors to the console
console.log("Remaining colors:", remainingColors);  // Output: ['green', 'yellow', 'purple', 'orange']


//43
// basic-destructuring

// Step 1: Create an object with properties name, age, email, and address
const person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: '123 Main St, Springfield'
};

// Step 2: Use object destructuring with the rest operator
const { name2, email, ...rest1 } = person;

// Step 3: Log the variables to the console
console.log("Name:", name1);  // Output: John Doe
console.log("Email:", email);  // Output: john.doe@example.com
console.log("Rest:", rest1);  // Output: { age: 30, address: '123 Main St, Springfield' }


//44
// nested-destructuring.js

// Step 1: Create an object with properties id, name, grades, and info
const student = {
    id: 1,
    name: 'Jane Doe',
    grades: [90, 85, 88],
    info: {
        age: 22,
        major: 'Computer Science'
    }
};

// Step 2: Use nested destructuring with the rest operator
const { id, name3, info: { major }, ...rest2 } = student;

// Step 3: Log the variables to the console
console.log("ID:", id);  // Output: 1
console.log("Name:", name3);  // Output: Jane Doe
console.log("Major:", major);  // Output: Computer Science
console.log("Rest:", rest2);  // Output: { grades: [ 90, 85, 88 ], info: { age: 22, major: 'Computer Science' } }


//45
// filter-even

// Step 1: Create a function that filters even numbers using the rest operator
function filterEven(...args) {
    // Step 2: Return an array of only even numbers
    return args.filter(num => num % 2 === 0);
}

// Step 3: Call the function with different numbers of arguments
console.log("Even numbers from (1, 2, 3, 4, 5, 6):", filterEven(1, 2, 3, 4, 5, 6));  // Output: [2, 4, 6]
console.log("Even numbers from (10, 15, 20, 25, 30):", filterEven(10, 15, 20, 25, 30));  // Output: [10, 20, 30]
console.log("Even numbers from (7, 9, 11, 13, 17):", filterEven(7, 9, 11, 13, 17));  // Output: []
console.log("Even numbers from (8, 12, 14, 17):", filterEven(8, 12, 14, 17));  // Output: [8, 12, 14]

//46
// combine-and-sort

// Step 1: Create a function that combines and sorts multiple arrays
function combineAndSort(...arrays) {
    // Step 2: Combine all arrays using the spread operator and sort the result
    const combinedArray = [].concat(...arrays);  // Combine all arrays
    return combinedArray.sort((a, b) => a - b);  // Sort in ascending order
}

// Step 3: Call the function with different arrays and log the results
console.log("Sorted combined array:", combineAndSort([5, 2, 8], [1, 3, 7], [4, 6]));  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log("Sorted combined array:", combineAndSort([10, 5], [20, 15], [30, 25]));  // Output: [5, 10, 15, 20, 25, 30]
console.log("Sorted combined array:", combineAndSort([3, 1], [9, 4], [2, 8, 7]));  // Output: [1, 2, 3, 4, 7, 8, 9]


//47
// basic-destructuring.js

// Step 1: Create an array with the elements "apple", "banana", and "cherry"
const fruits = ["apple", "banana", "cherry"];

// Step 2: Use destructuring to assign the elements to individual variables
const [firstFruit, secondFruit, thirdFruit] = fruits;

// Step 3: Log the variables to the console
console.log("First Fruit:", firstFruit);  // Output: apple
console.log("Second Fruit:", secondFruit);  // Output: banana
console.log("Third Fruit:", thirdFruit);  // Output: cherry


//48
// skipping-elements.js

// Step 1: Create an array with the elements "red", "green", "blue", "yellow"
const colors1 = ["red", "green", "blue", "yellow"];

// Step 2: Use destructuring to assign the first and third elements
const [primaryColor, , tertiaryColor] = colors1; // Skip the second element using an empty comma

// Step 3: Log the variables to the console
console.log("Primary Color:", primaryColor);  // Output: red
console.log("Tertiary Color:", tertiaryColor);  // Output: blue


//49
// rest-operator.js

// Step 1: Create an array with the elements 1 through 5
const numbers4 = [1, 2, 3, 4, 5];

// Step 2: Use destructuring with the rest operator to assign values
const [firstNumber, ...remainingNumbers] = numbers4; // firstNumber gets 1, remainingNumbers gets [2, 3, 4, 5]

// Step 3: Log the variables to the console
console.log("First Number:", firstNumber);  // Output: 1
console.log("Remaining Numbers:", remainingNumbers);  // Output: [2, 3, 4, 5]


//50
// basic-destructuring.js

// Step 1: Create an object with properties name, age, and city
const person1 = {
    name: "John",
    age: 30,
    city: "New York"
};

// Step 2: Use destructuring to assign the properties to variables
const { name4, age1, city } = person1;

// Step 3: Log the variables to the console
console.log("Name:", name4);  // Output: John
console.log("Age:", age1);    // Output: 30
console.log("City:", city);  // Output: New York


//51
// renaming-variables

// Step 1: Create an object with properties make, model, and year
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

// Step 2: Use destructuring to assign the properties to variables with renaming
const { make: carMake, model: carModel, year: carYear } = car;

// Step 3: Log the variables to the console
console.log("Car Make:", carMake);  // Output: Toyota
console.log("Car Model:", carModel);  // Output: Corolla
console.log("Car Year:", carYear);  // Output: 2021


//52
// default-values.js

// Step 1: Create an object with properties theme and language
const settings = {
    theme: "dark",
    // language: "Spanish" // Uncomment this line to test with a specific language
};

// Step 2: Use destructuring to assign the properties to variables with a default value for language
const { theme, language = "English" } = settings;

// Step 3: Log the variables to the console
console.log("Theme:", theme);  // Output: dark
console.log("Language:", language);  // Output: Spanish (if language is provided), English (if language is not provided)


//53
// array-of-arrays.js

// Step 1: Create an array with the elements [1, 2], [3, 4], and [5, 6]
const nestedArray1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// Step 2: Use nested destructuring to assign the first elements to variables a, b, and c
const [[a], [b], [c]] = nestedArray1;

// Step 3: Log the variables to the console
console.log("a:", a);  // Output: 1
console.log("b:", b);  // Output: 3
console.log("c:", c);  // Output: 5

//54
// object-within-object.js

// Step 1: Create an object with properties username and details (which is another object)
const profile = {
    username: "john_doe",
    details: {
        email: "john.doe@example.com",
        address: "123 Main St, Springfield, IL"
    }
};

// Step 2: Use nested destructuring to assign username, email, and address to variables
const { username, details: { email1, address1 } } = profile;

// Step 3: Log the variables to the console
console.log("Username:", username);  // Output: john_doe
console.log("Email:", email1);        // Output: john.doe@example.com
console.log("Address:", address1);    // Output: 123 Main St, Springfield, IL


//55
// mix-of-arrays-and-objects.js

// Step 1: Create an object with properties id and info (which is an array of objects)
const data = {
    id: 1,
    info: [
        { name: "Alice" },
        { age: 25 }
    ]
};

// Step 2: Use nested destructuring to assign id, name, and age to variables
const { id1, info: [{ name5 }, { age2 }] } = data;

// Step 3: Log the variables to the console
console.log("ID:", id1);      // Output: 1
console.log("Name:", name5);  // Output: Alice
console.log("Age:", age2);    // Output: 25


//56
// array-parameters.js

// Step 1: Create a function that takes an array [x, y] as a parameter
function printCoordinates([x, y]) {
    // Step 2: Destructure the array to extract x and y
    console.log(`x: ${x}, y: ${y}`);
}

// Step 3: Call the function with different coordinates
printCoordinates([10, 20]);  // Output: x: 10, y: 20
printCoordinates([30, 40]);  // Output: x: 30, y: 40
printCoordinates([50, 60]);  // Output: x: 50, y: 60


//57
// object-parameters.js

// Step 1: Create a function that takes an object {name, age} as a parameter
function displayUser({ name, age }) {
    // Step 2: Destructure the object to extract name and age
    console.log(`Name: ${name}, Age: ${age}`);
}

// Step 3: Call the function with different user objects
displayUser({ name: "Alice", age: 30 });  // Output: Name: Alice, Age: 30
displayUser({ name: "Bob", age: 25 });    // Output: Name: Bob, Age: 25
displayUser({ name: "Charlie", age: 35 }); // Output: Name: Charlie, Age: 35


//58
// list-property-names.js

// Step 1: Create an object with properties title, author, and year
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

// Step 2: Use Object.keys() to get an array of property names of the book object
const propertyNames = Object.keys(book);

// Step 3: Log the array to the console
console.log(propertyNames);  // Output: [ 'title', 'author', 'year' ]


//59
// count-properties.js

// Step 1: Create an object with properties name, age, grade, and school
const student1 = {
    name: "John Doe",
    age: 18,
    grade: "A",
    school: "Springfield High"
};

// Step 2: Use Object.keys() to get an array of the property names of the student object
const propertyNames1 = Object.keys(student1);

// Step 3: Determine the number of properties by getting the length of the array
const numberOfProperties = propertyNames1.length;

// Step 4: Log the number of properties to the console
console.log(numberOfProperties);  // Output: 4


//60
// iterate-over-keys.js

// Step 1: Create an object with properties name, price, and category
const product = {
    name: "Laptop",
    price: 1200,
    category: "Electronics"
};

// Step 2: Use Object.keys() to get an array of the property names of the product object
const propertyNames2 = Object.keys(product);

// Step 3: Iterate over the array of keys and log each property name and its value
propertyNames2.forEach(key => {
    console.log(`${key}: ${product[key]}`);
});

//61
// list-property-values.js

// Step 1: Create an object with properties title, director, year, and genre
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Science Fiction"
};

// Step 2: Use Object.values() to get an array of the property values of the movie object
const propertyValues = Object.values(movie);

// Step 3: Log the array of property values to the console
console.log(propertyValues);  // Output: [ 'Inception', 'Christopher Nolan', 2010, 'Science Fiction' ]


//62
// sum-values.js

// Step 1: Create an object with properties math, science, and english
const scores = {
    math: 85,
    science: 90,
    english: 88
};

// Step 2: Use Object.values() to get an array of the property values of the scores object
const scoreValues = Object.values(scores);

// Step 3: Calculate the sum of the values using reduce()
const totalSum = scoreValues.reduce((acc, curr) => acc + curr, 0);

// Step 4: Log the sum to the console
console.log(totalSum);  // Output: 263


//63
// iterate-over-values.js

// Step 1: Create an object with properties username, email, and location
const user1 = {
    username: "johndoe123",
    email: "johndoe@example.com",
    location: "New York"
};

// Step 2: Use Object.values() to get an array of the property values of the user object
const propertyValues1 = Object.values(user1);

// Step 3: Iterate over the array of values and log each value
propertyValues1.forEach(value => {
    console.log(value);
});


//64
// list-entries.js

// Step 1: Create an object with properties make, model, and year
const car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// Step 2: Use Object.entries() to get an array of key-value pairs from the car object
const entries = Object.entries(car1);

// Step 3: Log the array of key-value pairs to the console
console.log(entries);


//65
// convert-object-to-array.js

// Step 1: Create an object with properties firstName, lastName, and age
const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Step 2: Use Object.entries() to convert the person object into an array of key-value pairs
const entries1 = Object.entries(person2);

// Step 3: Log the array to the console
console.log(entries1);


//66
// iterate-over-entries.js

// Step 1: Create an object with properties theme, notifications, and privacy
const settings1 = {
    theme: "dark",
    notifications: "enabled",
    privacy: "high"
};

// Step 2: Use Object.entries() to get an array of key-value pairs from the settings object
const entries2 = Object.entries(settings1);

// Step 3: Iterate over the array of entries and log each key and value
entries2.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


//67
// filter-keys.js

// Step 1: Create an object with properties apples, bananas, oranges, and grapes
const inventory = {
    apples: 15,
    bananas: 5,
    oranges: 20,
    grapes: 8
};

// Step 2: Use Object.keys() and filter() to get an array of keys where the value is greater than 10
const filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);

// Step 3: Log the array of keys to the console
console.log(filteredKeys);


//68
// transform-values.js

// Step 1: Create an object with properties morning, afternoon, and evening
const temperatures = {
    morning: 15,    // in Celsius
    afternoon: 25,  // in Celsius
    evening: 20     // in Celsius
};

// Step 2: Use Object.entries() to get an array of key-value pairs
const tempEntries = Object.entries(temperatures);

// Step 3: Use map() to convert temperatures from Celsius to Fahrenheit
const fahrenheitEntries = tempEntries.map(([time, celsius]) => {
    const fahrenheit = (celsius * 9/5) + 32; // Conversion formula
    return [time, fahrenheit];
});

// Step 4: Convert the transformed array back to an object using Object.fromEntries()
const fahrenheitTemperatures = Object.fromEntries(fahrenheitEntries);

// Step 5: Log the new object to the console
console.log(fahrenheitTemperatures);


//69
// key-value-swap.js

// Step 1: Create an object with properties admin, editor, and viewer
const roles = {
    admin: "Administrator",
    editor: "Content Editor",
    viewer: "Viewer"
};

// Step 2: Use Object.entries() to get an array of key-value pairs
const roleEntries = Object.entries(roles);

// Step 3: Use map() to swap the keys and values
const swappedEntries = roleEntries.map(([key, value]) => [value, key]);

// Step 4: Convert the transformed array back to an object using Object.fromEntries()
const swappedRoles = Object.fromEntries(swappedEntries);

// Step 5: Log the new object to the console
console.log(swappedRoles);


//70
// filter-and-map.js

// Step 1: Create an array of numbers from 1 to 10
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 2: Write a higher-order function filterAndMap
function filterAndMap(array, filterFn, mapFn) {
    return array.filter(filterFn).map(mapFn);
}

// Step 3: Use the function to filter out even numbers and then square the remaining numbers
const result5 = filterAndMap(numbers5, number => number % 2 !== 0, number => number * number);

// Step 4: Log the resulting array to the console
console.log(result5);


//71
// sort-and-reduce.js

// Step 1: Create an array with words
const words = ["apple", "banana", "cherry", "date"];

// Step 2: Write the higher-order function sortAndReduce
function sortAndReduce(array, sortFn, reduceFn) {
    return array.sort(sortFn).reduce(reduceFn);
}

// Step 3: Use the sortAndReduce function to sort the words alphabetically and concatenate them
const result6 = sortAndReduce(words, (a, b) => a.localeCompare(b), (acc, word) => acc + word);

// Step 4: Log the resulting string to the console
console.log(result6);


//72
// simple-callback.js

// Step 1: Define the greet function that takes a name and a callback
function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);  // Calling the callback function with the greeting message
}

// Step 2: Define the callback function that logs the greeting message
function printGreeting(message) {
    console.log(message);  // Logs the message to the console
}

// Step 3: Call the greet function with a name and the printGreeting callback
greet("Alice", printGreeting);


//73
// asynchronous-callback.js

// Step 1: Define the fetchData function that simulates fetching data
function fetchData(callback) {
    // Simulate a delay of 2 seconds using setTimeout
    setTimeout(() => {
        const data = { name: "Alice", age: 25 };  // Simulated data
        callback(data);  // Call the callback with the fetched data
    }, 2000);
}

// Step 2: Define the callback function that logs the fetched data
function displayData(data) {
    console.log("Data fetched:", data);  // Log the fetched data
}

// Step 3: Call the fetchData function with the displayData callback
fetchData(displayData);


//74
// simple-arrow-function.js

// Convert the function to an arrow function
const add = (a, b) => a + b;

// Call the arrow function with arguments 3 and 5, and log the result
console.log(add(3, 5));  // Output: 8


//75
// arrow-function-with-array-methods.js

// Create an array with values from 1 to 5
const numbers6 = [1, 2, 3, 4, 5];

// Use the map method with an arrow function to square each number
const squaredNumbers = numbers6.map(num => num * num);

// Log the resulting array to the console
console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]


//76
// variable-scope.js

// Step 1: Define the outer function
function outer() {
    const x = 10;  // Declare a variable x in the outer function
    
    // Step 2: Define the inner function inside outer
    function inner() {
        console.log(x);  // Log the value of x
    }
    
    // Step 3: Call the inner function from within outer
    inner();
}

// Step 4: Call the outer function to see the result
outer();  // Output: 10


//77// closure.js

// Step 1: Define the createCounter function
function createCounter() {
    let counter = 0;  // Declare a counter variable

    // Step 2: Return a function that increments and logs the counter
    return function() {
        counter++;
        console.log(counter);
    };
}

// Step 3: Create two independent counters
const counter1 = createCounter();
const counter2 = createCounter();

// Step 4: Demonstrate independent state by calling both counters
counter1();  // Output: 1
counter1();  // Output: 2

counter2();  // Output: 1
counter2();  // Output: 2
counter2();  // Output: 3


//78
// simple-default-parameters.js

// Step 1: Define the greet function with default parameter for greetingMessage
function greet(name, greetingMessage = "Hello") {
    console.log(greetingMessage, name);  // Log the greeting message and name
}

// Step 2: Call the function with both cases (with and without a greeting message)

// Case 1: Without the greeting message (uses default "Hello")
greet("Alice");  // Output: Hello Alice

// Case 2: With a custom greeting message
greet("Bob", "Good morning");  // Output: Good morning Bob


//79
// default-parameters-other-arguments.js

// Step 1: Define the calculateArea function with default parameters for width and height
function calculateArea(width = 10, height = 5) {
    return width * height;  // Return the calculated area
}

// Step 2: Call the function with both cases (with and without arguments)

// Case 1: Without arguments (uses default values of width 10 and height 5)
const area1 = calculateArea();  
console.log("Area 1:", area1);  // Output: Area 1: 50

// Case 2: With custom arguments for width and height
const area2 = calculateArea(15, 7);
console.log("Area 2:", area2);  // Output: Area 2: 105


//80
// square-numbers.js

// Step 1: Create the array numbers
const numbers7 = [1, 2, 3, 4, 5];

// Step 2: Use map to square each number
const squaredNumbers2 = numbers7.map(number => number * number);

// Step 3: Log the resulting array
console.log(squaredNumbers2);  // Output: [1, 4, 9, 16, 25]


//81
// convert-to-uppercase.js

// Step 1: Create the array words
const words1 = ["apple", "banana", "cherry"];

// Step 2: Use map to convert each word to uppercase
const uppercaseWords = words1.map(word => word.toUpperCase());

// Step 3: Log the resulting array
console.log(uppercaseWords);  // Output: ["APPLE", "BANANA", "CHERRY"]


//82
// filter-even-numbers.js

// Step 1: Create the array numbers
const numbers8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 2: Use filter to create an array of even numbers
const evenNumbers = numbers8.filter(number => number % 2 === 0);

// Step 3: Log the resulting array
console.log(evenNumbers);  // Output: [2, 4, 6, 8, 10]


//83
// filter-long-words.js

// Step 1: Create the array words
const words2 = ["apple", "banana", "cherry", "date"];

// Step 2: Use filter to create an array of words with more than 5 characters
const longWords = words2.filter(word => word.length > 5);

// Step 3: Log the resulting array
console.log(longWords);  // Output: ["banana", "cherry"]


//84
// log-numbers.js

// Step 1: Create the array numbers
const numbers9 = [1, 2, 3, 4, 5];

// Step 2: Use forEach to log each number to the console
numbers9.forEach(number => {
  console.log(number);
});


//85
// log-word-lengths.js

// Step 1: Create the array words
const words3 = ["apple", "banana", "cherry"];

// Step 2: Use forEach to log the length of each word to the console
words3.forEach(word => {
  console.log(word.length);
});


//86
// sum-of-numbers.js

// Step 1: Create the array numbers
const numbers10 = [1, 2, 3, 4, 5];

// Step 2: Use reduce to calculate the sum of the numbers
const sum1 = numbers10.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Initial value of accumulator is 0

// Step 3: Log the result to the console
console.log(sum1);


//87
// concatenate-strings.js

// Step 1: Create the array words
const words4 = ["Hello", "world", "this", "is", "JavaScript"];

// Step 2: Use reduce to concatenate the words into a single string
const sentence = words4.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
});

// Step 3: Log the result to the console
console.log(sentence);


//88
// check-even-number.js

// Step 1: Create the array numbers
const numbers11 = [1, 3, 5, 7, 8];

// Step 2: Use some to check if there's at least one even number
const hasEvenNumber = numbers11.some(num => num % 2 === 0);

// Step 3: Log the result to the console
console.log(hasEvenNumber);


//89
// check-long-word.js

// Step 1: Create the array words
const words5 = ["apple", "banana", "cherry", "date"];

// Step 2: Use some to check if there's at least one word with more than 5 characters
const hasLongWord = words5.some(word => word.length > 5);

// Step 3: Log the result to the console
console.log(hasLongWord);


//90
// check-all-even-numbers.js

// Step 1: Create the array numbers
const numbers12 = [2, 4, 6, 8, 10];

// Step 2: Use every to check if all numbers are even
const allEven = numbers12.every(number => number % 2 === 0);

// Step 3: Log the result to the console
console.log(allEven);


//91
// check-all-long-words.js

// Step 1: Create the array words
const words6 = ["elephant", "giraffe", "hippopotamus"];

// Step 2: Use every to check if all words have more than 5 characters
const allLongWords = words6.every(word => word.length > 5);

// Step 3: Log the result to the console
console.log(allLongWords);


//92
// find-first-even-number.js

// Step 1: Create the array numbers
const numbers13 = [1, 3, 5, 7, 8];

// Step 2: Use find to get the first even number in the array
const firstEvenNumber = numbers13.find(number => number % 2 === 0);

// Step 3: Log the result to the console
console.log(firstEvenNumber);


//93
// find-long-word.js

// Step 1: Create the array words
const words7 = ["apple", "banana", "cherry", "date"];

// Step 2: Use find to get the first word with more than 5 characters
const longWord = words7.find(word => word.length > 5);

// Step 3: Log the result to the console
console.log(longWord);


//94
// find-index-of-first-even.js

// Step 1: Create the array numbers
const numbers14 = [1, 3, 5, 7, 8];

// Step 2: Use findIndex to get the index of the first even number
const index = numbers14.findIndex(num => num % 2 === 0);

// Step 3: Log the result to the console
console.log(index);


//95
// find-index-of-long-word.js

// Step 1: Create the array words
const words8 = ["apple", "banana", "cherry", "date"];

// Step 2: Use findIndex to get the index of the first word with more than 5 characters
const index1 = words8.findIndex(word => word.length > 5);

// Step 3: Log the result to the console
console.log(index1);


//96
// simple-promise.js

// Step 1: Write the delay function that returns a promise
function delay(ms) {
    return new Promise(resolve => {
    setTimeout(resolve, ms);  // Resolves after the given delay
    });
}
  
  // Step 2: Use the delay function to log "Hello, world!" after 2 seconds
delay(2000).then(() => {
    console.log("Hello, world!");  // This will log after 2 seconds
});

  
//97
// promise-chain.js

// Step 1: Write the fetchData function that returns a promise
function fetchData() {
    return new Promise(resolve => {
    // Simulating fetching data, resolved with a simple object after 1 second
    setTimeout(() => {
    resolve({ name: "Alice", age: 25 });
    }, 1000);  // Resolves after 1 second
    });
}
  
// Step 2: Chain a .then() to log the data to the console
  fetchData()
    .then(data => {
    console.log("Fetched data:", data);  // Logs the data after it's resolved
})
    .catch(error => {
    console.error("Error:", error);  // Handles any errors (if any)
});

    
//98
// error-handling.js

// Step 1: Write the fetchUserData function that returns a promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
// Simulating fetching user data (you can modify this to test both cases)
const userData = { name: "Alice" };  // Missing 'age' property for testing error
  
// Step 2: Check if 'age' property exists in userData
    if (userData.age) {
    resolve(userData);  // Resolve with the user data if age exists
    } else {
    reject("Error: Missing 'age' property in user data");  // Reject with an error message
    }
    });
}
  
// Step 3: Handle the error using .catch() method
fetchUserData()
    .then(userData => {
    console.log("User data fetched:", userData);  // Logs user data if resolved
})
    .catch(error => {
    console.error(error);  // Logs error message if rejected
});


//99
// simulate-network-request.js

// Step 1: Create the getWeather function that simulates a network request
function getWeather() {
    return new Promise((resolve, reject) => {
// Simulate a network delay of 1 second
    setTimeout(() => {
// Simulate successful weather data response
const weatherData = { temperature: 22, condition: "Sunny" };
  
// Simulate a scenario where the network request may fail (you can toggle this)
const isError = false; // Set to `true` to simulate an error
  
    if (isError) {
// Step 2: Reject the promise with an error message if there's an error
    reject("Failed to fetch weather data. Please try again later.");
    } else {
// Step 3: Resolve the promise with weather data if the request is successful
    resolve(weatherData);
    }
    }, 1000);  // Simulate a delay of 1 second
    });
}
  
// Step 4: Use .then() to handle success and .catch() to handle errors
getWeather()
    .then(weatherData => {
    console.log("Weather Data:", weatherData);  // Log the weather data if resolved
})
    .catch(error => {
    console.error("Error:", error);  // Log the error message if rejected
});


//100
//Simple async Function
// delay function that returns a promise which resolves after a given number of milliseconds
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
// async function sayHello
async function sayHello() {
// Using await to wait for the delay function to resolve after 2 seconds
await delay(2000); // Wait for 2 seconds (2000 milliseconds)
    
// Log the message after the delay
console.log("Hello, world!");
}
  
// Call the async function
sayHello();


//101
//Fetch Data with async/await
// fetchUserData function that returns a promise resolving with user data
function fetchUserData() {
    return new Promise((resolve, reject) => {
const userData = { name: "Alice", age: 25 }; // Example user data
// Simulating the possibility of missing age
    if (!userData.age) {
    reject("User data is missing an age property.");
    } else {
    resolve(userData);
    }
    });
}
  
// Async function to fetch user data with error handling
async function getUserData() {
    try {
    const data = await fetchUserData(); // Await the fetchUserData promise
    console.log("User Data:", data); // Log the user data if resolved
    } catch (error) {
    console.log("Error:", error); // Log the error if promise is rejected
    }
}
  
// Call the getUserData function
getUserData();



//102
// Simulate fetching user data
function fetchUser() {
    return new Promise((resolve) => {
const user = { name: "John Doe", age: 30 };
    resolve(user); // Resolves with user data
    });
}
// Simulate fetching posts for a given user
function fetchPosts(user) {
    return new Promise((resolve) => {
const posts = [
    { title: "Post 1", content: "This is the first post." },
    { title: "Post 2", content: "This is the second post." },
    ];
    resolve(posts); // Resolves with an array of posts
    });
}
  
// Async function to get both user data and their posts
async function getUserAndPosts() {
    try {
    const user = await fetchUser(); // Wait for user data
    console.log("User Data:", user); // Log the user data
  
const posts = await fetchPosts(user); // Wait for posts associated with the user
    console.log("User's Posts:", posts); // Log the posts
    } catch (error) {
    console.log("Error:", error); // Catch and log any errors
    }
}
  
// Call the function
getUserAndPosts();


//103
// Simulate fetching user data with error handling
function fetchUser() {
    return new Promise((resolve, reject) => {
const user = null; // Simulating no user found (set to null to reject the promise)
  
    if (user) {
    resolve(user); // Resolves with user data if user exists
    } else {
    reject(new Error("User data not found!")); // Rejects with an error if user data is not found
    }
    });
}
  
// Async function to get user info and handle errors
async function getUserInfo() {
    try {
    const user = await fetchUser(); // Wait for user data (will throw an error if not found)
console.log("User Data:", user); // Log user data if found
    } catch (error) {
console.log("Error:", error.message); // Catch and log any errors (e.g., user not found)
    }
}
  
// Call the function
getUserInfo();



//104
// Function to simulate an API call
function apiCall() {
    return new Promise((resolve, reject) => {
const delay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1 and 3 seconds
    setTimeout(() => {
const success = Math.random() > 0.2; // 80% chance of success, 20% chance of failure
  
    if (success) {
    resolve(`Data fetched successfully after ${delay}ms`); // Resolve with data if successful
    } else {
    reject(new Error('Failed to fetch data')); // Reject with an error if failed
    }
    }, delay);
    });
}
  
// Async function to get data from the API three times in sequence
async function getData() {
    try {
const result1 = await apiCall(); // First API call
console.log(result1);
  
const result2 = await apiCall(); // Second API call
console.log(result2);
  
const result3 = await apiCall(); // Third API call
console.log(result3);
    } catch (error) {
console.log("Error:", error.message); // Catch and log any errors that occur
    }
}
  
// Call the function
getData();
