import React from "react";
import "./Review.css";
import ReviewData from "./ReviewData"; 

const Review = () => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <h2>What Our Customers Are Saying</h2>
        <div className="reviews-grid">
          {ReviewData.map((review) => (
            <div key={review.id} className="review-item">
              {/* <img src={review.image}   /> */}
              <img src={review.image} alt="review_image" className="user-photo" />
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
