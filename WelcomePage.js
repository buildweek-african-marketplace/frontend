import React from "react";
import { Link, Route } from "react-router-dom";
import MarketList from "./MarketList";
import SaleForm from "./SaleForm";


export default function WelcomePage() {
  return (
    <section>
      <header>
        <h1 className="homepage-h1">Sauti Africa</h1>
        <Link to="/MarketList">
<button className ="welcome-button">Market Pricing</button></Link>
<Route path="/MarketList" component={MarketList} />
        
        />
        <Link to="/MarketList">
        <button className ="welcome-button">Browse Items</button></Link>
        <Route path="/MarketList" component={MarketList} />
        
        <Link to="/SaleForm">
  <button className ="welcome-button">Post Items for Sale</button></Link>
  <Route path="/SaleForm" component={SaleForm} />
       
      </header>
    </section>
  );
}