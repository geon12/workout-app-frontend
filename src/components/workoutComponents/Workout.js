import AddedExerciseContainer from './AddedExerciseContainer'

function Workout({workout, exercises}) {

    return (
        <div>
            <h1>{workout.name}</h1>
            <p>{workout.description}</p>
            <AddedExerciseContainer addedExercises={workout.exercises} exercises={exercises}/>

        </div>
    )
}

export default Workout