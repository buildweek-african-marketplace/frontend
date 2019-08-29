import React, { useState } from 'react'
import { BrowserRouter as Route, NavLink } from "react-router-dom";
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
    <div className="card-login">
      <h1 className="login-h1">Welcome Back!</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <label className='login-h2'>
          Username:
          <input className='login-box'
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </label>
        <label className="login-h2">
          Password:
          <input className='login-box'
            type="text"
            name="password"
            value={user.password}
            onChange={event => handleChange(event)}
          />
        </label>
      </form>
      <p className='login-p'>Forgot your password?</p>
      <NavLink exact to="/welcome"> <button className="login-button">Sign In</button></NavLink>
      <Route exact path="/welcome" component={HomePage} />
     <section className='login-hello'>
       <h1 className='login-h1'>Hello, Friend!</h1>
       <p className='hello'>Enter your personal details to get started!</p>
       <button className='hello-button'>Sign Up</button>
     </section>
    </div>


  )
}

export default Login

