from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hallo Blackbottt, your backend is alive"

if __name__ == "__name__":
    app.run(debug=True)