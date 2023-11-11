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
export default function ApplyForLaunchpadPage(){
    // A STATE TO KEEP TRACK OF RIGHT STATE OF SIGN IN BUTTON
    const [isDisabled, setIsDisabled] = React.useState(false)
    
    // A STATE TO KEEP TRACK OF FORM DATA
    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    })
   
    // A FUNCTION TO UPDATE FORM DATA
    function updateFormData(e){
        const {name, value} = e.target
        
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    // OBTAINING USERCONTEXT FROM HOOK
    const {dispatch} = UserContextHook()

    // A FUNCTION TO SIGN OUT USER VIA GITHUB
    async function signOutGithub(){
        try{
            setIsDisabled(true)
            await supabase.auth.signOut()
            dispatch({ type: "SIGN_OUT" })
        }catch(error){
            setIsDisabled(false)
            console.log(error.message)
        }finally{
            setIsDisabled(false)
        }
    }

    // A FUNCTION TO SIGN OUT USERS VIA EMAIL
    async function signOutEmail(){
        try{
            setIsDisabled(true)
            const {user} = (await supabase.auth.getUser()).data

            if(formData.email === "" || formData.password === ""){
                throw new Error("You must fill both fields")
            }else if(user.email !== formData.email){
                throw new Error("Invalid user")
            }

            await supabase.auth.signOut()
            dispatch({ type: "SIGN_OUT" })
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
                socialAuthStatement={"Sign out via Github"}
                emailAuthStatement={"Sign out"}
                switchAuthStatement={["", ""]}
                socialAuthFunction = {() => signOutGithub()}
                emailAuthFunction = {() => signOutEmail()}
                disabled = {isDisabled}

                handleFormData = {(e) => updateFormData(e)}
                formData = {formData}
            />
        </div>
    )
}