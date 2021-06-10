import WorkoutForm from "./WorkoutForm";

function WorkoutCreator({exercises}) {

    return (
        <div>
            <h1>Create a Workout</h1>
            <WorkoutForm exercises={exercises}/>
        </div>
    )
}

export default WorkoutCreator