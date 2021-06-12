import { useEffect, useState } from 'react';
import './App.css';
import ExerciseContainer from './components/exerciseComponents/ExerciseContainer';
import Home from './components/Home';
import WorkoutContainer from './components/workoutComponents/WorkoutContainer';
import WorkoutCreator from './components/workoutComponents/WorkoutCreator';
import Workout from './components/workoutComponents/Workout';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




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

  function handleEditWorkout(workout,data) {
    const configObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    
    fetch(`${process.env.REACT_APP_API_URL}/workouts/${workout.id}`, configObj)
        .then(resp => resp.json())
        .then( (resp) => {
            const updatedWorkouts = workouts.map((workout) => {
                if (workout.id === resp.id) return resp
                return workout
            })
            setWorkouts(updatedWorkouts)
        })
        .catch(console.error)
        
  }

  
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/exercises'>
            {nullCheck(exercises !== null, 
              <ExerciseContainer exercises={exercises} setExercises={setExercises}/>)}
          </Route>
          <Route exact path='/workouts'>
            {nullCheck(workouts !== null, 
              <WorkoutContainer workouts={workouts} setWorkouts={setWorkouts}/>)}
          </Route>
          <Route exact path='/workoutcreator'>
            {nullCheck(workouts !== null && exercises !== null, 
              <WorkoutCreator exercises={exercises} workouts={workouts} setWorkouts={setWorkouts}/>)}
          </Route>
          <Route exact path='/workouts/:id'>
            {nullCheck(workouts !== null && exercises !== null, 
              <Workout exercises={exercises} handleEditWorkout={handleEditWorkout}/>)}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
