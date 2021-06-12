import { useState } from "react"
import AddedExerciseContainer from './AddedExerciseContainer'
import WorkoutEditForm from './WorkoutEditForm'

function Workout({workout, exercises, handleEditWorkout}) {
    const [showEditForm, setShowEditForm] = useState(false)
    function handleButtonClick() {
        setShowEditForm(prevState => !prevState)
    }

    return (
        <div>
            <h1>{workout.name}</h1>
            <p>{workout.description}</p>
            {showEditForm? <WorkoutEditForm workout={workout} handleEditWorkout={handleEditWorkout}/>: null}
            <div className="m-2">
                <button className="btn btn-primary" onClick={handleButtonClick}>{showEditForm ? "Close Form" : "Edit Workout"}</button>
            </div>
            <AddedExerciseContainer addedExercises={workout.exercises} exercises={exercises}/>

        </div>
    )
}

export default Workout