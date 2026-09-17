list_of_tasks = [{'list_id': 1, 'title': 'List 1', 'tasks': []}]
tasks = [{'task_id': 1, 'title': 'Task 1', 'completed': False}]
import json
import os

def load_tasks_from_file():
    global tasks, list_of_tasks

    if not os.path.exists('tasks.json'):
        tasks = []
        list_of_tasks = []
        return
    
    with open('tasks.json', 'r') as f:
        data = json.load(f)
        
    tasks = data.get('tasks', [])
    list_of_tasks = data.get('list_of_tasks', [])

def save_tasks_to_file():
    data = {
        'tasks': tasks,
        'list_of_tasks': list_of_tasks
    }
    with open('tasks.json', 'w') as f:
        json.dump(data, f, indent=4)

def get_tasks():
    return tasks

def get_task_lists():
    return list_of_tasks

def add_task(title):
    if not tasks:
        task_id = 1
    else:
        task_id = max(task['task_id'] for task in tasks) + 1
    tasks.append({'task_id': task_id, 'title': title, 'completed': False})
    return tasks

def add_task_list(title):
    if not list_of_tasks:
        list_id = 1
    else:
        list_id = max(task_list['list_id'] for task_list in list_of_tasks) + 1
    list_of_tasks.append({'list_id': list_id, 'title': title, 'tasks': []})
    return list_of_tasks

def toggle_task(task_id):
    for task in tasks:
        if task['task_id'] == task_id:
            task['completed'] = not task['completed']
            return task
    return None

def delete_task(task_id):
    for task in tasks:
        if task['task_id'] == task_id:
            tasks.remove(task)
            return task
    return None

def delete_all_tasks():
    tasks.clear()
    return tasks