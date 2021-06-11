function AddedExerciseCard({addedExercise,exercise}) {
    return (
        <div className="row">
            <div className="card shadow">
            
                <div className="card-body">
                    <h5 className="card-title">{exercise.name}</h5>
                    <h6 className="card-subtitle">{exercise.type}</h6>
                    <h6 className="card-subtitle">{addedExercise.length} minutes</h6>
                    <button className="btn btn-primary">Remove</button>
                </div>
            </div>
            
        </div>

    )
}

export default AddedExerciseCard