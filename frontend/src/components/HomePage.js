import React from "react";
import { Link, Route } from "react-router-dom";


export default function HomePage() {
  return (
    <section className="home-page">
      <header>
     
        <h1 className="homepage-h1">Sauti Africa</h1>
        <p className = "homepage-p">Empowering cross-border traders through knowledge, information and community. 
</p>

      <Link to="/reglog">
        <button className ="button">Sign In</button></Link>
            
      <Link to="/Register">
      <button className ="button">Register</button></Link>
            
      </header>
    </section>
  );
}