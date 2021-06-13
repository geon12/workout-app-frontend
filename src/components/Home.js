import React from "react"

function Home() {
    return (
        <div>
            <h1 className="display-1 mx-4">Workout Creator</h1>
            <h2 className="display-3 text-muted mx-4">Create Workouts and Exercises</h2>
            <ul className="list-group">
                <li className="list-group-item m-4 h3">Explore different exercises and activities</li>
                <li className="list-group-item m-4 h3 text-primary">Add new exercises</li>
                <li className="list-group-item m-4 h3 text-muted">Exercise to premade workout routines</li>
                <li className="list-group-item m-4 h3 text-danger">Create your own Workout</li>
            </ul>
        </div>
    )
}

export default Home