import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import uuidv4 from '../node_modules/uuid/dist/v4';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <button className="add buttons" onClick={handleAddTodo}>🛒 Add </button>
      <button className="clear buttons" onClick={handleClearTodos}> 🚮 Delete</button>
      <div classNameName="wrapper">
        <div className="ui category search">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="Search product..." />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="left">{todos.filter(todo => !todo.complete).length} Items in your Cart</div>
        <TodoList todos={todos} toggleTodo={toggleTodo}>
        </TodoList>
        <div className="searchNew">
          <form className="ui form">
            <div className="field">
              <input ref={todoNameRef} className="prompt" type="text" name="first-name" placeholder="Product Title" />
            </div>
            <div className="field">
              <input type="text" name="last-name" placeholder="Product Description" />
            </div>
            <button className="ui button" type="submit">Save</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App;