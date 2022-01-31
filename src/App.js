import React, { useState, useEffect } from 'react';
import {Routes, Route } from 'react-router-dom'
import axios from 'axios';
// Components
import Nav from './components';
import Panel from './components/Panel';
// Pages
import Home from './pages/Home';
import Agents from './pages/Agents';
import Weapons from './pages/Weapons';
import Maps from './pages/Maps';
import Cards from './pages/Cards';
import Esports from './pages/Esports';
// CSS
import './App.css'

const App = () => {

  const [matchData, setMatchData] = useState([])
  const [agentData, setAgentData] = useState([])
  const [weaponsData, setWeaponsData] = useState([])
  const [mapData, setMapData] = useState([])
  const [cardData, setCardData] = useState([])

  // ------------PandaScore-API -------------------- //
  const options = {
    method: 'GET',
    url: 'https://api.pandascore.co/valorant/matches',
  params: {sort: 'begin_at', page: '1', per_page: '50'},
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
  // ------------Valorant-API -------------------- //
  const fetchVal = async () => {
    try {
      const response = await axios.all([
        axios.get('https://valorant-api.com/v1/agents'),
        axios.get('https://valorant-api.com/v1/weapons'),
        axios.get('https://valorant-api.com/v1/maps'),
        axios.get('https://valorant-api.com/v1/playercards')
      ]);

      let agents = response[0].data.data
      let weapons = response[1].data.data
      let maps = response[2].data.data
      let cards = response[3].data.data

      //removing duplicate Sova object
      let newAgentsArr = ''
      agents.map(() => {
        newAgentsArr = agents.filter(item => item.uuid !== 'ded3520f-4264-bfed-162d-b080e2abccf9' )
      })

      setAgentData(newAgentsArr)
      setWeaponsData(weapons)
      setMapData(maps)
      setCardData(cards)
    }
    catch (error) {
      console.error(error)
    }
  }

  // console.log(cardData)

  return (
    <>
      <div id='main'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='agents' element={<Agents agentData={agentData} fetchVal={fetchVal}/>} /> 
          <Route path='weapons' element={<Weapons weaponsData={weaponsData} fetchVal={fetchVal}/>} /> 
          <Route path='maps' element={<Maps mapData={mapData} fetchVal={fetchVal}/>} /> 
          <Route path='cards' element={<Cards cardData={cardData} fetchVal={fetchVal}/>} /> 
          <Route path='esports' element={<Esports matchData={matchData} fetchMatches={fetchMatches}/>} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
