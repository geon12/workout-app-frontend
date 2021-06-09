import React from "react"
import ExerciseForm from "./ExerciseForm"
import './ExerciseModal.css'
import VideoEmbed from "./VideoEmbed"
function ExerciseModal({exercise,showModal,closeModal}) {

    return (
        <div className={`modal ${showModal ? "show" : "hide"}`} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{exercise.name}</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                    <p>{exercise.description}</p>
                    <VideoEmbed youtubeLink={exercise.video}/>
                </div>
                <div className="modal-footer">
                    <ExerciseForm />
                    <button type="button" onClick={closeModal} className="btn btn-secondary">Close</button>
                </div>
                </div>
            </div>
        </div>

    )
}

export default ExerciseModal