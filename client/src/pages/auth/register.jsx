import Commonform from "@/components/common/form";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const initialState = {
    userName :'',
    email:'',
    password: ''
}

function AuthRegister(){

    const [formData , setFormData] = useState(initialState)
    const dispatch = useDispatch();
    const navigate = useNavigate()


    function onSubmit(event){
        event.preventDefault()
        dispatch(registerUser(formData)).then((data)=> {
            console.log(data)
        })
    }

    console.log(formData);

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new Account</h1>
                <p className="mt-2">Already have an account
                    <Link className="font-medium ml-2 text-primary hover:underline" to= '/auth/login'>Login</Link>
                </p>
            </div>
            <Commonform
            formControls={registerFormControls}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            buttonText={'Sign-Up'}
            />
        </div>
    )
}
export default AuthRegister;