import Workout from "./Workout"
function WorkoutPages({workouts,exercises}) {
    function populateWorkoutPages() {
        console.log(workouts)
        return workouts.map((workout) => <Workout workout={workout} exercises={exercises}/>)
    }
    return (
        <>
        {populateWorkoutPages()}
        </>
    )
}

export default WorkoutPages