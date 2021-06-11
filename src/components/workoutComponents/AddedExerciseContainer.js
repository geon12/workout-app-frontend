import AddedExerciseCard from "./AddedExerciseCard"

function AddedExerciseContainer({addedExercises}) {
    function populateAddedExercises() {
        return addedExercises.map( (addedExercise) => <AddedExerciseCard addedExercise={addedExercise}/>)
    }
    return (
        <div>
            {populateAddedExercises()}
        </div>
    )
}

export default AddedExerciseContainer