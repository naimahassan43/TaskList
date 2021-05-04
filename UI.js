import LS from './LS.js';

function UI() {}

const ls = new LS();

UI.prototype.showAllTasks = function() {
    let tasks = ls.fetchTask();
    let newHtml = '';
    tasks.forEach(task => {
        newHtml += `
        <div class="task ${task.isCompleted ? 'completed' : ''}" data-createdat="${task.id}">
        <div class="task__details">
            <input type="checkbox" class="task-check" ${task.isCompleted ? 'checked' : ''}/>
            <label class="task-title">${task.title}</label>
        </div>
      
        <div class="task__op">
            <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
            <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
        </div>
      </div>
`;
    });

    document.querySelector('.task-list').innerHTML = newHtml;
}

UI.prototype.addToUI = function(task) {
    ls.storeTask(task);

    let newHtml = `
  <div class="task" data-createdat="${task.id}">
  <div class="task__details">
      <input type="checkbox" class="task-check" />
      <label class="task-title">${task.title}</label>
  </div>

  <div class="task__op">
      <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
      <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
  </div>
</div> 
  `;

    document.querySelector('.task-list').insertAdjacentHTML('afterbegin', newHtml);
};

UI.prototype.resetForm = function() {
    document.querySelector('#newtaskID').value = '';
};

UI.prototype.deleteTask = function(e) {
    const task = e.target.parentElement.parentElement;
    const id = task.dataset.createdat;
    ls.deleteTask(id);
    task.remove();
}

UI.prototype.completeTask = function(e) {
    const task = e.target.parentElement.parentElement;
    const id = task.dataset.createdat;
    ls.completeTask(id);
    task.classList.toggle('completed');
};

UI.prototype.editTask = function(e) {
    const task = e.target.parentElement.parentElement;
    const id = task.dataset.createdat;
    const data = ls.findTask(id);

    document.querySelector('#newtaskID').value = data.title;
    document.querySelector('#updateTaskId').value = data.id;

    document.querySelector('.AddTaskBtn').style.display = 'none';

    document.querySelector('.EditTaskBtn').style.display = 'inline';
    document.querySelector('.CancelTaskBtn').style.display = 'inline';
}
export default UI;