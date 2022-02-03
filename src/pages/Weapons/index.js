import React, { useState, useEffect } from 'react';
import {motion, AnimateSharedLayout} from 'framer-motion'
// CSS
import './weapons.css'

const Weapons = ({ weaponsData, fetchVal }) => {

    const [isClicked, setIsClicked] = useState(null)

    const toggleClick = (index) => {
        setIsClicked( isClicked === index ? null : index)
    }

    useEffect(() => {
        fetchVal()
    }, []);

    // Check if skin level to display the highest
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
        <>
            {/* <button onClick={fetchVal}>Test for video</button> */}
            <div id="weapons-container">
                {
                    weaponsData.map((weapons,index) => (
                        <div className='weapons' key={weapons.uuid}>
                            <h2>{weapons.displayName}</h2>
                            <img onClick={() => toggleClick(index)} className='weapons-portrait' src={weapons.displayIcon} alt={`${weapons.displayName}-weapon`} />
                            
                            {
                                isClicked == index ? 
                                weapons.skins.map((skins) => (
                                    <div className='skins' key={skins.uuid}>
                                        <h4>{skins.displayName}</h4>
                                        {
                                            skins.chromas.map(chroma => (
                                                <img key={chroma.uuid} className='chroma' src={chroma.fullRender} alt={`${chroma.displayName} chroma`} />
                                            ))
                                        }
                                        {
                                            weaponLevels(skins) !== null ?
                                                <video id='video' controls preload="none">
                                                    <source src={weaponLevels(skins)} type="video/mp4" />
                                                </video>
                                                : null
                                        }
                                    </div>
                                ))
                                : null
                            }
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Weapons;
