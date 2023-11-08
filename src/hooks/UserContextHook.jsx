// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
import React from "react";
    // IMPORTING NECESSARY COMTEXTS
import {UserContext} from '../contexts/UserContext'

// EXPORTING A USERCONTEXTHOOK THAT VALIDATES THE CONTEXT BEFORE USE
export default function UserContextHook(){
    const context = React.useContext(UserContext)

    if(!context){
        throw new Error("The context you are looking for is not provided by UserContext")
    }

    return context
}