//Chaining Function Practice:
 
let transactions =[1000,-300,4005,-400,3000];
 
function chainingFunction(){
    const totalPositiveSum=transactions.filter((element)=>{
        return element>0;
    }).reduce((acc,element)=>{
       const updatedValue=acc+element;
       return updatedValue;
    },0);
    return totalPositiveSum;
}

console.log(chainingFunction());