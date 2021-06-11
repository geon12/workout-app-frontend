import WorkoutCard from "./WorkoutCard"

function WorkoutContainer({workouts,setWorkouts}) {

    function deleteCard(id) {
        fetch(`${process.env.REACT_APP_API_URL}/workouts/${id}`,{method: 'DELETE'})
            .then(resp => resp.json())
            .then(() => {
                const updatedWorkouts = workouts.filter((workout) => workout.id !== id)
                setWorkouts(updatedWorkouts)
            })
            .catch(console.error)
    }

    function populateWorkoutCards() {
        return workouts.map((workout) => <WorkoutCard key={workout.id} workout={workout} deleteCard={deleteCard}/>)
    }

    return(
        <div className="row justify-content-center">
            <h1>Workouts for you to Try</h1>
            {populateWorkoutCards()}
        </div>
    )
}

export default WorkoutContainer