function add(number1,number2){
    console.log(number1+number2);
}

function sub(number1,number2){
    console.log(number1-number2);
}

function mul(number1,number2){
    console.log(number1*number2);
}

function div(number1,number2){
    console.log(number1/number2);
}

module.exports={
    addition:add,
    subtraction:sub,
    multiplication:mul,
    division:div
}