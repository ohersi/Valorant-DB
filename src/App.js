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

  // ------------Rib-Scrpr-API -------------------- //
  const fetchMatches = async () => {
    try {
      const response = await axios.get('https://rib-scrpr-api.onrender.com/matches')
      setMatchData(response.data);
    }
    catch (error) {
      console.error(error)
    }
  }

  // ------------Valorant-API -------------------- //

  const fetchAgents = async () => {
    try {
      const response = await axios.get('https://valorant-api.com/v1/agents');
      let agents = response.data.data;

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

    } catch (error) {
      console.error(error)
    }
  }

  const fetchWeapons = async () => {
    try {
      const response = await axios.get('https://valorant-api.com/v1/weapons');
      let weapons = response.data.data;
      setWeaponsData(weapons);

    } catch (error) {
      console.error(error)
    }
  }

  const fetchMaps = async () => {
    try {
      const response = await axios.get('https://valorant-api.com/v1/maps');
      let maps = response.data.data;
      setMapData(maps);

    } catch (error) {
      console.error(error)
    }
  }

  const fetchCards = async () => {
    try {
      const response = await axios.get('https://valorant-api.com/v1/playercards');
      let cards = response.data.data;
      setCardData(cards);

    } catch (error) {
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
              <Route path='agents' element={<Agents agentData={agentData} fetchAgents={fetchAgents} />} />
              <Route path='weapons' element={<Weapons weaponsData={weaponsData} fetchWeapons={fetchWeapons} />} />
              <Route path='maps' element={<Maps mapData={mapData} fetchMaps={fetchMaps} />} />
              <Route path='cards' element={<Cards cardData={cardData} fetchCards={fetchCards} />} />
              <Route path='esports' element={<Esports matchData={matchData} fetchMatches={fetchMatches} />} />
            </Routes>
          </AnimatePresence>

        </div>
      </AnimateSharedLayout>

    </>
  );
}

export default App;
