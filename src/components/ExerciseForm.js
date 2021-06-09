

function ExerciseForm() {
    return (
        <form>
            <div className="form-group m-2">
                <input type="text" class="form-control" name="name" placeholder="Name" />
            </div>
            <div className="form-group m-2">
                
                <select className="form-control">
                    <option value="Strength Training">Strength Training</option>
                    <option value="Aerobic">Aerobic</option>
                    <option value="Stretch">Stretch</option>
                </select>
            </div>
            <div className="form-group m-2">
                <textarea class="form-control" name="description" placeholder="Description" />
            </div>
            <div className="form-group m-2">
                <input type="text" name="video" className="form-control" aria-describedby="videoHelp" placeholder="YouTube Link"/> 
                <small id="videoHelp" className="form-text text-muted">Input a YouTube link (Ex. https://www.youtube.com/watch?v=dQw4w9WgXcQ)</small>
            </div>
            <button type="submit" className="btn btn-primary">Edit Changes</button>
        </form>
    )
}

export default ExerciseForm