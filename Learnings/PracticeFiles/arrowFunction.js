// arrow is called PAT
// for single parameter in arrow function there is no need of parenthesis

let test1=()=>{
    console.log("Kishore");
}

let test2=number=>{
    console.log(number+3);
}

let test3=(number1,number2)=>{
    console.log(number1+number2);
}

test1();
test2(3);
test3(4,5);