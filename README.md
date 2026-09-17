# 1. Online ToDo Web App

A full-stack ToDo web application built with Flask, Python, JavaScript, HTML, and CSS.

Users can create, complete, delete, save, and reload task lists. Task data is persisted using JSON storage.

This project was developed to practice full-stack web development concepts including REST APIs, DOM manipulation, asynchronous JavaScript, and data persistence.

## 2. Screenshot


## 3. Features

- Create new tasks
- Delete individual tasks
- Delete all tasks
- Mark tasks as completed
- Completion popup when all tasks are finished
- Save completed task lists
- Reload previously saved lists
- JSON data persistence
- Responsive and interactive UI


#### Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend
- Python
- Flask

### Data Storage
- JSON


## 5. Project Structure

project/
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── data.json
│
├── app.py
│
├──logic.py
│
└── README.md

## 6. Installation

Clone the repository:

```bash
git clone <repository-url>
cd todo-app

- create virtual environment:
    python -m venv venv
- activate virtual environment:
    venv\Scripts\activate (Windows)
    source venv/bin/activate (linux)
- install dependencies:
    pip install flask

--- # 7. Anwendung starten ```md ## Run the Application Start Flask: ```bash python app.py
- open http://127.0.0.1:5000

---

# 8. API Endpunkte

Das mögen technische Recruiter.

```md
## API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /tasks | Load all tasks |
| POST | /tasks | Create a task |
| POST | /tasks/store | Save all tasks |
| PUT | /tasks/<id> | Update task status |
| DELETE | /tasks/<id> | Delete task |
| DELETE | /tasks | Delete all tasks |

## Future Improvements

- SQLite database integration
- User authentication
- Task categories
- Due dates
- Search functionality
- Dark mode
- Docker deployment