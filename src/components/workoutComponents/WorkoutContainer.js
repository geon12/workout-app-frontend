import { useEffect } from "react"

function WorkoutContainer() {

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/workouts`)
            .then(resp => resp.json())
            .then(console.log)
    },[])

    return(
        <div>
            <h1>Workouts for you to Try</h1>
        </div>
    )
}

export default WorkoutContainer