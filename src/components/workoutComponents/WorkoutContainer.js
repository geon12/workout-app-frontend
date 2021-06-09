import { useEffect, useState } from "react"
import WorkoutCard from "./WorkoutCard"

function WorkoutContainer() {

    const [workouts,setWorkouts] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/workouts`)
            .then(resp => resp.json())
            .then(setWorkouts)
    },[])

    function populateWorkoutCards() {
        return workouts.map((workout) => <WorkoutCard key={workout.id} workout={workout}/>)
    }

    return(
        <div className="row justify-content-center">
            <h1>Workouts for you to Try</h1>
            {populateWorkoutCards()}
        </div>
    )
}

export default WorkoutContainer