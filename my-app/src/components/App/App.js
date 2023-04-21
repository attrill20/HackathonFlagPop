import React,{useState} from "react";
import './App.css';
import FlagViewer from '../FlagViewer/flag';

function App() {
  const [randomValue, setRandomValue]= useState((Math.floor(Math.random() * 219) + 1));
    console.log(randomValue)

  function handleClick(){
    setRandomValue(Math.floor(Math.random() * 219) + 1)
  }







  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to our world game!</p>
        <div>
          <FlagViewer props={randomValue} />
            <div className="button-container">
          <button className="button" onClick = {handleClick}>Click for Random Country!</button>
           </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
