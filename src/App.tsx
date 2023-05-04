import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Form from "./components/Form";

function App() {
  const firstName = '田月金難'
  const lastName = '弓金火土'
  return (
    <div className="App">
      <header className="App-header">
        <Hello firstName={firstName} lastName = {lastName} />
        <Form/>
      </header>
    </div>
  );
}

export default App;
