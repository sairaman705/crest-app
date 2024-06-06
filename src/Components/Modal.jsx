import React from 'react';
import './Modal.css';

const Modal = ({ handleClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>&times;</span>
        <h2>Sign Up for CleverBooks</h2>
        <form>
          <label>
            First name*
            <input type="text" name="first_name" required />
          </label>
          <label>
            Last name*
            <input type="text" name="last_name" required />
          </label>
          <label>
            Work email*
            <input type="email" name="work_email" required />
          </label>
          <label>
            Phone number*
            <input type="tel" name="phone_number" placeholder="Enter your phone number here" required />
          </label>
          <label>
            Company name*
            <input type="text" name="company_name" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
