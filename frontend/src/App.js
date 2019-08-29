import React from "react";
import {Route} from "react-router-dom";
import TabNav from "./components/TabNav.js";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import MarketList from "./components/MarketList";
import SaleForm from "./components/SaleForm";
import Registration from "./components/Registration";
import RegLogin from "./components/RegLogin";
//import HomePage from "./components/Homepage.js";



export default function App() {
  return (
    <div>
      <TabNav />
      <Route exact path="/register" render={(props)=><Registration {...props} />} />
      <Route exact path="/reglog" render={(props)=><RegLogin {...props} />} />
    </div>
  );
}
