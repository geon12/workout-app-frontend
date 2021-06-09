import React from "react"


function ExerciseCard({exercise}) {

    
    return (
        <div className="col-3 m-3">
            <div className="card">
            
                <div className="card-body">
                    <h5 className="card-title">{exercise.name}</h5>
                    <p className="card-text">{exercise.description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default ExerciseCard