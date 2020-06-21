import React, {useState, useEffect} from "react";
import "./App.scss";
import Rubic from '../RubicCube/Rubic'

function App() {
  const [winW, setWinW] = useState(window.innerWidth);

// watching resize so i can change rubic cube parts on resize

  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(()=>setWinW(window.innerWidth),50);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])


  return (
    <div className="App">
    <Rubic winW={winW}/>
    </div>
  );
}


export default App;
