import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Components
import Skins from '../../components/Skins';
import Sidebar from '../../components/Sidebar';
// CSS
import './weapons.css'
import Loader from '../../components/Loader';

const Weapons = ({ weaponsData, fetchVal }) => {

    const [isClicked, setIsClicked] = useState(null)
    const [loading, setLoading] = useState(true)

    const toggleClick = (index) => {
        setIsClicked(isClicked === index ? null : index)
    }

    useEffect(() => {
        fetchVal();
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

    // Check skin level to display the highest
    const weaponLevels = (skins) => {
        if (skins.levels[4] !== undefined) {
            return skins.levels[4].streamedVideo;
        }
        else if (skins.levels[3] !== undefined) {
            return skins.levels[3].streamedVideo;
        }
        else if (skins.levels[2] !== undefined) {
            return skins.levels[2].streamedVideo;
        }
        else if (skins.levels[1] !== undefined) {
            return skins.levels[1].streamedVideo;
        }
        else if (skins.levels[0] !== undefined) {
            return skins.levels[0].streamedVideo;
        }
        else {
            return null
        }
    }

    return (
        <> {
            loading ? <Loader /> :
            <motion.div id='main-weapons' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div id="weapons-container">
                    {
                        weaponsData.map((weapons, index) => (
                            <div className='weapons' key={weapons.uuid} id={weapons.displayName}>
                                <h2>{weapons.displayName}</h2>
                                <img onClick={() => toggleClick(index)}
                                    className='weapons-portrait'
                                    src={weapons.displayIcon}
                                    alt={`${weapons.displayName}-weapon`}
                                />
                                {
                                    isClicked == index ?
                                        <Skins weapons={weapons} weaponLevels={weaponLevels} />
                                        : null
                                }
                            </div>
                        ))
                    }
                </div>
                <Sidebar weaponsData={weaponsData}/>
            </motion.div>
        }
            
        </>
    );
}

export default Weapons;
