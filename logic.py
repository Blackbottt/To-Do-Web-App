tasks = [{'task_id': 1, 'title': 'Task 1', 'completed': False}]

def get_tasks():
    return tasks

def add_task(title):
    if not tasks:
        task_id = 1
    else:
        task_id = max(task['task_id'] for task in tasks) + 1
    tasks.append({'task_id': task_id, 'title': title, 'completed': False})
    return tasks

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