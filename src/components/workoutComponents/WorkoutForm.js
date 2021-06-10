import {useState} from "react"

function WorkoutForm({exercises}) {

    const initialState =  {
        name: "",
        description: "",
        exercises: []
    }

    const [formData, setFormData] = useState(initialState)
    const [chosenExercise,setChosenExercise] = useState(exercises[0])

    function populateFormOptions() {

        return exercises.map((exercise) => <option value={exercise.id}>{exercise.name}</option>)
    }

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <form onSubmit={null}>
            <div className="form-group m-2">
                <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name} 
                    onChange={null}
                />
            </div>
            <div className="form-group m-2">
                <textarea 
                    className="form-control" 
                    name="description" 
                    placeholder="Description" 
                    onChange={null}
                    value={formData.description}
                />
            </div>
            <div className="form-group m-2">
                
                <select className="form-select" onChange={null} name="type" value={chosenExercise}>
                    {populateFormOptions()}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Save Workout</button>
        </form>
    )
}

export default WorkoutForm