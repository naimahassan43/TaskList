function UI() {}

UI.prototype.addToUI = function(task) {
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
    task.remove();
}

UI.prototype.completeTask = function(e) {
    const task = e.target.parentElement.parentElement;
    task.classList.toggle('completed');
}
export default UI;