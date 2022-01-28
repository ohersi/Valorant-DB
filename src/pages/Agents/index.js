import React, { useEffect } from 'react';

const Agents = ({ valData, fetchVal }) => {

    useEffect(() => {
        fetchVal();
    }, []);

    return (
        <>
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
        </>
    );
}

export default Agents;
