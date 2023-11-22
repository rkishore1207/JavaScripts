var add = function(number1,number2){
    return number1+number2;
}

var result = add(2,3);
console.log(result);
var sum = add;
console.log(sum(3,4));

//Var keyword scoping issue

var a=40;
if(a==40){ //var keyword are not block scope
    var b=50;
    console.log(b);
}
console.log(b);

//var keyword are function so we could not use the 'c' outside of the print function
function print(){
    var c=80;
    console.log(c);
}

print();
console.log(c);