import React, { useState, useEffect } from 'react';
import HogForm from './HogForm';
import HogTile from './HogTile';
import FilterSort from './FilterSort';
import porkersData from './porkers_data'; // Assuming porkers_data is the data source
import Nav from './Nav'; 
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const App = () => {
  const [hogs, setHogs] = useState([]);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortType, setSortType] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]);

  // Load the hog data on initial render
  useEffect(() => {
    setHogs(porkersData);
  }, []);

  // Function to filter and sort hogs
  const getVisibleHogs = () => {
    let filteredHogs = hogs;

    // Filter by greased hogs if the filter is checked
    if (filterGreased) {
      filteredHogs = filteredHogs.filter((hog) => hog.greased);
    }

    // Sorting by name or weight
    if (sortType === "name") {
      filteredHogs = filteredHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "weight") {
      filteredHogs = filteredHogs.sort((a, b) => a.weight - b.weight);
    }

    // Return the filtered, sorted hogs that are not hidden
    return filteredHogs.filter((hog) => !hiddenHogs.includes(hog.name));
  };

  // Function to add a new hog to the list
  const addNewHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  // Function to hide a hog from the list
  const hideHog = (hogName) => {
    setHiddenHogs([...hiddenHogs, hogName]);
  };

  return (
    <div className="App">
      <Nav />
      <h1>Porker App</h1>

      {/* Filter and Sort Controls */}
      <FilterSort
        filterGreased={filterGreased}
        setFilterGreased={setFilterGreased}
        setSortType={setSortType}
      />

      {/* Form to Add New Hog */}
      <HogForm addNewHog={addNewHog} />

      {/* Grid Layout for Displaying Hogs */}
      <div className="ui grid container">
        {getVisibleHogs().map((hog) => (
          <div className="ui eight wide column" key={hog.name}>
            <HogTile hog={hog} hideHog={hideHog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
