/* eslint-disable react/prop-types */
// IMPORTING ALL NECESSARY FILES
    // IMPORTING NECESSARY COMPONENTS
import { Icon } from "@iconify/react"

// EXPORTING AN AUTHMODAL COMPONENT
export default function AuthModal(props){
    return(
        // CONTAINER FOR MODAL
        <div className="w-[70%] min-h-[60vh] bg-zinc-950 flex justify-center items-center my-[20vh] rounded-[30px] border-[whitesmoke] shadow-link-side-panel-container__side-panel p-[20px] md:w-[50%]">
            {/* CONTAINER FOR CONTENT */}
            <div className="w-full flex flex-col items-start gap-[20px] justify-center my-[30px]">
                {/* CONTAINER FOR HERO SECION */}
                <figure className="w-[80%] mx-auto flex flex-col justify-center items-center pt-[20px]">
                    <img 
                        src="/img/birble.png" 
                        alt="birble-logo"
                        className="m-[10px] w-[100px] h-[100px] mt-[20px]"
                    />

                    <h1 className="text-2xl tracking-wide font-extrabold">Birble.store</h1>
                </figure>

                {/* CONTAINER FOR GITHUB BUTTON */}
                <button 
                    className=" w-[90%] sm:w-[80%] mx-auto flex bg-black justify-around items-center p-[10px] gap-[20px] h-[50px] rounded-[10px] shadow-dropdown-content border-slate-400 border cursor-pointer transition-all duration-500 ease-in-out text-white active:bg-white active:text-black active:scale-95 my-[10px] active:border-black"
                    onClick={props.socialAuthFunction}
                    disabled={props.disabled}
                >
                    <Icon icon="ant-design:github-filled" color="#9ca3af" width="26" height="26" />
                    <p className="font-bold tracking-wide">{props.socialAuthStatement}</p>
                </button>

                <div className="flex justify-center items-center w-[90%] text-center mx-auto gap-[10px] my-[10px] mb-[50px]">
                    <div className="h-[1px] w-[90%] bg-slate-50"></div>
                    <small>or</small>
                    <div className="h-[1px] w-[90%] bg-slate-50"></div>
                </div>

                <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col items-start gap-[10px] my-[10px]">
                    <p>Email</p>
                    
                    <input 
                        type="email" 
                        name="email"
                        required={true}
                        autoComplete="on"
                        className="w-full bg-gray-500 active:border active:borser-black h-[40px] rounded-[10px] pl-[10px] my-auto text-black font-semibold transition-all duration-500 ease-in-out"
                        onChange={props.handleFormData}
                        value={props.formData.email}
                    />
                </div>

                <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col items-start gap-[10px] my-[10px]">
                    <p>Password</p>
                    
                    <input 
                        type="password" 
                        name="password"
                        required={true}
                        autoComplete="on"
                        className="w-full bg-gray-500 active:border active:border-black h-[40px] rounded-[10px] pl-[10px] my-auto text-black font-semibold transition-all duration-500 ease-in-out"
                        onChange={props.handleFormData}
                        value={props.formData.password} 
                    />
                </div>

                <button 
                    className="w-[90%] sm:w-[80%] mx-auto flex bg-white justify-around items-center p-[10px] gap-[20px] h-[60px] rounded-[10px] shadow-dropdown-content border-black border cursor-pointer transition-all duration-500 ease-in-out text-black active:bg-black active:border-white active:text-white active:scale-95 my-[10px] text-lg font-bold"
                    onClick={props.authFunction}
                    disabled = {props.disabled}
                >{props.emailAuthStatement}</button>

                <p className="text-center w-full tracking-wide text-white">
                    {props.switchAuthStatement[0]}
                    
                    <span 
                        className="ml-[10px] text-blue-500 cursor-pointer active:text-lime-500 transition-all duration-500 ease-in-out active:underline"
                        onClick={props.switchAuthFunction}
                    >{props.switchAuthStatement[1]}</span>
                </p>
            </div>
        </div>
    )
}