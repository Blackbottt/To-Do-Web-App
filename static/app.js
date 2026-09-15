async function loadTasks(params) {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
}

