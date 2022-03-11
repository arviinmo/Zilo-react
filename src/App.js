import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h3>What do you wanna do today!</h3>
      </header>
      <Form todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText}/>
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
