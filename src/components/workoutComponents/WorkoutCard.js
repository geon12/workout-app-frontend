

function WorkoutCard({workout}) {
    return (
        <div className="col-8 m-3">
            <div className="card shadow">
            
                <div className="card-body">
                    <h5 className="card-title">{workout.name}</h5>
                    <p className="card-text">{workout.description}.</p>
                    <button onClick={null} className="btn btn-primary">Delete</button>
                </div>
            </div>
            
           
        </div>
    )
}

export default WorkoutCard