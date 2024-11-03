// src/App.js
import React, { useState } from 'react';
import hogs from './porkers_data';
import Nav from './components/Nav';
import HogTile from './components/HogTile';
import HogForm from './components/HogForm';

const App = () => {
    const [hogsData, setHogsData] = useState(hogs);
    const [showGreased, setShowGreased] = useState(false);
    const [sortBy, setSortBy] = useState('name');
    const [hiddenHogs, setHiddenHogs] = useState([]);

    const toggleGreased = () => setShowGreased(!showGreased);
    const handleSortChange = (e) => setSortBy(e.target.value);
    const handleHideHog = (name) => setHiddenHogs([...hiddenHogs, name]);

    const filteredHogs = showGreased ? hogsData.filter(hog => hog.greased) : hogsData;
    const sortedHogs = filteredHogs.sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return a.weight - b.weight;
    });

    const addHog = (newHog) => {
        setHogsData([...hogsData, newHog]);
    };

    return (
        <div>
            <Nav toggleGreased={toggleGreased} handleSortChange={handleSortChange} />
            <HogForm addHog={addHog} />
            <div className="ui grid container">
                {sortedHogs.map(hog => (
                    !hiddenHogs.includes(hog.name) && (
                        <HogTile key={hog.name} hog={hog} handleHideHog={handleHideHog} />
                    )
                ))}
            </div>
        </div>
    );
};

export default App;