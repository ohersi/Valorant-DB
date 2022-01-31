import React, { useEffect } from 'react';

const Esports = ({ matchData, fetchMatches }) => {

    useEffect(() => {
        // fetchMatches();
    }, []);

    console.log(matchData)
    return (
        <>
        <button onClick={() => fetchMatches()}>Testing</button>
            <div id="match-container">
                {
                    matchData.map((matches) => (
                        <div key={matches.id}>
                            <img src={matches.league.image_url} alt="" style={{ width: '10rem' }} />
                            <h3>{matches.league.name}</h3>
                            <h4 style={{ color: 'red' }}>{matches.name}</h4>
                            <p>{matches.begin_at}</p>
                            <a href={matches.official_stream_url}>Watch on Twitch</a>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Esports;
