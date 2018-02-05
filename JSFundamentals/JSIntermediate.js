// JavaScript Intermediate

// Part 1
// Create a function called starString() that takes a number and returns a string of that many *. 

function starString(x){
    var y = "";
    var i = 1;
    while (i<=x){
        y += '*';
        i += 1;
    }
    return y;
}

let stars = starString(8);
console.log(stars);
// console.log(starString(8)); 

// Part 2
// Create a function called drawStars() that takes an array of numbers and prints out *.

function drawStars(arr){
    for(i=0; i<arr.length; i++){
        console.log(starString(arr[i]));
    }
}

let x = [4, 6, 1, 3, 5, 7, 25];
drawStars(x);

// Part 3
// Modify the function above. Allow an array containing integers and strings to be passed to the drawStars() function. When a string is passed, instead of displaying *, display the first letter of the string according to the example below. You may use the .toLowerCase() string method for this part.

function makeStars(arr){
    var numArr = [];
    for (i=0; i<arr.length; i++){
        if(typeof arr[i] === "number"){
            numArr.push(starString(arr[i]))
        } else if (typeof arr[i] === "string"){
            var strArr = [];
            for(let z=0; z<arr[i].length; z++){
                strArr += arr[i][0].toLowerCase();
            }
        numArr.push(strArr);
        }
    }
    return numArr;
}

let v = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
console.log(makeStars(v));