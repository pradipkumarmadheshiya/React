import "./dynamicForm.css"

import React,{useRef, useState} from "react"

function DynamicForm(){
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const passwordRef=useRef(null)
    
    const [formData, setFormData]=useState({
        name:"",
        email:"",
        password:""
    })

    const [errors, setErrors]=useState({})

    // Function to validate input fields
    const validate=()=>{
        let tempError={}
        if (!formData.name || formData.name.length<3){
            tempError.name="Name must be atleast 3 character long"
        }
        if (!formData.email.includes("@")){
            tempError.email="Enter a valid email"
        }
        if (formData.password.length<6){
            tempError.password="Password must be atleast 6 characters"
        }

        setErrors(tempError)
        return Object.keys(tempError).length===0
    }

    // Handling input changes
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    // Handle form submission
    const handleSubmission=(e)=>{
        e.preventDefault();
        if (validate()){
            console.log("Form submitted:", formData)
            alert("Form submitted successfully")
        }
        else{
            console.log("some error in inputs")
        }
    }
    
    // Handle dynamic focus
    const handleFocusNext=(ref)=>{
        ref.current && ref.current.focus()
    }
    
    return(
        <div className="container">
            <h2>Dynamic Form</h2>
            <form onSubmit={handleSubmission}>
                <label>
                Name:
                <input ref={nameRef} type="text" name="name" placeholder="Your name here..." 
                value={formData.name}
                onChange={handleChange}
                onKeyDown={(e)=>e.key==="Enter" && handleFocusNext(emailRef)}
                />
                {errors.name && <p>{errors.name}</p>}
                </label>
                <label>
                Email:
                <input ref={emailRef} type="email" name="email" placeholder="Your email here..." 
                value={formData.email}
                onChange={handleChange}
                onKeyDown={(e)=>e.key==="Enter" && handleFocusNext(passwordRef)}
                />
                {errors.email && <p>{errors.email}</p>}
                </label>
                <label>
                Password:
                <input ref={passwordRef} type="password" name="password" placeholder="Your password here..." 
                value={formData.password}
                onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
                </label>
                {/*submit button*/}
                <div className="submitClass">
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </div>
    )
}
export default DynamicForm