import { useEffect, useState } from 'react';
import './App.css';
import ExerciseContainer from './components/exerciseComponents/ExerciseContainer';
import Home from './components/Home';
import WorkoutContainer from './components/workoutComponents/WorkoutContainer';


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
      <ExerciseContainer exercises={exercises} setExercises={setExercises}/>
      <WorkoutContainer />
    </div>
  );
}

export default App;
