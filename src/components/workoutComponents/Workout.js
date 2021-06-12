import { useEffect, useState } from "react"
import AddedExerciseContainer from './AddedExerciseContainer'
import WorkoutEditForm from './WorkoutEditForm'
import {useParams} from "react-router-dom"

function Workout({exercises, handleEditWorkout}) {
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

    return (
        <div>
            <h1>{workout.name}</h1>
            <p>{workout.description}</p>
            {showEditForm? <WorkoutEditForm workout={workout} handleEditWorkout={handleEditWorkout}/>: null}
            <div className="m-2">
                <button className="btn btn-primary" onClick={handleButtonClick}>{showEditForm ? "Close Form" : "Edit Workout"}</button>
            </div>
            <AddedExerciseContainer addedExercises={workout.exercises} exercises={exercises} />

        </div>
    )
}

export default Workout