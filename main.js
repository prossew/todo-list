'use strict'

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskContainer = document.getElementById("taskContainer");

addBtn.addEventListener('click', function(e){
 
     e.preventDefault();
    const textInput = taskInput.value.trim();

    if(textInput === "") {
        alert('Введите что-то');
        return;
    }

    const newDiv = document.createElement("div")

    taskContainer.appendChild(newDiv);
    
    const newSpan = document.createElement("span")
    newSpan.textContent = textInput;
    newDiv.appendChild(newSpan);

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Удалить";
    newDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function(){
        newDiv.remove();
    })

    taskInput.value = "";
})