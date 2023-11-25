
var dynamicBar;
var circles;
var previouButton;
var nextButton;
let currentActive=1;

document.addEventListener("DOMContentLoaded",()=>{
     circles=document.querySelectorAll(".circle");
     dynamicBar=document.querySelector(".dynamic-bar");
     previouButton=document.getElementById("prev");
     nextButton=document.getElementById("next");
     update();
});

function nextFunction(){
    currentActive++;
    update();
}

function prevFunction(){
    currentActive--;
    update();
}

function update(){
    circles.forEach((element,index) => {
        if(index<currentActive)
            element.classList.add('active');
        else element.classList.remove('active');
    });

    dynamicBar.style.width=((currentActive-1)/(circles.length-1))*100+'%';

    if(currentActive==circles.length)
        nextButton.disabled=true;
    else if(currentActive==1)
        previouButton.disabled=true;
    else{
        nextButton.disabled=false;
        previouButton.disabled=false;
    }

}