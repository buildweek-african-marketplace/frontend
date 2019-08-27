import React from "react";
import {Route} from "react-router-dom";
import TabNav from "./components/TabNav.js";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import MarketList from "./components/MarketList";
import SaleForm from "./components/SaleForm";
//import HomePage from "./components/Homepage.js";



export default function App() {
  return (
    <div>
      <TabNav />
    </div>
  );
}
