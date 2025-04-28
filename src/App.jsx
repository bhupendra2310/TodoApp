import { useState } from "react";

import "./App.css";
import TodoApp from "./component/TodoApp";

function App() {


  const [newTodo,setNewTodo]=useState([])
  const handleNewItem=(itemName,itemDate)=>{
    const newTodoItems = [...newTodo,  {
      name: itemName,
      date: itemDate,
    },];
    setNewTodo(newTodoItems)
  }
  const handleDelete=(itemName)=>{
   const  updatedTodo=newTodo.filter((item)=>item.name!==itemName)
    setNewTodo(updatedTodo)
  }
  return (
    <>
      <TodoApp list={newTodo} onNewItem={handleNewItem} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
