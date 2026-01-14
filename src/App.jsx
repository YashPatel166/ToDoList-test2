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
          <div className="header-content">
            <h1>
              <span className="header-icon">✓</span>
              My Todo List
            </h1>
            <p className="subtitle">Organize your day, achieve your goals</p>
          </div>
        </header>

        <div className="input-section">
          <div className="input-wrapper">
            <div className="input-container">
              <span className="input-icon">➕</span>
              <input
                type="text"
                className="todo-input"
                placeholder="What needs to be done?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <button className="add-button" onClick={addTodo}>
              <span className="button-text">Add</span>
              <span className="button-icon">→</span>
            </button>
          </div>
        </div>

        {totalCount > 0 && (
          <div className="stats">
            <div className="stat-card">
              <div className="stat-label">Total Tasks</div>
              <div className="stat-value">{totalCount}</div>
            </div>
            <div className="stat-card completed-stat">
              <div className="stat-label">Completed</div>
              <div className="stat-value">{completedCount}</div>
            </div>
            <div className="stat-card pending-stat">
              <div className="stat-label">Pending</div>
              <div className="stat-value">{totalCount - completedCount}</div>
            </div>
          </div>
        )}

        <div className="todos-section">
          {todos.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <h3 className="empty-title">No tasks yet</h3>
              <p className="empty-text">Start by adding your first task above!</p>
            </div>
          ) : (
            <ul className="todo-list">
              {todos.map(todo => (
                <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <div className="todo-content">
                    <label className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        className="todo-checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <div className="todo-text-wrapper">
                      <span className="todo-text">{todo.text}</span>
                      <span className="todo-date">
                        <span className="date-icon">🕐</span>
                        {todo.createdAt}
                      </span>
                    </div>
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => deleteTodo(todo.id)}
                    aria-label="Delete todo"
                    title="Delete task"
                  >
                    <span className="delete-icon">✕</span>
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

