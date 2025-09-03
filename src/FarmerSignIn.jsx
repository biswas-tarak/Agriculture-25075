// src/components/FarmerSignIn.jsx
import React, { useState } from 'react';
import './FarmerSignIn.css';

export default function FarmerSignIn({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    village: '',
    post: '',
    ps: '',
    district: '',
    state: '',
    email: '',
    contact: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit && onSubmit(formData);
    console.log('Submitted:', formData);
  }

  return (
    <div className="a">
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Farmer Registration</h2>

      {Object.entries(formData).map(([key, value]) => (
        <div className="form-group" key={key}>
          <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
            type={key === 'email' ? 'email' : key === 'contact' ? 'tel' : 'text'}
            id={key}
            name={key}
            value={value}
            onChange={handleChange}
            required
          />
          
        </div>
      ))}

      <button type="submit" className="btn">Submit</button>
    </form>
    </div>
  );
}
