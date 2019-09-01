import React, {useState} from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Registration from "./components/Registration";
import RegLogin from "./components/RegLogin";
import HomePage from "./components/HomePage";
import MarketList from "./components/MarketList";
import SaleForm from "./components/SaleForm";
import WelcomePage from "./components/WelcomePage";
import MarketPrice from "./components/MarketPrice";


export default function App() {
  const [registration, setRegistration] = useState({ username: "", password: "", department: "" });
  const [isRegistered, setIsRegistered] = useState(false);

const changeHandler = (e) => {
   setRegistration({ ...registration, [e.target.name]:e.target.value});
}

const register = (newUser) => {
   axios
   .post("https://lbs-african-marketplace.herokuapp.com/auth/register", newUser)
   .then(response =>{
       console.log(response);
       setIsRegistered(true);
   })
   .catch(err =>{
       console.log(err.message);
   })
} 

const submitRegistration = (e) => {
   e.preventDefault()
   const newRegistration = {
       username: registration.username,
       password: registration.password,
       department: registration.department
   }
   register(newRegistration)
   setIsRegistered(false)
   
}


  return (
    <div>
      <TabNav />
      <Route exact path="/" render={ (props)=> <HomePage {...props} /> } />
      <Route exact path="/register" render={(props)=><Registration {...props}
      registration={registration} isRegistered={isRegistered}
      changeHandler={changeHandler} submitRegistration={submitRegistration} />} />

      <Route exact path="/reglog" render={(props)=><RegLogin {...props} 
      registration={registration} />} />

      <Route exact path="/market" component={MarketList}/>
      <Route exact path="/post" component={SaleForm} />
      <Route exact path="/welcome" component={WelcomePage} />
      <Route exact path="/marketprice" component={MarketPrice} />
    </div>
  );
}
