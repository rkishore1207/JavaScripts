//Filter

let transactions=[1235,-400,5000,-875];

function filterFunction(){
    const result=transactions.filter((element)=>{
        return element%2==0;
    });
    return result;
}

console.log(filterFunction());

//Reduce

function reduceFunction(){
    const value=transactions.reduce((acc,value)=>{
        const updatedValue=acc+value;
        return updatedValue;
    },0);
    return value;
}

console.log(reduceFunction());