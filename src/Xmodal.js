import React, { useState } from "react";
import "./App.css";

function XModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const { username, email, dob, phone } = formData;

    if (!username) {
      alert("Please fill out the Username field.");
      return false;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email. Please check your email address.");
      return false;
    }
    if (!dob) {
      alert("Please fill out the Date of Birth field.");
      return false;
    }
    if (new Date(dob) > new Date()) {
      alert("Invalid Date of Birth. Date of birth cannot be in the future.");
      return false;
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setIsModalOpen(false);
      setFormData({ username: "", email: "", dob: "", phone: "" });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevents modal closing on inner click
          >
            <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default XModal;
