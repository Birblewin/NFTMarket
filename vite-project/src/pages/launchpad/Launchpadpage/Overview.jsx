import { NavLink } from "react-router-dom"
import Notes from "./columns/overview-team"
// IMPORT CSS FILE
import './Overview.css'

// EXPORTING A PASTCOLLECTION FUNCTION
export default function Overview (){
    return(
        <NavLink className="overview-container">
            <Notes/>
        </NavLink>
    )
}