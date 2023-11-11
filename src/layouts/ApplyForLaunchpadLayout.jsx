// IMPORTING NECESSARY FILES
    // IMPORT NECESSARY MODULES
import React from "react"
    // IMPORT NECESSARY HOOKS
import UserContextHook from "../hooks/UserContextHook"
    // IMPORT NECESSARY COMPONENTS
import { Navigate, Outlet } from "react-router-dom"

// EXPORTIING DEFAULT APPLYFORLAUNCHPAD LAYOUT
export default function ApplyForLaunchpadLayout(){
    // GETTING USER CONTEXT
    const {user, dispatch} = UserContextHook()

    // GETTING USER FROM DATABASE
    React.useEffect(() => {
        dispatch({type: "GET_USER"})
    }, [dispatch])

    return(
        <div>
            {
                user
                    ?
                <Navigate 
                    to={'/launchpad/apply for launchpad/apply'}
                    replace={true}
                />
                    :
                <Navigate
                    to={'/launchpad/apply for launchpad/auth'}
                    replace={true}
                />
            }
            
            <Outlet/>
        </div>
    )
}