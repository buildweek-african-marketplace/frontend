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
            <NavLink exact to ="/market"> Market Pricing
              </NavLink>
              </li>
              <li>
              <NavLink exact to ="/post"> Sell
              </NavLink>
            </li>
            <li>
              <NavLink exact to ="/login"> Login
              </NavLink>
            </li>
            </ul>
            <Route exact path="/" render={ (props)=> <HomePage {...props} /> } />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/market" component={MarketList}/>
            <Route exact path="/post" component={SaleForm} />
         </div>
         </header>
    )}
    
