import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoApp.css";
import { useState } from "react";
const TodoApp = ({ list, onNewItem, handleDelete }) => {
  // const [todoItem, setTodoItem] = useState("");
  // const [date, setDate] = useState("");

  const todoNameElement = useRef();
  const DateElement = useRef();

  // const handleAddItem = (event) => {
  //   setTodoItem(event.target.value);

  // };
  // const handleAddDate = (event) => {
  //   setDate(event.target.value);

  // };
  const handleOnLick = (event) => {
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
    // setTodoItem("");
    // setDate("");
  };

  return (
    <>
      <center className="fw-bolder">Todo App</center>
      <br />
      <div className="todo-container container">
        <div className="todo-input-group">
          <input
            type="text"
            placeholder="Enter Todo Task"
            className="todo-input"
            // onChange={handleAddItem}
            // value={todoItem}
            ref={todoNameElement}
          />
          <input
            type="date"
            className="todo-date"
            // value={date}
            // onChange={handleAddDate}
            ref={DateElement}
          />

          <button className="btn btn-success todo-btn " onClick={handleOnLick}>
            Add
          </button>
        </div>
        <div>
          <div className="">
            {list.map((todo, index) => (
              <div key={index} className="row flex ">
                <div className="col-5">{todo.name}</div>
                <div className="col-5">{todo.date}</div>
                <div className="col-2">
                  <button
                    className="btn btn-danger todo-Date"
                    onClick={() => {
                      handleDelete(todo.name);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
