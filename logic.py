tasks = [{'id': 1, 'title': 'Task 1', 'completed': False}]

def get_tasks():
    return tasks
def add_task(title):
    tasks.append({'id': len(tasks) + 1, 'title': title, 'completed': False})
    return tasks
def toggle_task(id):
    pass
def delete_task(id):
    pass
