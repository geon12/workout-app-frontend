import Workout from "./Workout"
import { v4 as uuidv4 } from 'uuid'

function WorkoutPages({workouts,exercises,setWorkouts}) {

    function handleEditWorkout(workout,data) {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/workouts/${workout.id}`, configObj)
            .then(resp => resp.json())
            .then( (resp) => {
                const updatedWorkouts = workouts.map((workout) => {
                    if (workout.id === resp.id) return resp
                    return workout
                })
                setWorkouts(updatedWorkouts)
            })
            .catch(console.error)
            
    }

    function populateWorkoutPages() {
        
        return workouts.map((workout) => <Workout key={uuidv4()} workout={workout} exercises={exercises} handleEditWorkout={handleEditWorkout}/>)
    }
    

    return (
        <>
        {populateWorkoutPages()}
        </>
    )
}

export default WorkoutPages