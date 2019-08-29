import React from "react";
import { Redirect } from "react-router-dom";

const Registration = (props) => {

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
        <form onSubmit={props.submitRegistration}>
            <label>
                Username
                <br/>
                <input type="text" name="username" value={props.registration.username} onChange={props.changeHandler}/>
            </label>

            <br/>  
            <label>
                Password
                <br/>
                <input type="password" name="password" value={props.registration.password} onChange={props.changeHandler} />
            </label>
        
            <br/>   
            <label>
                Department
                <br/>
                <input type="text" name="department" value={props.registration.department} onChange={props.changeHandler} />
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
}

export default Registration;