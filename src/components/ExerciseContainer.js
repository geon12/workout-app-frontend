import React from "react"
import ExerciseCard from "./ExerciseCard"

function ExerciseContainer({exercises, setExercises}) {
    function populateCards() {
        return exercises.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise}/>)
    }

    function handleEditExercise(id) {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/exercises`, configObj)
            .then(resp => resp.json())
            .then( () => {
                const updatedExercises = exercises.map()
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