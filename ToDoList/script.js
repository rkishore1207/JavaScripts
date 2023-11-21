const tasks=[];

function addTask(){
    const inputText=document.getElementById("toDoList").value;
    if(inputText===''){
         alert("Please enter text to add task");
         return;
    }
    tasks.push(inputText);
    updateTaskList();
    document.getElementById("toDoList").value='';
}

function updateTaskList(){
    //getting control of listContainer
    const listContainer=document.getElementById("taskListContainer");
    //whenever any event is happened just make the list to empty
    listContainer.innerHTML='';

    for(let i=0;i<tasks.length;i++){
        const listItem=document.createElement("li");
        const paragraph=document.createElement("p");
        const removeButton=document.createElement("button");
        paragraph.innerText=tasks[i];
        removeButton.textContent='Remove';
        removeButton.className='remove-button';
        removeButton.onclick=function(){
            removeTask(i);
        }
        listItem.appendChild(paragraph);
        listItem.appendChild(removeButton);
        listContainer.appendChild(listItem);
    }
}

function removeTask(index){
    tasks.splice(index,1);
    updateTaskList();
}

function clearAll(){
    tasks.length=0; //to empty an array just give its length to zero
    updateTaskList();
}