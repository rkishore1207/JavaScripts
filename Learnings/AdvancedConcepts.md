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