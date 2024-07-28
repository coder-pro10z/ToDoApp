import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar"; // Adjust path if necessary
import TaskCard from "./components/Card/card";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState(null);

  // For Edit Functionality
  const [editTaskId, setEditTaskId] = useState(null);
  const [editDescription, setEditDescription] = useState('');

  useEffect(() => {
    fetch("http://localhost:1433/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data); // Add logging to see the response

        setTodos(data); // Assuming the API returns an array of tasks
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setError("Failed to fetch tasks."); // Set error state
      });
  }, []);

  const addTask = () => {
    if (task.trim() === "") {
      setError("Task description cannot be empty.");
      return;
    }

    fetch("http://localhost:1433/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: task }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data); // Add logging to see the response

        if (data.taskId) {
          // Assuming the backend returns taskId as a numeric value
          setTodos([...todos, { TaskId: data.taskId, Description: task }]);
          setTask("");
          setError(null);
        } else {
          setError("Task ID not returned from server.");
        }
      })
      .catch((error) => {
        console.error("Error adding task:", error);
        setError("Failed to add task: " + error.message); // Show detailed error
      });
  };

  const deleteTask = (taskId) => {
    fetch(`http://localhost:1433/api/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.message) {
          // Refresh tasks after deletion
          fetch("http://localhost:1433/api/tasks")
            .then((response) => response.json())
            .then((data) => {
              setTodos(data); // Refresh the list of tasks
              setError(null);
            })
            .catch((error) => {
              console.error("Error fetching tasks after deletion:", error);
              setError("Failed to fetch tasks after deletion.");
            });
        }
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
        setError("Failed to delete task: " + error.message); // Show detailed error
      });
  };

  const editTask = (description, id) => {
    fetch(`http://localhost:1433/api/tasks/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId: id, description }),
    })
      .then((response) => {
        if (!response.ok)
          return response.text().then((text) => {
            throw new Error(text);
          });
        return response.json();
      })
      .then(data => {
        console.log("Task updated successfully:", data);
        // Refresh tasks after updating
        fetch("http://localhost:1433/api/tasks")
          .then((response) => response.json())
          .then((data) => {
            setTodos(data); // Refresh the list of tasks
            setEditTaskId(null);
            setEditDescription('');
            setError(null);
          })
          .catch((error) => {
            console.error("Error fetching tasks after update:", error);
            setError("Failed to fetch tasks after update.");
          });
      });
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h1>ToDo List</h1>
          <div className="task-input">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter task description"
            />
            <button onClick={addTask}>Add Task</button>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="task-list">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <TaskCard
                  key={todo.TaskId}
                  taskId={todo.TaskId}
                  description={editTaskId === todo.TaskId ? editDescription : todo.Description}
                  isEditing={editTaskId === todo.TaskId}
                  editDescription={editDescription}
                  setEditDescription={setEditDescription}
                  onDelete={() => deleteTask(todo.TaskId)}
                  onEdit={() => {
                    setEditTaskId(todo.TaskId);
                    setEditDescription(todo.Description);
                  }}
                  onSave={() => editTask(editDescription, todo.TaskId)}
                />
              ))
            ) : (
              <p>No tasks available</p>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
