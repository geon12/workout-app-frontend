import { useEffect, useState } from "react"
import AddedExerciseContainer from './AddedExerciseContainer'
import WorkoutEditForm from './WorkoutEditForm'
import {useParams} from "react-router-dom"

function Workout({exercises, workouts, setWorkouts}) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [workout, setWorkout] = useState({exercises:[]})

    const params = useParams();
    const id = params.id;

    function handleButtonClick() {
        setShowEditForm(prevState => !prevState)
    }

    useEffect( () => {
        
        fetch(`${process.env.REACT_APP_API_URL}/workouts/${id}`)
            .then(resp => resp.json())
            .then(setWorkout)
            .catch(console.error)
    }
    ,[id])
    
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
                setWorkout(resp)
            })
            .catch(console.error)
            
      }
    return (
        <div>
            <h1 className="display-4 text-center">{workout.name}</h1>
            <p className="mx-5 my-3 h6 text-center">{workout.description}</p>
            {showEditForm? <WorkoutEditForm workout={workout} handleEditWorkout={handleEditWorkout}/>: null}
            <div className="m-3 d-flex justify-content-center">
                <button className="btn btn-primary" onClick={handleButtonClick}>{showEditForm ? "Close Form" : "Edit Workout"}</button>
            </div>
            <AddedExerciseContainer addedExercises={workout.exercises} exercises={exercises} />

        </div>
    )
}

export default Workout