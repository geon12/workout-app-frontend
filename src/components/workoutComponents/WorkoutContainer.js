import WorkoutCard from "./WorkoutCard"
import {Link} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import "./WorkoutContainer.css"

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
        return workouts.map((workout) => {
            
            return (
                <Link className="nostyle" key={uuidv4()} to={`/workouts/${workout.id}`}>
                    <WorkoutCard workout={workout} deleteCard={deleteCard}/>
                </Link>
            )
        })
    }

    return(
        <div className="row justify-content-center">
            <h1>Workouts for you to Try</h1>
            {populateWorkoutCards()}
        </div>
    )
}

export default WorkoutContainer