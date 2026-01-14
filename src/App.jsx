import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toLocaleString()
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>✨ Todo List</h1>
          <p className="subtitle">Stay organized and productive</p>
        </header>

        <div className="input-section">
          <div className="input-container">
            <input
              type="text"
              className="todo-input"
              placeholder="Add a new task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="add-button" onClick={addTodo}>
              Add Task
            </button>
          </div>
        </div>

        {totalCount > 0 && (
          <div className="stats">
            <span className="stat-item">
              Total: <strong>{totalCount}</strong>
            </span>
            <span className="stat-item">
              Completed: <strong>{completedCount}</strong>
            </span>
            <span className="stat-item">
              Pending: <strong>{totalCount - completedCount}</strong>
            </span>
          </div>
        )}

        <div className="todos-section">
          {todos.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📝</div>
              <p>No tasks yet. Add one above to get started!</p>
            </div>
          ) : (
            <ul className="todo-list">
              {todos.map(todo => (
                <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <div className="todo-content">
                    <input
                      type="checkbox"
                      className="todo-checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <span className="todo-text">{todo.text}</span>
                    <span className="todo-date">{todo.createdAt}</span>
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => deleteTodo(todo.id)}
                    aria-label="Delete todo"
                  >
                    🗑️
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

