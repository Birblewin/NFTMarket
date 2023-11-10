// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY HOOKS
import UserContextHook from "../../../hooks/UserContextHook";
    // IMPORTING NECESSARY COMPONENTS
import AuthModal from "../../../components/authModal/AuthModal";

// EXPORTING DEFAULT APPLYFORLAUNCHPADPAGE
export default function AuthenticationPage(){
    // OBTAINING USERCONTEXT FROM HOOK
    const {dispatch} = UserContextHook()

    return(
        // A CONTAINER FOR THE WHOLE PAGE
        <div className="min-h-[100vh] scroll-smooth box-border transition-all duration-500 ease-in-out flex justify-center items-center">
            {/* A SIGNINMODAL COMPONANT THAT HANDLES AUTHENTICATION */}
            <AuthModal
                socialAuthStatement="Sign in to GitHub"
                emailAuthStatement="Sign in"
                switchAuthStatement={["Don't have an account", "Sign up"]}
                
                authFunction = {() => dispatch({
                    type: "SIGN_IN",
                    payload: "im slim shady"
                })}
            />
        </div>
    )
}