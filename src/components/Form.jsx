import { useState } from "react";

export function Form() {
  const [formData, setFormData] = useState(true);

    return (
        <>
        <form className="form-input">

            <p className="text-3xl font-bold">{formData ? "Sign up" : "Login"}</p>

            <input type="email" placeholder="Enter your email" />

            {formData && <input type="text" placeholder="Enter your name" />}

            <input type="text" placeholder="Enter your password"/>

            <button type="submit">Submit</button>

            <p>{formData ? "Already have an account ? " : "Do not hav an account ? "}  <span className="text-blue-800 cursor-pointer" onClick={()=> {
                setFormData(!formData)
            }}>{formData ? "Login" : "Sign Up3"}</span></p>

        </form>
        </>
    )
}