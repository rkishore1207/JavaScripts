//Unlike Callback functions it receives a function to itself

//MAP
// It will go through the each element in the array and perform specific operations that we have produced
// Map will always return an new array

const transactions=[1000,2500,-450,3500,5000,-200];

function convertIntoDollar(){
    const dollars=transactions.map((element)=>{
        return (element/80).toFixed(0);
    });
    return dollars;
}

console.log(convertIntoDollar());


//FOREACH
// Everything is same with map except it won't return anything

function convertIntoDollarByForEach(){
    transactions.forEach((element)=>{
        console.log((element/80).toFixed(0));
    });
}

convertIntoDollarByForEach();