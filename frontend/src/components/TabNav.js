import React from 'react'
import { Route, Link } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import MarketList from "./MarketList";
import SaleForm from "./SaleForm";



const TabNav = () => {
    return (
        <div>
            <Link></Link>
            <Link></Link>
            <Route exact path="/" component={TabNav}/>
            <Route path="/login" component={Login}/>
            <Route path="/market" component={MarketList}/>
            <Route path="/post" component={SaleForm} />
        </div>
    )
}

export default TabNav
