import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Registration = () => {
   const [registration, setRegistration] = useState({ username: "", password: "", department: "" });

const changeHandler = (e) => {
    setRegistration({ ...registration, [e.target.name]:e.target.value});
}

const register = (newUser) => {
    axios
    .post("https://lbs-african-marketplace.herokuapp.com/auth/register", newUser)
    .then(response =>{
        console.log(response);
    })
    .catch(err =>{
        console.log(err.message);
    })
} 

const submitRegistration = (e) => {
    e.preventDefault()
    const newRegistration = {
        username: registration.username,
        password: registration.password,
        department: registration.department
    }
    register(newRegistration);
}


return(
    <div>
        <form onSubmit={submitRegistration}>
            <label>
                Username
                <br/>
                <input type="text" name="username" value={registration.username} onChange={changeHandler}/>
            </label>

            <br/>  
            <label>
                Password
                <br/>
                <input type="password" name="password" value={registration.password} onChange={changeHandler} />
            </label>
        
            <br/>   
            <label>
                Department
                <br/>
                <input type="text" name="department" value={registration.department} onChange={changeHandler} />
            </label>

            <br/>   
            <label>
                Submit
                <br/>
                <input type="Submit" />
            </label>
        </form>   
    </div>    
)
}

export default Registration;