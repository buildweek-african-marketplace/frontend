import React from 'react'
import { Tab, Menu, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import MarketList from "./MarketList";
import SaleForm from "./SaleForm";
import Login from "./Login";
import App from "../App"
import HomePage from "./HomePage";





export default function TabNav() {
    return (
        
      <header>
        <NavLink to="/"> 
        <h1 className="tabNav-h1">Sauti</h1>
        </NavLink>
        <h1 className="tabNav-h1">Sauti</h1>
       
            <div className="nav">
            <ul className="navbar">
                <li className=".navbar li a">
        <NavLink exact to ="/welcome"> Home
              </NavLink>
            </li>
            <li>
            <NavLink exact to ="/market"> Market
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
            <Route path="/" component={App}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/market" component={MarketList}/>
            <Route exact path="/post" component={SaleForm} />
         </div>
         </header>
    )}
    
