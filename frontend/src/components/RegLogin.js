import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios";


const Login = (props) => {
    const [login, setLogin] = useState({ username:"", password: "" })
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeHandler = (e) => {
        setLogin({username: props.registration.username, password: props.registration.password });
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
            <form onSubmit={submitLogin}>
                <label>
                    Username
                    <br/>
                    <input type="text" name="username" value={login.username} onChange={changeHandler} />
                </label>
                <br/>  
                <label>
                    Password
                    <br/>
                    <input type="password" name="password" value={login.password} onChange={changeHandler} />
                </label>
                <br/>
                <label>
                    Submit
                    <br/>
                    <input type="submit" />
                </label>    
            </form>    
        </div>    
     )
 }
}

export default Login;