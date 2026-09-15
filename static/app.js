const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title').value.trim();
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');

async function loadTasks() {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    console.log("1", tasks);
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.textContent = task.title;
        taskList.appendChild(taskItem);
    });
}

loadTasks();


async function addTask() {
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
    }
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});