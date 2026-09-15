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

if __name__ == "__main__":
    app.run(debug=True)