import React from 'react'
import { Tab, Menu, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import MarketList from "./MarketList";
import SaleForm from "./SaleForm";
import RegLogin from "./RegLogin";
import Registration from "./Registration";
import HomePage from "./HomePage";





export default function TabNav() {
    return (
        
      <header>
        <h1 className="tabNav-h1">Sauti</h1>
       
            <div className="App">
            <ul className="navbar">
                <li className=".navbar li a">
        <NavLink exact to ="/"> Home Page
              </NavLink>
            </li>
            <li>
            <NavLink exact to ="/market"> Market Pricing
              </NavLink>
              </li>
              <li>
              <NavLink exact to ="/post"> Sell
              </NavLink>
            </li>
            <li>
              <NavLink exact to ="/reglog"> Login
              </NavLink>
            </li>
            </ul>
            {/* <Route exact path="/reglog" component={RegLogin}/>
            <Route exact path="/register" component={Registration}/> */}
            
         </div>
         </header>
    )}
    
