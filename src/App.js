import { useState } from 'react';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate'; 
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';
import Social from './Social';

function App() {
  const [inputValue, setInputValue] = useState("");
  
  return (
    <div className="container">
    <InputShortener setInputValue={setInputValue} />
    <BackgroundAnimate />
    <LinkResult inputValue={inputValue} />
    <Social />
    </div>
  );
}

export default App;
