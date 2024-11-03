import React, { useState } from 'react';
import { Container, Card } from 'semantic-ui-react';
import porkersData from './data/porkers_data'; // Make sure this is your correct data import
import HogTile from './components/HogTile';
import HogDetail from './components/HogDetail';
import FilterSort from './components/FilterSort';
import HogForm from './components/HogForm';

const App = () => {
  const [hogs, setHogs] = useState(porkersData);
  const [selectedHog, setSelectedHog] = useState(null);
  const [showGreased, setShowGreased] = useState(false);
  const [sortOrder, setSortOrder] = useState('');

  const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs;
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortOrder === 'name') return a.name.localeCompare(b.name);
    if (sortOrder === 'weight') return a.weight - b.weight;
    return 0;
  });

  const toggleGreased = () => setShowGreased(!showGreased);
  const handleSort = (order) => setSortOrder(order);
  const addHog = (newHog) => setHogs([...hogs, newHog]);

  return (
    <Container>
      <h1>HogWild</h1>
      <FilterSort onFilter={toggleGreased} onSort={handleSort} onToggleGreased={toggleGreased} />
      <Card.Group>
        {sortedHogs.map(hog => (
          <HogTile key={hog.name} hog={hog} onClick={setSelectedHog} />
        ))}
      </Card.Group>
      {selectedHog && <HogDetail hog={selectedHog} />}
      <HogForm addHog={addHog} />
    </Container>
  );
};

export default App;