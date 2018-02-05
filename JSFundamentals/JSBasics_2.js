// ********* Basic II ********* //

function magic_multiply(x, y){
    // Multiply Test 2
    if(x === 0 && y === 0){
        return "All inputs 0";
    }
    // Multiply Test 3
    if(x.constructor === Array){
        for(let i = 0; i<x.length; i++){
            x[i] = x[i] * y
        }
        return x;
    }
    // Multiply Test 4
    if(y.constructor === String){
        return "Error: Can not multiply by string";
    }
    // Multiply Test 5
    if(x.constructor === String){
        let new_string = "";
        for(let i = 0; i<y; i++){
            new_string += x;
        }
        return new_string;
    }
    // Multiply Test 1
    return x * y;
}
let test1 = magic_multiply(5, 2);
let test2 = magic_multiply(0, 0);
let test3 = magic_multiply([1, 2, 3], 2);
let test4 = magic_multiply(7, "three");
let test5 = magic_multiply("Brendo", 4);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);


// The following changes the function according to the parameters given //

// // Multiply Test 1
// function magic_multiply(x, y){
//     return x*y;
// }

// let test1 = magic_multiply(5, 2);
// console.log(test1);

// // Multiply Test 2
// function magic_multiply(x, y){
//     return x*y;
// }

// let test2 = magic_multiply(0, 0);
// console.log(test2);

// // Multiply Test 3

// function magic_multiply(arr, num){
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]*num);
//     }
// }

// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);

// // Multiply Test 4

// function magic_multiply(x, string){
//     return x*y;
// }

// let test4 = magic_multiply(7, "three");
// console.log(test4);


// // Multiply Test 5
// function magic_multiply(str, x){
//     let string = str.repeat(x);
//     return string;
// }

// let test5 = magic_multiply("Brendo", 4);
// console.log(test5);

