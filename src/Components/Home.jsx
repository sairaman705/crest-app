import React, { useState } from "react";
import "./Home.css";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Key from "./Key";
import Review from "./Review";
import Features from "./Features";
import CtaSection from "./CtaSection";
import Footer from "./Footer";
import Modal from "./Modal"; // Import the Modal component

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="hero">
        <Navbar />
        <div className="hero_content">
          <div className="left_content">
            <h2>Every order fulfilled, on time</h2>
            <p>Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</p>
            <button className="start_button" onClick={handleModalOpen}>
              Get started with Crest
            </button> 
          </div>
          <div className="right_content">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="placeholder" />
          </div>
        </div>
      </div>

      {/* Cards */}
      <Cards />

      {/* Key matrices */}
      <Key />

      {/* Reviews */}
      <Review />

      {/* Features */}
      <Features />

      {/* Display CTA to users */}
      <CtaSection handleModalOpen={handleModalOpen} />

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {isModalOpen && <Modal handleClose={handleModalClose} />}
    </>
  );
}

export default Home;
