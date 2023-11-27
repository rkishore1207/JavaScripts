// Find
let transactions=[1000,-3000,4000,-200,5000];

function findFunction(){
    const element=transactions.find((item)=>{
        return item<0;
    });
    return element;
}

console.log(findFunction());

// FindIndex
function findIndexFunction(){
    const element=transactions.findIndex((item)=>{
        return item<0;
    });
    return element;
}

console.log(findIndexFunction());

//Some
function someFunction(){
    const value=transactions.some((element)=>{
        return element>0;
    });
    return value;
}

console.log(someFunction());

//Every
function everyFunction(){
    const value=transactions.every((element)=>{
        return element>0;
    });
    return value;
}

console.log(everyFunction());