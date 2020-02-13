import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardContent from './components/CardContent';




function App() {

  const [language,setLanguage] = useState(null);

 const cardFilter = (e) => {
    console.log(e);
    setLanguage(e);
    
  }


  return (
    <div className="App">
      <Navbar cardFilter = {cardFilter}/>
      <CardContent  cardFilter = {language} />
    </div>
  );
}

export default App;
