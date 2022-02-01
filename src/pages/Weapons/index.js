import React, { useEffect, useEFfect } from 'react';
// CSS
import './weapons.css'

const Weapons = ({ weaponsData, fetchVal }) => {

    // useEffect(() => {
    //     fetchVal()
    // }, []);

    return (
        <>
            <button onClick={fetchVal}>Test for video</button>
            <div id="weapons-container">
                {
                    weaponsData.map(weapons => (
                        <div key={weapons.displayName}>
                            <h2>{weapons.displayName}</h2>
                            <img id='weapons-portrait' src={weapons.displayIcon} alt="img" />
                            <h2>{weapons.skins[0]?.levels[0]?.displayName}</h2>
                            {console.log(weapons.skins[0].levels[0].streamedVideo)}

                            <video id='video' controls>
                                <source src={weapons.skins[0].levels[0].streamedVideo ?
                                    weapons.skins[0].levels[0].streamedVideo : null} type="video/mp4" />
                            </video>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Weapons;
