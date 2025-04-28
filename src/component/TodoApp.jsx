import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoApp.css";

const TodoApp = ({ list, onNewItem, handleDelete }) => {
  const todoNameElement = useRef();
  const DateElement = useRef();

  const handleOnClick = (event) => {
    event.preventDefault();
    const todoItem = todoNameElement.current.value;
    const date = DateElement.current.value;
    todoNameElement.current.value = "";
    DateElement.current.value = "";
    if (todoItem.trim() === "" || date.trim() === "") {
      alert("Please enter task name and date!");
      return;
    }
    onNewItem(todoItem, date);
  };

  return (
    <>
      <center className="fw-bolder">Todo App</center>
      <div className="todo-container container">
        <form className="todo-input-group" onSubmit={handleOnClick}>
          <input
            type="text"
            placeholder="Enter Todo Task"
            className="todo-input"
            ref={todoNameElement}
          />
          <input type="date" className="todo-date" ref={DateElement} />
          <button type="submit" className="btn btn-success todo-btn">
            Add
          </button>
        </form>

        <div className="mt-3">
          {list.map((todo, index) => (
            <div key={index} className="todo-list-item">
              <div className="todo-task">{todo.name}</div>
              <div className="todo-date-text">{todo.date}</div>
              <div className="todo-actions">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(todo.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoApp;
