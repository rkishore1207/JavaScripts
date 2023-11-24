let cardItems;

function removeActiveClasses(){
    cardItems.forEach(item=>{
        item.classList.remove('active');
    });
};

document.addEventListener("DOMContentLoaded",function(){
    cardItems=document.querySelectorAll(".card-item");

    cardItems.forEach(item=>{
        item.addEventListener('click',()=>{
            removeActiveClasses();
            item.classList.add('active');
        });
    });
});