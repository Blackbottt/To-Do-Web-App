const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskList = document.getElementById('task-list');

async function loadTasks() {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    console.log("1", tasks);
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.addEventListener('click', async () => {
            await toggleTask(task.task_id);
        });
        if (task.completed) {
            taskItem.classList.add('completed');
        }
        taskItem.classList.add('task-item');
        taskItem.textContent = task.title;
        taskList.appendChild(taskItem);
    });
}

loadTasks();

async function addTask() {
    const taskTitle = taskTitleInput.value.trim();
    if (taskTitle) {
        // Here you would typically send a request to your backend to add the task
        console.log("Adding task:", taskTitle);
        
        await fetch('/tasks', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: taskTitle })
        });
        taskTitleInput.value = '';
        loadTasks();        
    }
}

async function toggleTask(taskId) {
    // Here you would typically send a request to your backend to toggle the task's completion status
    console.log("Toggling task:", taskId);
    await fetch(`/tasks/${taskId}/toggle`, {
        method: 'POST'
    });
    
    loadTasks();
}

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await addTask();
});