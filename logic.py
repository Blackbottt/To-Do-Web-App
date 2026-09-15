tasks = [{'id': 1, 'title': 'Task 1', 'completed': False}]

def get_tasks():
    return tasks
def add_task(title):
    tasks.append({'id': len(tasks) + 1, 'title': title, 'completed': False})
    return tasks
def toggle_task(id):
    for task in tasks:
        if task['id'] == id:
            task['completed'] = not task['completed']
            return task
    return None
def delete_task(id):
    for task in tasks:
        if task['id'] == id:
            tasks.remove(task)
            return task
    return None
