import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import axios from 'axios';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
// Components
import Nav from './components/Nav';
// Pages
import Home from './pages/Home';
import Agents from './pages/Agents';
import Weapons from './pages/Weapons';
import Maps from './pages/Maps';
import Cards from './pages/Cards';
import Esports from './pages/Esports';
// CSS
import './App.css'
// Images
import largeImages from './images';

const App = () => {

  const [matchData, setMatchData] = useState([]);
  const [agentData, setAgentData] = useState([]);
  const [weaponsData, setWeaponsData] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [cardData, setCardData] = useState([]);

  const location = useLocation();

  const fetchMatches = async () => {
    try {
      const response = await axios.get('https://rib-scrpr-api.herokuapp.com/matches')
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

      // removing duplicate Sova object
      let filteredArr = ''
      agents.map(() => {
        filteredArr = agents.filter(item => item.uuid !== 'ded3520f-4264-bfed-162d-b080e2abccf9')
      })

      // Going through each agent, add index (an object) of each largeImages array to each agent
      const newAgentArr = filteredArr.map((obj, index) => (
        { ...obj, largeImages: largeImages[index] }
      ))

      setAgentData(newAgentArr)
      setWeaponsData(weapons)
      setMapData(maps)
      setCardData(cards)
    }
    catch (error) {
      console.error(error)
    }
  }
  
  return (
    <>
      <AnimateSharedLayout>
        <div id='main'>
          <Nav />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='agents' element={<Agents agentData={agentData} fetchVal={fetchVal} />} />
            <Route path='weapons' element={<Weapons weaponsData={weaponsData} fetchVal={fetchVal} />} />
            <Route path='maps' element={<Maps mapData={mapData} fetchVal={fetchVal} />} />
            <Route path='cards' element={<Cards cardData={cardData} fetchVal={fetchVal} />} />
            <Route path='esports' element={<Esports matchData={matchData} fetchMatches={fetchMatches} />} />
          </Routes>
          </AnimatePresence>
          
        </div>
      </AnimateSharedLayout>

    </>
  );
}

export default App;
