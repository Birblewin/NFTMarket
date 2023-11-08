// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY HOOKS
import UserContextHook from "../../../hooks/UserContextHook";

// EXPORTING DEFAULT APPLYFORLAUNCHPADPAGE
export default function ApplyForLaunchpadPage(){
    // OBTAINING USERCONTEXT FROM HOOK
    const {user, dispatch} = UserContextHook()

    return(
        <div className="w-full flex justify-center items-center">
            {
                user 
                    ?
                <button 
                    className="bg-white text-center p-[20px] text-black w-[10%] h-[10%] m-[10px]"
                    
                    onClick={
                        async () => {
                            await dispatch({ type: "SIGN_OUT" }) 
                            console.log(user)
                        }
                    }
                >Sign out</button>
                    :
                <button 
                    className="bg-white text-center p-[20px] text-black w-[10%] h-[10%] m-[10px]"
                    
                    onClick={
                        async () => {
                            await dispatch({ 
                                type: "SIGN_IN", 
                                payload: "hi, im slim shady" 
                            })

                            console.log(user)
                        }
                    }
                >Sign in</button>
            }
        </div>
    )
}