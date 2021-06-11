import { useEffect, useState } from 'react';
import './App.css';
import ExerciseContainer from './components/exerciseComponents/ExerciseContainer';
import Home from './components/Home';
import WorkoutContainer from './components/workoutComponents/WorkoutContainer';
import WorkoutCreator from './components/workoutComponents/WorkoutCreator';


function App() {
  const [exercises,setExercises] = useState([])
  const [workouts,setWorkouts] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/exercises`)
      .then(resp => resp.json())
      .then(setExercises)
    fetch(`${process.env.REACT_APP_API_URL}/workouts`)
      .then(resp => resp.json())
      .then(setWorkouts)
  },[])
  return (
    <div>
      <Home />
      <ExerciseContainer exercises={exercises} setExercises={setExercises}/>
      <WorkoutContainer workouts={workouts} setWorkouts={setWorkouts}/>
      <WorkoutCreator exercises={exercises} workouts={workouts} setWorkouts={setWorkouts}/>
    </div>
  );
}

export default App;
