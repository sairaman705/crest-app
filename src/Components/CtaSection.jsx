import React from "react";
import "./CtaSection.css";

const CtaSection = ({ handleModalOpen }) => {
  return (
    <div id="cta" className="cta-section">
      <div className="container">
        <h2>Ready to Take Your Business to the Next Level?</h2>
        <p>Sign up now and start benefiting from exclusive features that will boost your productivity.</p>
        <button className="cta-button" onClick={handleModalOpen}>Sign Up Now</button>
      </div>
    </div>
  );
};

export default CtaSection;
