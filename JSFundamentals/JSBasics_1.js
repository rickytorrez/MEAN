// ********* Basic I ********* //

// Create a variable x as an empty array []. Log this array to your console.
var x = [];
console.log(x);

// Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.
var x = [];
x.push('coding', 'dojo', 'rocks');

// Use .pop() to remove the final element of your array.
var x = [];
x.push('coding', 'dojo', 'rocks');
x.pop();

// Log the final value of x, what is it?
var x = [];
x.push('coding', 'dojo', 'rocks');
x.pop();
console.log(x);

// Create a const called y, and store an empty array there. Log this to your console.

const y = [];
console.log(number);

// Use .push() to add the number 88 to array y.
const y = [];
y.push(88);

// What happened?
"It won't let you add a new value"

// Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].
var z = [9, 10, 6, 5, -1, 20, 13, 2];

// Print every element to the console.
var z = [9, 10, 6, 5, -1, 20, 13, 2];
for(let i=0; i<z.length; i++){
    console.log(z[i]);
}

// Now print every element except the final number.
z = [9, 10, 6, 5, -1, 20, 13, 2];
for(let i=0; i<z.length; i++){
    if(z[i] === 2){continue};
    console.log(z[i]);
}

// Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];

// Print the length of all names to the console.
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (var i=0; i<names.length; i++){
    console.log(names[i].length);
}

// Now modify your code so only names with a length of 5 print.
var names = ['kadie', 'joe', 'fritz', 'pierre', 'Alphonso'];
var fiveCount = []
    for (i = 0; i<names.length; i++){
        if (names[i].length == 5){
        fiveCount.push(names[i]);
        }
    }
    console.log(fiveCount);

// Create a function yell that takes one parameter called string.
var yell = "string";

// Make yell return that string in all uppercase.
var yell = "string";
yellLouder = yell.toUpperCase();
console.log(yellLouder);