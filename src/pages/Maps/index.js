import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
// Components
import Sidebar from '../../components/Sidebar';
import Loader from '../../components/Loader';
// CSS
import './maps.css'

const Maps = ({ mapData, fetchVal }) => {

    const [loading, setLoading] = useState(true)
    
    const fadein = { 
        duration: 0.4, 
        ease: [.49,.09,.55,1.03] 
    };

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
                                    <div className='maps' key={map.uuid} id={map.displayName}>
                                        <motion.div initial={{opacity: 0, y: 20}} 
                                        animate={{opacity: 1, y: 0, transition: {delay: 0.3, ...fadein} }}
                                        className='info'>
                                        <h2 id='map-name'>{map.displayName}</h2>
                                        <h4>{map.coordinates}</h4>
                                        </motion.div>
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