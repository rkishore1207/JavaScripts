
var enteredValue='';
var firstHalf='';
var seconHalf='';
var answer='';

function showingOutput(value){
    var output=document.getElementById("number-input");
    output.value=value;
}

function appending(str){
    enteredValue+=str;
    showingOutput(enteredValue);
}

var operator='';

function equalTo(){
    var partialValue='';
    for(let i=0;i<enteredValue.length;i++){
        if(enteredValue[i]=='+' || enteredValue[i]=='-' || enteredValue[i]=='*' ||enteredValue[i]=='/'){
            seconHalf=partialValue;
            firstHalf=calculation(firstHalf,seconHalf,operator);
            partialValue='';
            operator=enteredValue[i];
        }
        else{
            partialValue+=enteredValue[i];
        }
    }
    enteredValue=calculation(firstHalf,partialValue,operator);
    showingOutput(enteredValue);
}

function calculation(first,second,arithmeticOperator){
    var result;
    switch(arithmeticOperator){
        case '+':
            result=Number(first)+Number(second);
            break;
        case '-':
            result=Number(first)-Number(second);
            break;
        case '*':
            result=Number(first)*Number(second);
            break;
        case '/':{
            result=Number(first)/Number(second);
            if(first==0)
                result='Inderminant';
            break;
        }
        default:
            result=second;
    }
    return result;
}

function onClear(){
    enteredValue='';
    showingOutput(0);
    firstHalf='';
    seconHalf='';
}

function deleteFunction(){
    if(enteredValue.length==1 || enteredValue=='' ||enteredValue=="Inderminant"){
        enteredValue='';
        showingOutput('0');
    }
    else{
        enteredValue = enteredValue.slice(0,enteredValue.length-1);
        showingOutput(enteredValue);
    }
}

// function answerFunction(){
//     answer=enteredValue;
//     enteredValue='';
//     operator='';
//     showingOutput('Ans');
// }