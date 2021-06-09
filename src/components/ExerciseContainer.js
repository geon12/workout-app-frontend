import React from "react"
import ExerciseCard from "./ExerciseCard"

function ExerciseContainer({exercises, setExercises}) {
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
    return (
        <div className="row justify-content-center">
            
            {populateCards()}
        </div>
    )
}

export default ExerciseContainer