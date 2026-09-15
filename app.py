from flask import Flask, request
import logic

app = Flask(__name__)

@app.route("/")
def home():
    return "Hallo Blackbottt, your backend is alive"

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
    toggle_task = logic.toggle_task(task_id)
    if not toggle_task:
        return {"error": "Task not found"}, 404
    return toggle_task, 200

if __name__ == "__main__":
    app.run(debug=True)