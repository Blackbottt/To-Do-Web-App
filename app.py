from flask import Flask
import logic
app = Flask(__name__)

@app.route("/")
def home():
    return "Hallo Blackbottt, your backend is alive"

@app.route("/tasks")
def get_tasks_route():
    return logic.get_tasks()

if __name__ == "__main__":
    app.run(debug=True)