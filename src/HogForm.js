import React, { useState } from 'react';

const HogForm = ({ addHog }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [weight, setWeight] = useState('');
    const [greased, setGreased] = useState(false);
    const [highestMedal, setHighestMedal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addHog({ name, image, specialty, weight: Number(weight), greased, highestMedal });
        setName('');
        setImage('');
        setSpecialty('');
        setWeight('');
        setGreased(false);
        setHighestMedal('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add inputs for each field */}
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
            <input value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty" />
            <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" type="number" />
            <label>
                <input type="checkbox" checked={greased} onChange={() => setGreased(!greased)} />
            </label>
            <input value={highestMedal} onChange={(e) => setHighestMedal(e.target.value)} placeholder="Highest Medal" />
            <button type="submit">Add Hog</button>
        </form>
    );
};

export default HogForm;