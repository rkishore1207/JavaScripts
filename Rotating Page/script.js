let wrongButton;
let menuButton;
let container;

document.addEventListener("DOMContentLoaded",()=>{
    wrongButton=document.querySelector(".wrong-button");
    menuButton=document.querySelector(".menu-button");
    container=document.querySelector(".container");

    menuButton.addEventListener("click",()=>{
        wrongButton.style.top='55px';
        wrongButton.style.left='55px';
        menuButton.style.top='-55px';
        menuButton.style.left='130px';
        container.classList.add('show-nav');
    });

    wrongButton.addEventListener("click",()=>{
        wrongButton.style.top='75px';
        wrongButton.style.left='0px';
        menuButton.style.top='55px';
        menuButton.style.left='55px';
        container.classList.remove('show-nav');
    });
});

