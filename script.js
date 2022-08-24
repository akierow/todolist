let list = document.querySelector('.list-content');
let tasks = list.children;
let form = document.querySelector('.todo-form');
let taskInput = form.querySelector('.todo-input');
let submit = form.querySelector('.todo-submit');
let template = document.querySelector('#todo-list-template').content;
let newTask = template.querySelector('.todo-list-item');
let message = document.querySelector('.empty-tasks-message');

let toggleEmtptyListMessage = function () {
    if (tasks.length === 0) {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
    }
}

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let taskTitle = taskInput.value;
    let task = newTask.cloneNode(true);
    let taskDescription = task.querySelector('span');
    taskDescription.textContent = taskTitle;
    taskDeleteHandler(task);
    taskInput.value = '';
    list.appendChild(task);
    toggleEmtptyListMessage();
});

let taskDeleteHandler = function (task) {
    let box = task.querySelector('.todo-list-input');
    box.addEventListener('change', function() {
        task.remove();
        toggleEmtptyListMessage();
    });
}

for (let i = 0; i < tasks.length; i++) {
    taskDeleteHandler(tasks[i]);
}