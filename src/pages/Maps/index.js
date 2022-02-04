import React, { useEffect } from 'react';
// Components
import Sidebar from '../../components/Sidebar';
// CSS
import './maps.css'

const Maps = ({ mapData, fetchVal }) => {

    useEffect(() => {
        fetchVal()
    }, []);

    return (
        <>
            <div id="main-map">
                <div id="map-container">
                    {
                        mapData.map(map => (
                            <div key={map.uuid} id={map.displayName}>
                                <h2>{map.displayName}</h2>
                                <h4>{map.coordinates}</h4>
                                <img id='map-splash' src={map.splash} alt={`${map.displayName}-map`} />
                            </div>
                        ))
                    }
                </div>
                <Sidebar mapData={mapData}/>
            </div>
        </>
    );
}

export default Maps;