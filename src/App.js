import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {

  const [valData, setValData] = useState([])

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

  return (
    <>
      <div id='main'>

        <button onClick={fetchVal}>Test Valorant-API</button>

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
