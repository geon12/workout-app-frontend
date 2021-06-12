import { useEffect, useState } from 'react';
import './App.css';
import ExerciseContainer from './components/exerciseComponents/ExerciseContainer';
import Home from './components/Home';
import WorkoutContainer from './components/workoutComponents/WorkoutContainer';
import WorkoutCreator from './components/workoutComponents/WorkoutCreator';
import WorkoutPages from './components/workoutComponents/WorkoutPages';


function App() {
  const [exercises,setExercises] = useState(null)
  const [workouts,setWorkouts] = useState(null)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/exercises`)
      .then(resp => resp.json())
      .then(setExercises)
    fetch(`${process.env.REACT_APP_API_URL}/workouts`)
      .then(resp => resp.json())
      .then(setWorkouts)

  },[])

  function nullCheck(condition,component) {
    return condition ? component : <div>Page is Loading</div>
  }

  
  return (
    <div>
      <Home />
      {nullCheck(exercises !== null, 
        <ExerciseContainer exercises={exercises} setExercises={setExercises}/>)}
      {nullCheck(workouts !== null, 
        <WorkoutContainer workouts={workouts} setWorkouts={setWorkouts}/>)}
      {nullCheck(workouts !== null && exercises !== null, 
        <WorkoutCreator exercises={exercises} workouts={workouts} setWorkouts={setWorkouts}/>)}
      {nullCheck(workouts !== null && exercises !== null, 
        <WorkoutPages workouts={workouts} exercises={exercises} setWorkouts={setWorkouts}/>)}
    </div>
  );
}

export default App;
