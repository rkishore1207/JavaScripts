//Impure Functions

var x = 2;

function addImpure(a){
    console.log(a+x);
    x++;
}

addImpure(3);
addImpure(3);

//Pure Functions
// Function should not return different value while passing the same parameters
//Pure Functions should not contain or dependent of external factors such as global variable and consol.log().

function addPure(a,x){
    return a+x;
}

console.log(addPure(2,3));