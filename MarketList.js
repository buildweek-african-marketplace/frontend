import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../index.css"
import MarketCard from "./MarketCard";


export default function MarketList() {
    
      const [market, setMarket] = useState([]);
      useEffect(() => {
   
          axios
          .get("https://swapi.co/api/people/")
          .then(response => {
            console.log(response);
            setMarket(response.data.results);
            
          })
          .catch(error => {
            console.log("Server Error", error);
          })
        }, []);
      
  
    return (
      <div className="market-list-wrapper">
      <section >
        
          {market.map (markets => (
  
         <MarketCard market={markets} />
         
          ))}
         
        
      
      </section>
      </div>
    );
  }
  