# Advanced JavaScript Concepts

## Function as Expression
```javascript
var add = function(number1,number2){
    return number1+number2;
}

var result = add(2,3);
console.log(result);
var sum = add;
console.log(sum(3,4));
```
## Hoisting
* Initialize a variable before its declaration is called hoisting.
* Javascript execution is executed by two phases, one is **Memory phase** and other is **code execution**.
* During memory execution, all the variables are stored in memory with undefined and all the functions are stored with function body.
```javascript
console.log(number); //undefined
greet(); //welcome

var number = 2;
function greet(){
    console.log("welcome!");
}

add(2,3);//type error 
//because add is not a function and its variable but pointing to a function so its error

var add = function(a,b){
    console.log(a+b);
}
```
### Problems with 'var'
#### Redeclaration Issue
* Unlike other programming languages, we will be able to **redeclare** the variable with **same name**.
#### Scoping issue
* Variables declared with `var` keyword are **not block scoped** but **function scoped**.
## let and const keyword
* We cannot declare the `let` keyword but we can **reassign** and it is block as well as function scoped.
* `const` keyword we **cannot even reassign** the value and it is also block scoped.
![var,let and const](https://github.com/rkishore1207/JavaScripts/assets/146698138/586c9a99-5f37-4806-945c-70b99d4095a4)
