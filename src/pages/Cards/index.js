import React, { useEffect } from 'react';

const Cards = ({ cardData, fetchVal }) => {

    useEffect(() => {
        fetchVal()
    }, []);
    return (
        <>
        <div id="card-container">
            {
                cardData.map(card => (
                    <div key={card.uuid}>
                        <h2>{card.displayName}</h2>
                        <img id='card-art' src={card.largeArt} alt="card-img" />
                    </div>
                ))
            }
        </div>
    </>
    );
}

export default Cards;