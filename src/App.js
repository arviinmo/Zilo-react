import React from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <header>
        <h2>What do you wanna do today!</h2>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
