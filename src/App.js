import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

console.log(process.env.REACT_APP_PANDASCORE_API_KEY)
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
        <button onClick={fetchMatches}>Test Match API</button>
        <button onClick={fetchVal}>Test Valorant-API</button>

        <div id="match-container">
          {
            matchData.map((matches) => (
              <div>
                <img src={matches.league.image_url} alt="" style={{ width: '10rem' }} />
                <h3>{matches.league.name}</h3>
                <h4 style={{ color: 'red' }}>{matches.name}</h4>
                <a href={matches.official_stream_url}>Watch on Twitch</a>
              </div>
            ))
          }
        </div>

        <div id="val-container">
          {
            valData.map(item => (
              <div key={item.displayName}>
                <h2>{item.isPlayableCharacter == true ?
                  item.displayName : null}</h2>
                <img id='val-portrait' src={item.isPlayableCharacter == true ? item.displayIcon : null} alt="" />
                <h3>{item.isPlayableCharacter == true ? item.role?.displayName : null}</h3>
              </div>
            ))
          }
        </div>



      </div>
    </>
  );
}

export default App;
