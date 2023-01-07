import './App.css';
import React, { useState, useEffect } from 'react';
import ListOfSpaceXLaunches from './components/molecules/ListOfSpaceXLaunches';


function App() {

  const [spacexData, setSpacexData] = useState([]);

  const getSpacexData = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/launches');
    const data = await response.json();
    setSpacexData(data);
  }

  useEffect(() => {
    getSpacexData();
  }, []);

  return (
    <div className="App">
      <h1>SpaceX Launches</h1>
      <ListOfSpaceXLaunches spacexData={spacexData} />
    </div>
  );
}

export default App;
