import React, { useState } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HomePage from "./HomePage"



const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.password);
  };
  return (
    <div classname="login">
      <h1>Welcome Back!</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={event => handleChange(event)}
          />
        </label>
      </form>
      <NavLink exact to="/welcome"> <button>Sign In</button></NavLink>
      <Route exact path="/welcome" component={HomePage} />
    </div>
  
    
    )
}

export default Login

