from flask import Flask, request, render_template
import logic

logic.load_tasks_from_file()

app = Flask(__name__)
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/tasks", methods=["POST"])
def create_task_route():
    data = request.get_json()
    title = data.get("title")
    if not title:
        return {"error": "Title is required"}, 400
    logic.add_task(title)
    return {"message": "Task added successfully"}, 201

@app.route("/tasks")
def get_tasks_route():
    return logic.get_tasks()

@app.route("/tasks/<int:task_id>/toggle", methods=["POST"])
def toggle_task_route(task_id):
    toggled_task = logic.toggle_task(task_id)
    if not toggled_task:
        return {"error": "Task not found"}, 404
    return toggled_task, 200

@app.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_task_route(task_id):
    deleted_task = logic.delete_task(task_id)
    if deleted_task is None:
        return {"error": "Task not found"}, 404
    # return {"message": "Task deleted successfully"}, 200
    return deleted_task, 200

@app.route("/tasks/delete", methods=["DELETE"])
def delete_all_tasks_route():
    logic.delete_all_tasks()
    return {"message": "All tasks deleted successfully"}, 200     

@app.route("/tasks/store", methods=["POST"])  
def store_tasks_route():
    data = request.get_json()
    title = data.get("title")
    if not title:
        return {"error": "Title is required"}, 400
    logic.add_task_list(title)
    return {"message": "Tasks stored successfully"}, 200

if __name__ == "__main__":
    app.run(debug=True)