import { useState } from "react";
import "./App.css";
import TodoForm from "./components/todoform/TodoForm";
import Tabs from "./components/tabs/Tabs";
import TodoList from "./components/todolist/TodoList";
import { TasksProvider } from "./context/tasksContext";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Alert from "./components/alert/Alert";
import SearchBar from "./components/searchbar/SearchBar";

function Todo() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("status", null);
    navigate('/');
  };

  const username = JSON.parse(localStorage.getItem("status"));

  return (
    <TasksProvider>
      <div className="d-flex justify-content-center bg-body-tertiary h-100">
        <div className="container rounded-4" style={{ background: "#edebeb" }}>
          <nav className="pt-4 d-flex justify-content-between">
            <div className="fs-6 me-4 btn btn-outline-secondary">
              Welcome, {username}
            </div>
            <button className="btn btn-outline-danger" onClick={logout}>
              Log Out
            </button>
          </nav>
          <div className="app_title fs-3 mb-4 todo-heading">Todo App</div>
          <Alert />
          <SearchBar onSearch={setSearchText} />
          <TodoForm className="my-4" />
          <Tabs className="my-4" />
          <hr />
          <TodoList searchText={searchText} />
        </div>
      </div>
    </TasksProvider>
  );
}

export default Todo;
