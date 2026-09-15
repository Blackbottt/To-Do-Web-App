from flask import Flask
from logic import get_tasks
app = Flask(__name__)

@app.route("/")
def home():
    return "Hallo Blackbottt, your backend is alive"

@app.route("/tasks")
def get_tasks():
    tasks = get_tasks()
    return tasks

if __name__ == "__main__":
    app.run(debug=True)