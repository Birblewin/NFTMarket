/* eslint-disable react/prop-types */
// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
import React from "react";

// CREATING A USERCONTEXT FROM REACT
export const UserContext = React.createContext()

// CREATING A USERCONTEXTREDUCER FUNCTION THAT MANAGES DIFFERENT STATES OF USERCONTEXT
export function UserContextReducer(state, action){
    switch(action.type){
        case "SIGN_IN":
            localStorage.removeItem('user')
            localStorage.setItem('user', JSON.stringify(action.payload))

            return { user: action.payload }
        case "SIGN_OUT":
            localStorage.removeItem('user')

            return { user: null }
        case "GET_USER":{
            return {user: JSON.parse(localStorage.getItem('user'))}
        } 
        default:
            return state
    }
}

// EXPORTING A USERCONTEXTPROVIDER FUNCTION THAT MAKES THE CONTEXT ACCESSIBLE THROUGHOUT THE APP
export default function UserContextProvider({children}){
    const [state, dispatch] = React.useReducer(UserContextReducer, { user: null })
    
    return(
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}