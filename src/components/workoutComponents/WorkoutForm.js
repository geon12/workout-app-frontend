import {useState} from "react"
import WorkoutFormRadio from "./WorkoutFormRadio"

function WorkoutForm({exercises}) {

    const initialState =  {
        name: "",
        description: "",
        exercises: []
    }

    const [formData, setFormData] = useState(initialState)
    const [chosenExercise,setChosenExercise] = useState(exercises[0])
    const [typeFilter,setTypeFilter] = useState("All")

    function populateFormOptions(exercises) {
        const filteredExercises = filterByType(exercises)
        return filteredExercises.map((exercise) => <option key={exercise.id} value={exercise.id}>{exercise.name}</option>)
    }

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleRadioChange(event) {

        if (event.target.checked) {
            
            setTypeFilter(event.target.value)
        }
    }

    function filterByType(exercises) {
        return exercises.filter((exercise) => {
            if (typeFilter === "All") return true
            return typeFilter === exercise.type
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
                    onChange={handleChange}
                />
            </div>
            <div className="form-group m-2">
                <textarea 
                    className="form-control" 
                    name="description" 
                    placeholder="Description" 
                    onChange={handleChange}
                    value={formData.description}
                />
            </div>
            <div className="form-group m-2">
                <WorkoutFormRadio handleRadioChange={handleRadioChange}/>
                <select className="form-select" onChange={null} name="type" value={chosenExercise}>
                    {populateFormOptions(exercises)}
                </select>

                <button className="btn btn-secondary">Add Exercise</button>
            </div>
            <button type="submit" className="btn btn-primary">Save Workout</button>
        </form>
    )
}

export default WorkoutForm