// ********* Math ********* //


// Math 1
function zero_negativity(arr){
    for(i in arr){
        if(arr[i]<0){
            return false;
        }
    }
    return true;
}

var x = [7,6,5,4,3];
var y = [2,1,0,-1,-2];

console.log(zero_negativity(x));
console.log(zero_negativity(y));

// Math 2
function is_even(num){
    if (num % 2 == 0){
        return true;
    }
    return false;
}

var even = 4;
var odd = 5;

console.log(is_even(even));
console.log(is_even(odd));

// Math 3
function how_many_even(arr){
    var count = 0;
    for(i=0; i<arr.length;i++){
        if(is_even(arr[i])) count++;
    }
    return count;
}

var xy = [2,3,4,5,8];
console.log(xy);
console.log(how_many_even(xy));

// Math 4
function create_dummy_array(n){
    arr = [];
    for(i=0; i<n; i++){
        arr.push(Math.floor(Math.random()*9));
    }
    return arr;
} 

var yz = create_dummy_array(4);
console.log(yz);

// Math 5
function random_choice(arr){
    i = Math.floor(Math.random()*arr.length);
    return arr[i];
}

console.log(random_choice([1,2,3,4,5,6]))