import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../index.css"
import MarketCard from "./MarketCard";


export default function MarketList() {
    
      const [market, setMarket] = useState([]);
      useEffect(() => {
   
          axios
          .get("https://lbs-african-marketplace.herokuapp.com/items")
          .then(response => {
            console.log(response);
            setMarket(response.data);
          })
          .catch(error => {
            console.log("Server Error", error);
          })
        }, []);
        console.log(market);
  
    return (
      <div className="market-list-wrapper">
      <section className="market-list grid-view">
        
          {market.map (markets => (
  
         <MarketCard market={markets} />
         
          ))}
         
        
      
      </section>
      </div>
    );
  }
  