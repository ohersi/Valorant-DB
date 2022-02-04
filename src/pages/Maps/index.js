import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
// Components
import Sidebar from '../../components/Sidebar';
// CSS
import './maps.css'

const Maps = ({ mapData, fetchVal }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchVal();
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

    return (
        <>
            {
                loading ? <Loader /> :
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
                        <Sidebar mapData={mapData} />
                    </div>
            }
        </>
    );
}

export default Maps;