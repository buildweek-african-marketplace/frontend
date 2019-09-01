import React from "react";
import { Link, Route } from "react-router-dom";



export default function WelcomePage() {
  return (
    <section>
      <header>
        <h1 className="homepage-h1">Sauti Africa</h1>
        <Link to="/marketprice">
<button className ="welcome-button">MARKET PRICING</button></Link>

        
        
        <Link to="/market">
        <button className ="welcome-button">BROWSE</button></Link>
        
        
        <Link to="/post">
  <button className ="welcome-button">POST</button></Link>

       
      </header>
    </section>
  );
}