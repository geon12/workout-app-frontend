import { useState } from "react"


function WorkoutCard({workout,deleteCard}) {
    const [showEditForm, setShowEditForm] = useState(false)

    function handleDeleteCard() {
        deleteCard(workout.id)
    }

    function handleButtonClick() {
        setShowEditForm(prevState => !prevState)
    }
    return (
        <div className="col-8 m-3">
            <div className="card highlight shadow">
            
                <div className="card-body">
                    <h5 className="card-title">{workout.name}</h5>
                    <p className="card-text">{workout.description}.</p>
                    {showEditForm? <div>Show Edit Form </div>: null}
                    <div className="m-2">
                        <button className="btn btn-primary" onClick={handleButtonClick}>{showEditForm ? "Close Form" : "Edit Workout"}</button>
                    </div>
                    <button onClick={handleDeleteCard} className="btn btn-primary">Delete</button>
                </div>
            </div>
            
           
        </div>
    )
}

export default WorkoutCard