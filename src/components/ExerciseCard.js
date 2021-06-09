import { useState } from "react"
import ExerciseModal from "./ExerciseModal"


function ExerciseCard({exercise}) {
    const [showModal,setShowModal] = useState(false)

    function handleCardClick() {
        setShowModal(true)
    }

    function closeModal() {
        setShowModal(false)
    }
    return (
        <div className="col-3 m-3">
            <div className="card" onClick={handleCardClick}>
            
                <div className="card-body">
                    <h5 className="card-title">{exercise.name}</h5>
                    <h6 className="card-subtitle">{exercise.type}</h6>
                    
                </div>
            </div>
            <ExerciseModal exercise={exercise} showModal={showModal} closeModal={closeModal}/>
        </div>
    )
}

export default ExerciseCard