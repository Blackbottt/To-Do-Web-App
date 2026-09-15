async function loadTasks(params) {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.textContent = task.title;
        taskList.appendChild(taskItem);
    });
}

