import { useEffect, useState } from "react"
import WorkoutCard from "./WorkoutCard"

function WorkoutContainer() {

    const [workouts,setWorkouts] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/workouts`)
            .then(resp => resp.json())
            .then(setWorkouts)
    },[])

    function deleteCard(id) {
        fetch(`${process.env.REACT_APP_API_URL}/workouts/${id}`)
            .then(resp => resp.json())
            .then(() => {
                const updatedWorkouts = workouts.filter((workout) => workout.id !== id)
                setWorkouts(updatedWorkouts)
            })
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