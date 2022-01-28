import React, { useState, useEffect } from 'react';
import {Routes, Route } from 'react-router-dom'
import axios from 'axios';
// Components
import Nav from './components';
// Pages
import Home from './pages/Home';
import Agents from './pages/Agents';
import Esports from './pages/Esports';
// CSS
import './App.css'

const App = () => {

  const [matchData, setMatchData] = useState([])
  const [valData, setValData] = useState([])

  const options = {
    method: 'GET',
    url: 'https://api.pandascore.co/valorant/matches',
    params: { sort: '', page: '1', per_page: '10' },
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_PANDASCORE_API_KEY}`
    }
  };

  const fetchMatches = async () => {
    try {
      const response = await axios.request(options)
      setMatchData(response.data);
    }
    catch (error) {
      console.error(error)
    }
  }

  const fetchVal = async () => {
    try {
      const response = await axios.get('https://valorant-api.com/v1/agents')
      setValData(response.data.data)

    }
    catch (error) {
      console.error(error)
    }
  }

  console.log(valData)

  // useEffect(() => {
  //   fetchMatches()
  // }, []);

  return (
    <>
      <div id='main'>
        < Nav />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='agents' element={<Agents valData={valData} fetchVal={fetchVal}/>} /> 
          <Route path='esports' element={<Esports matchData={matchData} fetchMatches={fetchMatches}/>} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
