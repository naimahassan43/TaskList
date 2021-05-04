function LS() {}

LS.prototype.fetchTask = function() {
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    return tasks;
}

LS.prototype.storeTask = function(task) {
    let tasks = this.fetchTask();
    tasks.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

LS.prototype.deleteTask = function(id) {
    let tasks = this.fetchTask();
    let index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
};

LS.prototype.completeTask = function(id) {
    let tasks = this.fetchTask();
    let index = tasks.findIndex(task => task.id === id);
    tasks[index].isCompleted = !tasks[index].isCompleted;

    localStorage.setItem('tasks', JSON.stringify(tasks));
};

LS.prototype.findTask = function(id) {
    let tasks = this.fetchTask();
    return tasks.find(task => task.id === id);
}
export default LS;