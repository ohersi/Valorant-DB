import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
// CSS
import './esports.css'

const Esports = ({ matchData, fetchMatches }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchMatches();
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, []);

    console.log(matchData)

    return (
        <>
            {
                loading ? <Loader /> :
                    <div id="match-container">
                        {
                            matchData.map((matches) => (
                                <div className='match-cards' key={matches.id}>
                                    <img src={matches.league.image_url} alt="" style={{ width: '10rem' }} />
                                    <h3>{matches.league.name}</h3>
                                    <h4>{matches.name}</h4>
                                    <p>{matches.begin_at}</p>
                                    <a id='twitch-link' href={matches.official_stream_url}>Watch on Twitch</a>
                                </div>
                            ))
                        }
                    </div>
            }
        </>
    );
}

export default Esports;
