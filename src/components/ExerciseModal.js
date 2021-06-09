import React from "react"
import './ExerciseModal.css'
function ExerciseModal({exercise,showModal,closeModal}) {

    return (
        <div className={`modal ${showModal ? "show" : "hide"}`} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={closeModal} className="btn btn-secondary">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>

    )
}

export default ExerciseModal