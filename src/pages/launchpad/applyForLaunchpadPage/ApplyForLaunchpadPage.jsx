// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY HOOKS
import UserContextHook from "../../../hooks/UserContextHook";
    // IMPORTING NECESSARY COMPONENTS

// EXPORTING DEFAULT APPLYFORLAUNCHPADPAGE
export default function ApplyForLaunchpadPage(){
    // OBTAINING USERCONTEXT FROM HOOK
    const {user, dispatch} = UserContextHook()

    return(
        <div className="min-h-[100vh] scroll-smooth box-border transition-all duration-500 ease-in-out flex justify-center items-center">
            <div>
                <figure>
                    <img src="" alt="" />
                    <figcaption></figcaption>
                </figure>

                <button>
                    <img src="" alt="" />
                    <p>Sign in with Github</p>
                </button>

                <div>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>

                <div>
                    <p>Email</p>
                    <input type="email" name="" id="" />
                </div>

                <div>
                    <p>Password</p>
                    <input type="password" name="" id="" />
                </div>

                <button>Sign in</button>

                <p>
                    No account?
                    <span>Sign up</span>
                </p>
            </div>
        </div>
    )
}