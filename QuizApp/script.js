
const questions=[
    {
        question: "What is 2 + 2?",
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "What is 8 / 2?",
        answer: "4"
    }
];

let pointer=0;
var currentQuestion;
let message;
let isWrong=false;
const numbersColor=[];


function showQuestion(index){
    currentQuestion=document.getElementById("question");
    console.log(questions[index].question);
    currentQuestion.textContent=questions[index].question;
}


function checkAnswer(){
    let answer=document.getElementById("answer").value;
    if(answer.toLowerCase()==questions[pointer].answer){
        numbersColor[pointer]=1;
        printNumbers();
        nextQuestion();
    }
    else {
        isWrong=true;
        message.innerHTML=`<p id="wrong-answer">Wrong uh!</p>`;
        numbersColor[pointer]=0;
        printNumbers();
    }
}

function nextQuestion(){
    document.getElementById("answer").value='';
    if(isWrong){
        document.getElementById('wrong-answer').remove();
        isWrong=false;
    }
    if(pointer<questions.length-1){
        pointer++;
        showQuestion(pointer);
    }
    else{
        alert("Congratulations! Quiz completed")
        pointer=0;
        showQuestion(pointer);
    }
}

let numbersList;

function printNumbers(){
    numbersList=document.getElementById("numbers-list");
    numbersList.innerHTML='';
    for(let i=0;i<questions.length;i++){
        let listItem=document.createElement('li');
        listItem.textContent=i+1;
        listItem.className=`${numbersColor[i]==1 ? 'passed': ''} ${numbersColor[i]==0 ? 'failed': ''} swiper-slide`;
        listItem.onclick=()=>{
            showQuestion(i);
            pointer=i;
        };
        numbersList.appendChild(listItem);
    }
}

document.addEventListener("DOMContentLoaded",function(){
    showQuestion(0);
    message=document.getElementById("message");
    printNumbers();
    
});

