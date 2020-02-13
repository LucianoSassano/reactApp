import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardContent from './components/CardContent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CardContent /*card={CardContent.card1}*//>
    </div>
  );
}

export default App;
