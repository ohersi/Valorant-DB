import React, { useState, useEffect } from 'react';
// CSS
import './cards.css'

const Cards = ({ cardData, fetchVal }) => {

    const [cardSelect, setCardSelect] = useState({activeObject: null})
    const [previewCard, setPreviewCard] = useState([])

    const toggleActive = (index) => {
        setCardSelect({ ...cardSelect, activeObject: cardData[index] })
        setPreviewCard(cardSelect.activeObject.largeArt)
    }

    useEffect(() => {
        fetchVal()
    }, []);
    console.log("clicked on", cardSelect)
    console.log("this is the preview card:", previewCard)

    return (
        <>
            <div id="main-div">
                <div id='lg-card-panel'>
                    <div id="lg-card">
                        <img src={previewCard} alt="preview-card" />
                    </div>
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