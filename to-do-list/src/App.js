import React, { useState } from "react";
// import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="app">
      <TodoList />
    </div>
  );
}

export default App;
