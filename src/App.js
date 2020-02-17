import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CardContent from "./components/CardContent";


function App() {
  const [language, setLanguage] = useState(null);

  const cardFilter = e => {
    setLanguage(e);
    console.log(e);
  };

  const [result, setResult] = useState("");

  const search = val => {
    setResult(val);
    console.log(val);
  };

  return (
    <div className="App">
      <Navbar cardFilter={cardFilter} search={search} />
      <CardContent language={language} result={result} />
    </div>
  );
}

export default App;
