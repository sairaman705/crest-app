import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards_container">
      <h2>Issues targeted by Crest</h2>
      <div className="cards_detail">
        <div className="cards">
          <div className="card_icon">
            <i class="bx bx-list-check"></i>
          </div>
          <div className="card_content">
            <h3>What to Order</h3>
            <p>
              Get accurate demand and days to stock out. Automate purchase
              planning so you can always have what you need for your next sales
              cycle.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card_icon">
            <i class='bx bx-shopping-bag'></i>
          </div>
          <div className="card_content">
            <h3>When to Order</h3>
            <p>
            Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card_icon">
            <i class='bx bx-border-all'></i>
          </div>
          <div className="card_content">
            <h3>How much to stock</h3>
            <p>
            Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card_icon">
            <i class='bx bx-home'></i>
          </div>
          <div className="card_content">
            <h3>Where to place</h3>
            <p>
            Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
