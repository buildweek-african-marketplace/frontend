import React from 'react'
import { Tab, Menu, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import MarketList from "./MarketList";
import SaleForm from "./SaleForm";
import Login from "./Login";
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
            <NavLink exact to ="/MarketList"> Market Pricing
              </NavLink>
              </li>
              <li>
              <NavLink exact to ="/SaleForm"> Sell
              </NavLink>
            </li>
            <li>
              <NavLink exact to ="/Login"> Login
              </NavLink>
            </li>
            </ul>
            <Route exact path="/" component={HomePage}/>
            
            <Route exact path="/MarketList" component={MarketList}/>

            <Route exact path="/SaleForm" component={SaleForm}/>
            <Route exact path="/Login" component={Login}/>

         </div>
         </header>
    )}
    
