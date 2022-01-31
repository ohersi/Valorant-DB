import React, { useState, useEffect } from 'react';

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
                <div id='test'>
                    <div id="pc">
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
                                    alt="card-img"
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