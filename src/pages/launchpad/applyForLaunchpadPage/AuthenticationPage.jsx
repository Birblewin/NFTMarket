// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY HOOKS
import UserContextHook from "../../../hooks/UserContextHook";
    // IMPORTING NECESSARY COMPONENTS
import AuthModal from "../../../components/authModal/AuthModal";
    // IMPORTING NECESSARY CONFIGS
import supabase from "../../../../config/SupabaseClient"
    // IMPORTING NECESSARY MODULES
import React from "react";

// EXPORTING DEFAULT APPLYFORLAUNCHPADPAGE
export default function AuthenticationPage(){
    // A STATE TO KEEP TRACK OF RIGHT STATE OF AUTH
    const [isSigningIn, setIsSigningIn] = React.useState(true)
    // A STATE TO KEEP TRACK OF RIGHT STATE OF SIGN IN BUTTON
    const [isDisabled, setIsDisabled] = React.useState(false)

    // A STATE TO KEEP TRACK OF FORM DATA
    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    })

    // OBTAINING USERCONTEXT FROM HOOK
    const {dispatch} = UserContextHook()

    // A FUNCTION TO UPDATE FORM DATA
    function updateFormData(e){
        const {name, value} = e.target
        
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    // A FUNCTION TO SIGN IN USER VIA GITHUB
    async function signInGithub(){
        try{
            setIsDisabled(true)
            const {data} = await supabase.auth.signInWithOAuth({ provider: "github" })

            dispatch({
                type: "SIGN_IN",
                payload: {...data}
            })
        }catch(error){
            setIsDisabled(false)
            console.log(error.message)
        }finally{
            setIsDisabled(false)
        }
    }

    // A FUNCTIOM TO SIGN IN VIA EMAIL
    async function signInEmail(){
        try{
            setIsDisabled(true)
            const {data} = await supabase.auth.signInWithPassword({...formData})

            dispatch({
                type: "SIGN_IN",
                payload: {...data}
            })
        }catch(error){
            setIsDisabled(false)
            console.log(error.message)
        }finally{
            setIsDisabled(false)
        }
    }

    // A FUNCTION TO SIGN UP NEW USERS
    async function signUpEmail(){
        try{
            setIsDisabled(true)

            if(formData.email === "" || formData.password === ""){
                throw new Error("You must fill both fields")
            }

            const {data} = await supabase.auth.signUp({...formData})

            dispatch({
                type: "SIGN_IN",
                payload: {...data}
            })
        }catch(error){
            setIsDisabled(false)
            console.log(error.message)
        }finally{
            setIsDisabled(false)
        }
    }

    return(
        // A CONTAINER FOR THE WHOLE PAGE
        <div className="min-h-[100vh] scroll-smooth box-border transition-all duration-500 ease-in-out flex justify-center items-center">
            {/* A SIGNINMODAL COMPONANT THAT HANDLES AUTHENTICATION */}
            <AuthModal
                socialAuthStatement={isSigningIn ? "Sign in to GitHub" : "Sign up via Github"}
                emailAuthStatement={isSigningIn ? "Sign in" : "Sign up"}
                switchAuthStatement={isSigningIn ? ["Don't have an account", "Sign up"] : ["Already have an account", "Log in"]}
                socialAuthFunction = {() => signInGithub()}
                emailAuthFunction = {isSigningIn ? () => signInEmail() : () => signUpEmail()}
                switchAuthFunction = {isSigningIn ? () => setIsSigningIn(false) : () => setIsSigningIn(true)}
                disabled = {isDisabled}

                handleFormData = {(e) => updateFormData(e)}
                formData = {formData}
            />
        </div>
    )
}