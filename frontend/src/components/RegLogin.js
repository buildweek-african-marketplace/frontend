import React, {useState} from 'react';
import { Redirect, Link, Route } from "react-router-dom";
import axios from "axios";



const Login = (props) => {
    const [login, setLogin] = useState({ username:props.registration.username, password: props.registration.password })
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeHandler = (e) => {
        setLogin({ ...login, [e.target.name]:e.target.value });
    }

const userLogin = (user) => {
    axios
    .post("https://lbs-african-marketplace.herokuapp.com/auth/login", user)
    .then(response => {
        console.log(response);
        setIsLoggedIn(true);
    })
    .catch(err => {
        console.log(err.message)
    })
}

const submitLogin = (e) => {
    e.preventDefault();
    const loggingUser = {
        username:login.username,
        password:login.password
    }
    userLogin(loggingUser);
    setIsLoggedIn(false);
}

    if(isLoggedIn === true){
        return(
            <Redirect to={
                {
                    pathname:"/market",
                    from: props.location
                }
            } />
        )
    }else{
    return(
        <div>
            <h1 className = "signlabel">Sign In</h1>
            <form className="signlogin" onSubmit={submitLogin}>
                <label className = "reglabel">
                    Username
                    <br/>
                    <input className="box" type="text" name="username" value={login.username} onChange={changeHandler} />
                </label>
                <br/>  
                <label className = "reglabel">
                    Password
                    <br/>
                    <input className="box" type="password" name="password" value={login.password} onChange={changeHandler} />
                </label>
                <br/>
                <Link to="/welcome">
                <label className = "reglabel">
                   
                    <br/>
                    <input className="submit" type="submit" />
                </label>   
                </Link> 
            </form>    
        </div>    
     )
 }
}

export default Login;