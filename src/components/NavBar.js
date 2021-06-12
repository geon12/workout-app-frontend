import {NavLink} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const activeStyle={
        fontWeight: "bold",
        color: "red",
        backgroundColor: "black"
      }
    
    return (
        <nav className="row navbar">
            <ul>
                <li>
                    <NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink>
                </li>
                <li>
                    <NavLink exact to='/exercises' activeStyle={activeStyle}>Exercises</NavLink>
                </li>
                <li>
                    <NavLink exact to='/workouts' activeStyle={activeStyle}>Workouts</NavLink>
                </li>
                <li>
                    <NavLink exact to='/workoutcreator' activeStyle={activeStyle}>Workout Creator</NavLink>
                </li>
                
            </ul>
        </nav>
    )
}

export default NavBar