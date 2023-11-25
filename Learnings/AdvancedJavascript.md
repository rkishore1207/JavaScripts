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

## Array and Object Destructuring
```javascript
let array=['Hi',"Kishore"];
let[first,second]=array;
```
```javascript
let myObj={
    name:"Kishore",
    age:21,
    number:"8940804555"
    address:{
        state:"Tamil Nadu",
        city:"SivaKasi"
    }
}
// Destructuring variable name same as the object's key names.
let {name:n,age,number,address:{state,city}}=myobj
```
## Modularities
* Wrote functions in one file and exports those functions and consumes that in other files for to modularize our applications.
* That exports statement is like objects and we should give key and value is our current file's function name.
## Imperative and Declarative way of writing code
* Imperative is How to go about a problem and declarative is what do you achieve from the problem.
* To solve a problem in a usual way is **imperative** and wrote logics in a functions is a **declarative** way.

## Pure Functions
* while we passing `same parameters` to the functions it should return the `same output`.
* This function `should not` depend on the **external factors** and **predefined functions**.

## CallBackFunction
* **Passing a function** as an `argument` to another function and invoke that new function inside the main function.
* If the new function have parameter, then during invokation of the main fuction **pass the required arguments** for the new function also.