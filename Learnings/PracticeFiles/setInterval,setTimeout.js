console.log("Before");

let timer = setInterval(greet,1000);

function greet(){
    console.log("Hello!");
}

console.log("After");

setTimeout(function(){
    clearInterval(timer);
},3000);
