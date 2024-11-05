import React, { useState, useEffect } from 'react';
import HogForm from './HogForm';
import HogList from './HogList';
import porkersData from './porkers_data';

const App = () => {
  const [hogs, setHogs] = useState([]);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [hiddenHogs, setHiddenHogs] = useState([]);

  useEffect(() => {
    setHogs(porkersData);
  }, []);

  const addHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const toggleGreasedFilter = () => {
    setFilterGreased(!filterGreased);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const toggleHogVisibility = (name) => {
    if (hiddenHogs.includes(name)) {
      setHiddenHogs(hiddenHogs.filter(hog => hog !== name));
    } else {
      setHiddenHogs([...hiddenHogs, name]);
    }
  };

  const filteredHogs = filterGreased ? hogs.filter(hog => hog.greased) : hogs;

  const sortedHogs = filteredHogs.sort((a, b) => {
    return sortBy === 'name' ? a.name.localeCompare(b.name) : a.weight - b.weight;
  });

  return (
    <div className="ui container">
      <h1>HogWild Piggy</h1>
      <HogForm addHog={addHog} />
      <div>
        <label>
          <input type="checkbox" checked={filterGreased} onChange={toggleGreasedFilter} />
          Show Greased Hogs
        </label>
        <select onChange={handleSortChange}>
          <option value="name">Sort by Name</option>
          <option value="weight">Sort by Weight</option>
        </select>
      </div>
      <HogList hogs={sortedHogs} hiddenHogs={hiddenHogs} toggleHogVisibility={toggleHogVisibility} />
    </div>
  );
};

export default App;