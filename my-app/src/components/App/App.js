import React,{useState} from "react";
import './App.css';
import PopViewer from "../PopViewer/pop";
import ButtonHigher from "../ButtonHigher/Higher";
import ButtonLower from "../ButtonLower/Lower";
//import FlagViewer from '../FlagViewer/flag';

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
          <PopViewer props={randomValue} />
            <div className="button-container">
          <ButtonHigher className="Higher"  handleClick={handleClick}></ButtonHigher>
          <ButtonLower  className="Lower"  handleClick={handleClick}></ButtonLower>
           </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
