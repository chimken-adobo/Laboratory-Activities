import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:3000/tasks"; // NestJS backend

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");

  // Load tasks on page load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    await axios.post(API_URL, {
      title: newTask,
      completed: false,
    });
    setNewTask("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  const startEditing = (task) => {
    setEditTaskId(task.id);
    setEditTaskTitle(task.title);
  };

  const updateTask = async (id) => {
    const taskToUpdate = tasks.find((t) => t.id === id);
    await axios.put(`${API_URL}/${id}`, {
      title: editTaskTitle,
      completed: taskToUpdate.completed,
    });
    setEditTaskId(null);
    setEditTaskTitle("");
    fetchTasks();
  };

  // Toggle completion
  const toggleTaskCompletion = async (task) => {
    await axios.put(`${API_URL}/${task.id}`, {
      title: task.title,
      completed: !task.completed,
    });
    fetchTasks();
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>

      {/* Add Task */}
      <div className="task-input">
        <input
          type="text"
          placeholder="✍️ Write a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>➕ Add</button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task)}
            />

            {editTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editTaskTitle}
                  onChange={(e) => setEditTaskTitle(e.target.value)}
                />
                <button onClick={() => updateTask(task.id)}>💾 Save</button>
                <button onClick={() => setEditTaskId(null)}>❌ Cancel</button>
              </>
            ) : (
              <>
                <span>{task.title}</span>
                <button onClick={() => startEditing(task)}>✏️</button>
                <button onClick={() => deleteTask(task.id)}>🗑️</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
