import UI from './UI.js';
import Task from './Task.js';

const ui = new UI();

document.querySelector('.AddTaskBtn').addEventListener('click', e => {
    const taskTitle = document.querySelector('#newtaskID').value;

    const task = new Task(taskTitle);

    ui.addToUI(task);
    ui.resetForm();

    console.log(task);
})