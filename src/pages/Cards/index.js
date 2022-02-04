import React, { useState, useEffect } from 'react';
// CSS
import './cards.css'

const Cards = ({ cardData, fetchVal }) => {

    const [cardSelect, setCardSelect] = useState({ activeObject: null })

    const toggleActive = (index) => {
        setCardSelect({ ...cardSelect, activeObject: cardData[index] })
    }

    useEffect(() => {
        fetchVal()
    }, []);

    return (
        <>
            <div id="main-div">
                <div id='lg-card-panel'>
                    {
                        cardSelect.activeObject !== null ?
                            <div>
                                <h2>{cardSelect.activeObject.displayName}</h2>
                                <img id="lg-card" src={cardSelect.activeObject.largeArt} alt={`${cardSelect.activeObject.displayName}-card`} />
                            </div>
                            :
                            <div id='empty'>PREVIEW</div>
                    }
                </div>

                <div id="card-container">
                    {
                        cardData.map((card, index) => (
                            <div key={card.uuid}>
                                <h2>{card.displayName}</h2>
                                <img id='card-art'
                                    src={card.largeArt}
                                    onClick={() => toggleActive(index)}
                                    alt={`${card.displayName}-card`}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Cards;