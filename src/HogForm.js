import React, { useState } from "react";

const HogForm = ({ addHog }) => {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [weight, setWeight] = useState("");
  const [medal, setMedal] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name,
      specialty,
      greased,
      weight: parseInt(weight),
      medal,
      image,
    };
    addHog(newHog);
    // Clear the form after submission
    setName("");
    setSpecialty("");
    setGreased(false);
    setWeight("");
    setMedal("");
    setImage("");
  };

  return (
    <form className="hog-form" onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Add a New Hog</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="specialty">Specialty:</label>
        <input
          type="text"
          id="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="greased">Greased:</label>
        <input
          type="checkbox"
          id="greased"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
          style={{ marginLeft: '10px' }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="medal">Highest Medal Achieved:</label>
        <input
          type="text"
          id="medal"
          value={medal}
          onChange={(e) => setMedal(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>

      <button type="submit" className="submit-button" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Add Hog
      </button>
    </form>
  );
};

export default HogForm;
