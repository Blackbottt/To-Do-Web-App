async function loadTasks() {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    console.log("1", tasks);
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.textContent = task.title;
        taskList.appendChild(taskItem);
    });
}

loadTasks();
const taskForm = document.getElementById('task-form');
const task = document.getElementById('task-title');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
});