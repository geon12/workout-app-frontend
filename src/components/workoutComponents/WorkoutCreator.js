import WorkoutForm from "./WorkoutForm";

function WorkoutCreator({exercises,workouts,setWorkouts}) {
    function postWorkout(data) {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/workouts`, configObj)
            .then(resp => resp.json())
            .then( (resp) => {
                setWorkouts([...workouts,resp])
            })
            .catch(console.error)
    }
    return (
        <div>
            <h1 className="display-3 text-center">Create a Workout</h1>
            <WorkoutForm exercises={exercises} postWorkout={postWorkout}/>
        </div>
    )
}

export default WorkoutCreator