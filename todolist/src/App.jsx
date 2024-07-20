import React from 'react'
import Login from './Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Todo from './Todo'
// index.js or App.js
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    // <div>App</div>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<Login />}/>
  <Route path="/todo" element={<Todo />}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App