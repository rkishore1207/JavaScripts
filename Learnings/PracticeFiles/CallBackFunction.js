//Passing function as an argument to other function

function myFunction(number1,evenNumFun,number2){
    if(evenNumFun(number2))
        return number1+number2;
    else
        return number1-number2;
}

const isEven=number=>{
    return number%2==0;
}

console.log(`Result is ${myFunction(34,isEven,21)}`);