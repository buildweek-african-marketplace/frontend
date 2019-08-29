import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import styles from '../index.css'

export default function HomePage() {
  return (
    <div>
      <section>
        <h2>Market Pricing</h2>
        <p>Setting your prices just got easier! Discover real-time market prices for the items you sell.</p>
        <NavLink to="/market">
          <button>View Market Pricing</button>
        </NavLink>
      </section>
      <section>
        <h2>Post Your Item</h2>
        <p>Grow your business! Sell or trade your items with Cross-border Traders in your community.</p>
        <NavLink to="/post">
          <button>Create Post</button>
        </NavLink>
      </section>
      <Route exact path="/market" component={MarketList} />
      <Route exact path="/post" component={SaleForm} />
    </div>
  );
}