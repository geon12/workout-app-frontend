import { useEffect, useState } from 'react';
import './App.css';
import ExerciseContainer from './components/exerciseComponents/ExerciseContainer';
import Home from './components/Home';
import WorkoutContainer from './components/workoutComponents/WorkoutContainer';
import WorkoutCreator from './components/workoutComponents/WorkoutCreator';


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
      <WorkoutCreator exercises={exercises}/>
    </div>
  );
}

export default App;
