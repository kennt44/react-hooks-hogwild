import React, { useState } from 'react';

const HogForm = ({ addHog }) => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [medal, setMedal] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [greased, setGreased] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name,
      specialty,
      weight: parseInt(weight),
      greased,
      medal,
      imageUrl,
    };
    addHog(newHog);
    setName('');
    setSpecialty('');
    setWeight('');
    setMedal('');
    setImageUrl('');
    setGreased(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target .value)} required />
      <input type="text" placeholder="Specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required />
      <input type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
      <input type="text" placeholder="Highest Medal Achieved" value={medal} onChange={(e) => setMedal(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      <label>
        <input type="checkbox" checked={greased} onChange={() => setGreased(!greased)} />
        Greased
      </label>
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;