import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';


function App() {
  const [exercises,setExercises] = useState([])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/exercises`)
      .then(resp => resp.json())
      .then(setExercises)
  },[])
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
