import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/todoform/TodoForm";
import Tabs from "./components/tabs/Tabs";
import TodoList from "./components/todolist/TodoList";
import { getRecordsfromLocal, storeDataLocal } from "./utils/storage";
import { TasksProvider } from "./context/tasksContext";
// import Alert from "./components/alert/Alert";

import { BrowserRouter,Route,Routes,useNavigate} from "react-router-dom";
// import Alert from "./components/alert/alert";

import Alert from "./components/alert/Alert";

function Todo() {
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.setItem("status",null)
    navigate('/')
  }
  return (
    <TasksProvider>
      <div className="">
      
      <center>
      <div className="d-flex justify-content-center bg-body-tertiary h-100">
      <div className="container rounded-4 " style={{background:"#edebeb"}}>
      <nav style={{float:"right"}} className="pt-4">
        <div className="fs-6  me-4 btn btn-outline-secondary d-inline-block" >
          Welcome , {JSON.parse(localStorage.getItem("status"))}
        </div>
        <button className="btn btn-outline-danger d-inline-block" onClick={logout}>Log Out</button>
      </nav>
        <div className="app_title fs-3 mb-4">Todo App</div>
        <Alert/>
        <TodoForm className="my-4" />
        <Tabs className="my-4" />
        <TodoList />
      </div>
      </div>
      </center>
      </div>
    </TasksProvider>
  );
}

export default Todo;