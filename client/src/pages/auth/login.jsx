
import Commonform from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";


const initialState = {
    userName :'',
    email:'',
    password: ''
}

function AuthLogin(){

    const [formData , setFormData] = useState(initialState)



    function onSubmit(){

    }

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign-In to your account</h1>
                <p className="mt-2">Don't have an account
                    <Link className="font-medium ml-2 text-primary hover:underline" to= '/auth/register'>Register</Link>
                </p>
            </div>
            <Commonform
            formControls={loginFormControls}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            buttonText={'Sign-In'}
            />
        </div>
    )
}
export default AuthLogin;