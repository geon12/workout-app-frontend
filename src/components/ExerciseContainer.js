import React from "react"
import ExerciseCard from "./ExerciseCard"

function ExerciseContainer({exercises}) {
    function populateCards() {
        return exercises.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise}/>)
    }
    return (
        <div className="row justify-content-center">
            {populateCards()}
        </div>
    )
}

export default ExerciseContainer