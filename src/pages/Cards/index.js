import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
// Components
import Loader from '../../components/Loader';
// CSS
import './cards.css'

const Cards = ({ cardData, fetchCards }) => {

    const [cardSelect, setCardSelect] = useState({ activeObject: null })
    const [loading, setLoading] = useState(true)

    const toggleActive = (index) => {
        setCardSelect({ ...cardSelect, activeObject: cardData[index] })
    }

    useEffect(() => {
        fetchCards();
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

    return (
        <> {
            loading ? <Loader /> :
                <div id="main-div">
                    <div id='lg-card-panel'>
                        {
                            cardSelect.activeObject !== null ?
                                <div>
                                    <h1>{cardSelect.activeObject.displayName}</h1>
                                    <img id="lg-card" src={cardSelect.activeObject.largeArt} alt={`${cardSelect.activeObject.displayName}-card`} />
                                </div>
                                :
                                <div id='empty'></div>
                        }
                    </div>

                    <div id="card-container">
                        {
                            cardData.map((card, index) => (
                                <div key={card.uuid}>
                                    {/* <h2>{card.displayName}</h2> */}
                                    <motion.img id='card-art' whileHover={
                                        { scale: 1.03, transition: { duration: 0.3, ease: 'easeInOut' } }}
                                        src={card.largeArt}
                                        onClick={() => toggleActive(index)}
                                        alt={`${card.displayName}-card`}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
        }
        </>
    );
}

export default Cards;