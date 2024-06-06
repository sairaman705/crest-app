import React from "react";
import "./Talk.css";

const Talk = () => {
  return (
    <div className="talk-to-us-container">
      <h2>Talk to Us</h2>
      <form className="talk-to-us-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Talk;
