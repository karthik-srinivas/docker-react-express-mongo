import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const [dbResponse, setDbResponse] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/testAPI")
      .then(({ data }) => setApiResponse(data))
      .catch(err => console.log("Oops!.Error"));

    axios
      .get("http://localhost:5000/testDB")
      .then(({ data }) => setDbResponse(data))
      .catch(err => console.log("Oops!.Error"));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A basic containerrizing of React, Express and Mongodb Application</p>
        <p className="App-link">{apiResponse}</p>
        <p className="App-link">{dbResponse}</p>
      </header>
    </div>
  );
}

export default App;
