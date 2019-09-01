import React from "react";
import { Redirect } from "react-router-dom";

const Registration = (props) => {
    console.log(props)

if(props.isRegistered === true){
    return(
    <Redirect to={
        {
        pathname: "/reglog",
        from: props.location
    }} />
  )
}else{
return(
    <div>
        <h1 className = "signlabel">Register</h1>
        <form className = "login" onSubmit={props.submitRegistration}>
            <label className = "reglabel">
                Username
                <br/>
                <input className = "box" type="text" name="username" value={props.registration.username} onChange={props.changeHandler}/>
            </label>

            <br/>  
            <label className = "reglabel">
                Password
                <br/>
                <input className = "box" type="password" name="password" value={props.registration.password} onChange={props.changeHandler} />
            </label>
        
            <br/>   
            <label className = "reglabel">
                Department
                <br/>
                <input className = "box" type="text" name="department" value={props.registration.department} onChange={props.changeHandler} />
            </label>

            <br/>   
            <label className = "reglabel">
                
                <br/>
                <input className = "submit" type="Submit" />
            </label>
        </form>   
    </div>    
  )
 }
}

export default Registration;