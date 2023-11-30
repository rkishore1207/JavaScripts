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

## Higher Order Functions
> - <mark>It always receives a function</mark>
### Map
* It process every element in an array and do specific operations in the body.
* It will return new array.

### For Each
* Almost same with the Map function except it could not return anything.

### Find
* It will process all the element in the array, return 1st element which it encounter the given condition.

### Find Index
* Same to find but it will return that element's index.

### Some
* It will return true if any one of the element in the array satisfies the condition or else it will return false.

### Every
* It will return true if every element in the array needs to satisfy the condition or else it will return false

### Filter
* Similar to map, it will also go through all the elements and process the conditions which we provided.

### Reduce
* Unlike other functions, it will return only single value, and it follows accumulator and value

### Chaining 
* we can able to append one function with in the other by taking the output of one function and give that to the input of appending function.
* then totally it will return the appending function's result.

## Object Oriented Programming in javaScript
* Naturally javascript **isn't language of oops** like java but with the help `prototyping` concept we can write javascript code as oops paradigm.

## this keyword
* this keyword is perform different in various environments such as browser and node.js
* And these two environments having two different modes are **strict and Non-strict**. 

### this keyword in node.js -> non strict
* global--> console.log(this) //**empty object**
* regular function --> pointing to the **global object**
* method in the object --> pointing to the **object itself**
* object -> func -> regular func --> pointing to the **global object**
 
```javascript
let myObj={
    name:"Kishore",
    age:21,
    func:function(){
        console.log(this);
    }
};
myObj.func();
```
 
### this keyword in node.js -> strict
* global--> console.log(this) //**empty object**
* regular function --> **undefined**
* method in the object --> pointing to the **object itself**
* object -> func -> regular func --> **undefined**
 
### this keyword in Browser -> non strict
* global--> console.log(this) //window object
* regular function --> window object
* method in the object --> pointing to the object itself
* object -> func -> regular func --> window object
 
## this keyword in Browser -> strict
* global--> console.log(this) //window object
* regular function --> undefined
* method in the object --> pointing to the object itself
* object -> func -> regular func --> undefined

## Constructor Function
* With this function we can create **lot of objects** that is this function act like a class.

```javascript
function createCar(_name,_model,_color){
    this.name=_name;
    this.model=_model;
    this.color=_color;
    this.drive=function(){
        console.log(`Car name is ${this.name} and color is ${this.color}`);
    }
}
 
let car1 = new createCar("X4","BMW","Red");
 
//console.log(car1.name);
car1.drive();

```
## Classes in JavaScript
* As like java, javascript also having class like structure and inside it has constructor function as well as we can write methods inside it.
## Classes Inheritance
* Copying the properties and methods of one class and inject that in another class by `extends` keyword.
* In the child class we can instantiate the parent's class properties by `super` keyword.

## Prototype
* Each object that we created defultly inherit the `Prototype object` in it and we can able to access the **properties and methods** inside that prototype object.
* But if we create object by **Constructor function** it will inherit the prototype object at `two times`.
* if you request one function, it will check in the current object's prototype -> check in the default object prototype -> check in the null container -> in any of the case it's not found then return `error`.
* this is called `prototype chaininig`.
![Prototype Chaining](https://github.com/rkishore1207/JavaScripts/assets/146698138/3f429cfa-d384-4da8-9878-2b35634a6404)
