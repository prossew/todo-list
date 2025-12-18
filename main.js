"use strict"

const addButton = document.getElementById('addBtn');
const taskInput = document.getElementById('text');
const taskContainer = document.getElementById('taskContainer');

addButton.addEventListener('click', function(event) {

    event.preventDefault();
    
    const taskText = taskInput.value.trim();

    if(taskText === "") {
        alert('Please, add a task!');
        return;
    }

    const taskElement = document.createElement('div');
    taskElement.className = 'task-item';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'task-checkbox';

    const textElement = document.createElement('span');
    textElement.className = 'task-text';
    textElement.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';

    taskElement.appendChild(checkBox);
    taskElement.appendChild(textElement);
    taskElement.appendChild(deleteButton);

    taskContainer.appendChild(taskElement);

    taskInput.value = "";

    deleteButton.addEventListener('click',function() {
     taskContainer.removeChild(taskElement);
    });

     checkBox.addEventListener('change',function() {
    textElement.classList.toggle('completed', this.checked);
     });
});

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
const html = document.documentElement;
const isDark = html.getAttribute('data-theme') === 'dark';

if(isDark) {
    html.removeAttribute('data-theme');
    themeToggle.textContent = '🌙 Dark Mode';
} else {
    html.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️ Light Mode';
}
});