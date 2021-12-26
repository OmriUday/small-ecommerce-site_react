import React from 'react';
import './Todo.css';

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div className="ui four cards wrapper">
      <div className="card">
        <div className="image">
          <img alt='newProduct' src="../newProduct.png" />
        </div>
        <div className="info">
          <h1>
            {todo.name}
          </h1>
        </div>
        <div className="extra">
          <h4>Description: </h4>
          </div>
        <div className="extra">
          Price: 
          <div className="ui star rating" data-rating="4"> 100$</div>
        </div>
        <div className="delete">
          <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
          </label>
        </div>
      </div>
    </div>
  )
}