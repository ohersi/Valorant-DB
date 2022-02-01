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
            console.log("Level 5")
            return skins.levels[4].streamedVideo;
        }
        else if (skins.levels[3] !== undefined) {
            console.log("Level 4")
            return skins.levels[3].streamedVideo;
        }
        else if (skins.levels[2] !== undefined) {
            console.log("Level 3")
            return skins.levels[2].streamedVideo;
        }
        else if (skins.levels[1] !== undefined) {
            console.log("Level 2")
            return skins.levels[1].streamedVideo;
        }
        else if (skins.levels[0] !== undefined) {
            console.log("Level 1")
            return skins.levels[0].streamedVideo;
        }
        else {
            console.log("empty")
            return null
        }
    }

    return (
        <>
            <button onClick={fetchVal}>Test for video</button>
            <div id="weapons-container">
                {
                    weaponsData.map(weapons => (
                        <div key={weapons.displayName}>
                            <h2>{weapons.displayName}</h2>
                            <img className='weapons-portrait' src={weapons.displayIcon} alt="img" />
                            {
                                weapons.skins.map(skins => (
                                    <div className='skins'>
                                        <h4>{skins.displayName}</h4>
                                        {
                                            skins.chromas.map(chroma => (
                                                <img className='chroma' src={chroma.fullRender} alt="chroma" />
                                            ))
                                        }
                                       {/* TODO: Hide videos with empty sources */}
                                        <video id='video' controls>
                                            <source src={weaponLevels(skins)} type="video/mp4" />
                                        </video>
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
