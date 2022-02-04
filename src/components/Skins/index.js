import React, { useState } from 'react';
// CSS 
import './skins.css'

const Skins = ({ weapons, weaponLevels }) => {

    const [isClicked, setIsClicked] = useState(null)

    const toggleClick = (index) => {
        setIsClicked(isClicked === index ? null : index)
    }

    return (
        <>
            <div id='skins-container'>
                {
                    weapons.skins.map((skins, index) => (
                        <div className='skins' key={skins.uuid}>
                            <h4>{skins.displayName}</h4>
                            {
                                skins.chromas.map(chroma => (
                                    <img key={chroma.uuid} onClick={() => toggleClick(index)}
                                        className='chroma' src={chroma.fullRender}
                                        alt={`${chroma.displayName} chroma`}
                                    />
                                ))
                            }
                            {
                                isClicked == index ?
                                    (
                                        weaponLevels(skins) !== null ?
                                            <video id='video' controls preload="none">
                                                <source src={weaponLevels(skins)} type="video/mp4" />
                                            </video>
                                            : null
                                    )
                                    : null
                            }
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Skins;
