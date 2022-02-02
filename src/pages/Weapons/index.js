import React, { useEffect, useEFfect } from 'react';
// CSS
import './weapons.css'

const Weapons = ({ weaponsData, fetchVal }) => {

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
                    weaponsData.map(weapons => (
                        <div key={weapons.uuid}>
                            <h2>{weapons.displayName}</h2>
                            <img className='weapons-portrait' src={weapons.displayIcon} alt={`${weapons.displayName}-weapon`} />
                            {
                                weapons.skins.map(skins => (
                                    <div className='skins' key={skins.uuid}>
                                        <h4>{skins.displayName}</h4>
                                        {
                                            skins.chromas.map(chroma => (
                                                <img key={chroma.uuid} className='chroma' src={chroma.fullRender} alt={`${chroma.displayName} chroma`} />
                                            ))
                                        }
                                        {
                                            weaponLevels(skins) !== null ?
                                                <video id='video' controls>
                                                    <source src={weaponLevels(skins)} type="video/mp4" />
                                                </video>
                                                : null
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Weapons;
