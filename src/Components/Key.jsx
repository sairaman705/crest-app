import React from "react";
import "./Key.css";

const Key = () => {
  return (
    <div id="key-metrics" className="key-metrics-section">
      <div className="container">
        <h2>Why Choose CleverBooks for Inventory Management?</h2>
        <div class="metrics-grid">
          <div class="metric-item">
            <h3>Real-time Tracking</h3>
            <p>
              Keep track of your inventory in real-time with up-to-date
              information at your fingertips.
            </p>
          </div>
          <div class="metric-item">
            <h3>Cost Efficiency</h3>
            <p>
              Reduce costs by optimizing inventory levels and minimizing excess
              stock.
            </p>
          </div>
          <div className="metric-item">
            <h3>Data Analytics</h3>
            <p>
              Utilize powerful analytics to make informed decisions and improve
              your inventory management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Key;
