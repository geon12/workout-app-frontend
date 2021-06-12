import React, {useState} from "react"
import ExerciseCard from "./ExerciseCard"
import ExerciseForm from "./ExerciseForm"

function ExerciseContainer({exercises, setExercises}) {

    const [showForm, setShowForm] = useState(false)

    function populateCards() {
        return exercises.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise} handleEditExercise={handleEditExercise}/>)
    }

    function handleEditExercise(exercise,data) {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/exercises/${exercise.id}`, configObj)
            .then(resp => resp.json())
            .then( (resp) => {
                const updatedExercises = exercises.map((exercise) => {
                    if (exercise.id === resp.id) return resp
                    return exercise
                })
                setExercises(updatedExercises)
            })
            .catch(console.error)
            
    }

    function handlePostExercise(data) {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/exercises`, configObj)
            .then(resp => resp.json())
            .then( (resp) => {
                setExercises([...exercises,resp])
            })
            .catch(console.error)
    }

    function handleButtonClick() {
        setShowForm(prevState => !prevState)
    }
    return (
        <div className="row justify-content-center">
            <h1>Explore different Exercises</h1>
            {showForm ? <ExerciseForm onSubmit={handlePostExercise} /> : null}
            <div className="m-2">
                <button className="btn btn-primary" onClick={handleButtonClick}>{showForm ? "Close Form" : "Add an Exercise"}</button>
            </div>
            {populateCards()}
        </div>
    )
}

export default ExerciseContainer