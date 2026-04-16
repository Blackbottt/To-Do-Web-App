from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hallo Blackbottt, your backend is alive"

@app.route("/tasks")
def get_tasks():
    return ["coming soon"]

if __name__ == "__name__":
    app.run(debug=True)