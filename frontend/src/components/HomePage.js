import React from "react";
<<<<<<< HEAD:frontend/src/components/HomePage.js
=======
import { Link, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
>>>>>>> d232d75406646eca1f1cc801742cc4953beb155c:HomePage.js

export default function HomePage() {
  return (
    <section className="home-page">
      <header>
<<<<<<< HEAD:frontend/src/components/HomePage.js
        <h1 className="homepage-h1">Sauti Africa</h1>
        <p className = "homepage-p">Empowering cross-border traders through knowledge, information and community. 
</p>
<button className ="button">"Let's Get Started!</button>
        <img className = "home-img" src= "https://cdn.pixabay.com/photo/2016/02/24/05/20/art-1219122_640.jpg"
          alt="Sauti Africa"
        />
=======
     
        <h1 className="homepage-h1">Sauti Africa</h1>
        <p className = "homepage-p">Empowering cross-border traders through knowledge, information and community. 
</p>

<Link to="/Login">
  <button className ="button">Sign In</button></Link>
  <Route path="/Login" component={Login} />
       
<Link to="/Register">
<button className ="button">Register</button></Link>
<Route path="/Register" component={Register} />
      
>>>>>>> d232d75406646eca1f1cc801742cc4953beb155c:HomePage.js
      </header>
    </section>
  );
}