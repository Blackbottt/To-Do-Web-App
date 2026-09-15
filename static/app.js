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

function addTask() {
    const taskTitle = document.getElementById('task-title').value.trim();
    const taskForm = document.getElementById('task-form');

}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});