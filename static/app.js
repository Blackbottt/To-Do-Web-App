const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskList = document.getElementById('task-list');

const tasksCompleted = function(tasks) {
    const allCompletedMessage = document.createElement('div');
    const message = document.createElement('p');
    const buttons = document.createElement('div');
    const deleteButton = document.createElement('button');
    const storeButton = document.createElement('button');

    if (tasks) {
        if (tasks.every(task => task.completed)) {
            allCompletedMessage.classList.add('all-completed-message');
            message.classList.add('message');
            buttons.classList.add('completed-tasks-buttons');
            deleteButton.classList.add('delete-button');
            storeButton.classList.add('store-button');
            message.textContent = 'All tasks completed!\n Would you like to store the List or Delete it?';
            deleteButton.textContent = 'Delete List';   
            storeButton.textContent = 'Store List'; 
            buttons.appendChild(deleteButton);
            buttons.appendChild(storeButton);
            allCompletedMessage.appendChild(message);
            allCompletedMessage.appendChild(buttons);
            taskList.appendChild(allCompletedMessage);

            deleteButton.addEventListener('click', async () => {
                await fetch('/tasks', {
                    method: 'DELETE'
                });
                await loadTasks();
            });

            storeButton.addEventListener('click', async () => {
                await fetch('/tasks/store', {
                    method: 'POST'
                });
                await loadTasks();
            });
        };
    }
};

async function loadTasks() {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    console.log("1", tasks);
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        const deleteButton = document.createElement('button');
        taskItem.addEventListener('click', async () => {
            await toggleTask(task.task_id);
        });
        deleteButton.addEventListener('click', async (e) => {
            e.stopPropagation();
            await deleteTask(task.task_id);
        });
        if (task.completed) {
            taskItem.classList.add('completed');
        }
        taskItem.classList.add('task-item');
        deleteButton.classList.add('delete-task');
        taskItem.textContent = task.title;
        deleteButton.textContent = 'Delete';
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
    tasksCompleted(tasks);
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
        await loadTasks();        
    }
}

async function toggleTask(taskId) {
    // Here you would typically send a request to your backend to toggle the task's completion status
    console.log("Toggling task:", taskId);
    await fetch(`/tasks/${taskId}/toggle`, {
        method: 'POST'
    });
    await loadTasks();
}

async function deleteTask(taskId) {
    // Here you would typically send a request to your backend to delete the task
    console.log("Deleting task:", taskId);  
    await fetch(`/tasks/${taskId}`, {
        method: 'DELETE'
    });
    await loadTasks();
}

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await addTask();
});