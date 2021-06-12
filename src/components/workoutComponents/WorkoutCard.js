function WorkoutCard({workout,deleteCard}) {
    

    function handleDeleteCard() {
        deleteCard(workout.id)
    }

    
    return (
        <div className="col-8 m-3">
            <div className="card highlight shadow">
            
                <div className="card-body">
                    <h5 className="card-title">{workout.name}</h5>
                    <p className="card-text">{workout.description}.</p>
                    <button onClick={handleDeleteCard} className="btn btn-primary">Delete</button>
                </div>
            </div>
            
           
        </div>
    )
}

export default WorkoutCard