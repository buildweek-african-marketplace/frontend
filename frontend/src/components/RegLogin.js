import React, {useState} from 'react';
import axios from "axios";


const Login = () => {
    const [login, setLogin] = useState({ username:"", password: "" })
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');

    const changeHandler = (e) => {
        setLogin({ ...login, [e.target.name]:e.target.value});
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
}
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

export default Login;