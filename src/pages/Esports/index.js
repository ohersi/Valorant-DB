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

    let live = [];
    let upcoming = [];
    let completed = [];

    matchData.map(matches => {
        if (matches.live === true) {
            return live.push(matches);
        }
        else if (matches.live === false && matches.completed === false) {
            return upcoming.push(matches);
        }
        else if (matches.completed === true) {
            return completed.push(matches);
        }
        return matchData;
    });

    return (
        <>
            {
                loading ? <Loader /> :
                    <div id="match-container">
                        <h1 className='headers'>ONGOING</h1>
                        <div id='live-container'>
                            {
                                live.map(games => (
                                    <div className="live-cards match-cards" key={games.id}>
                                        <p>LIVE</p>
                                        <h3>{games.eventName}</h3>
                                        <div className="teams-container">
                                            <div id="team1">
                                                <img id='team-logo' src={games.team1.logoUrl} alt={`${games.team1.name}-logo`} />
                                                <h4>{games.team1.name}</h4>
                                            </div>
                                            <div id='vs'>
                                                VS
                                            </div>
                                            <div id="team2">
                                                <img id='team-logo' src={games.team2.logoUrl} alt={`${games.team2.name}-logo`} />
                                                <h4>{games.team2.name}</h4>
                                            </div>
                                        </div>
                                        <div id="score-container">
                                            {
                                                games.matches.map((map, index) => (
                                                    <div className='scores' key={map.id}>
                                                        <p>MAP {index + 1}</p>
                                                        <p> {games.team1.name}: <span>{map.team1Score}</span></p>
                                                        <p>{games.team2.name}: <span>{map.team2Score}</span></p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <h1 className='headers'>UPCOMING MATCHES</h1>
                        <div id="upcoming-container">
                            {
                                upcoming.map(games => (
                                    <div div className="upcoming-cards match-cards" key={games.id}>
                                        <p>UPCOMING</p>
                                        <h4>{games.startDate}</h4>
                                        <h3>{games.eventName}</h3>
                                        <div className="teams-container">
                                            <div id="team1">
                                                <img id='team-logo' src={games.team1.logoUrl} alt={`${games.team1.name}-logo`} />
                                                <h5>{games.team1.name}</h5>
                                            </div>
                                            <div id='vs'>
                                                VS
                                            </div>
                                            <div id="team2">
                                                <img id='team-logo' src={games.team2.logoUrl} alt={`${games.team2.name}-logo`} />
                                                <h5>{games.team2.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <h1 className='headers'>RECENT RESULTS</h1>
                        <div id="completed-container">
                            {
                                completed.map(games => (
                                    <div div className="completed-cards match-cards" key={games.id}>
                                        <p>COMPLETED</p>
                                        <h4>{games.startDate}</h4>
                                        <h3>{games.eventName}</h3>
                                        <div className="teams-container">
                                            <div id="team1">
                                                <img id='team-logo' src={games.team1.logoUrl} alt={`${games.team1.name}-logo`} />
                                                <h4>{games.team1.name}</h4>
                                            </div>
                                            <div id='vs'>
                                                VS
                                            </div>
                                            <div id="team2">
                                                <img id='team-logo' src={games.team2.logoUrl} alt={`${games.team2.name}-logo`} />
                                                <h4>{games.team2.name}</h4>
                                            </div>
                                        </div>
                                        <div id="score-container">
                                            {
                                                games.matches.map((map, index) => (
                                                    <div className='scores' key={map.id}>
                                                        <p>MAP {index + 1}</p>
                                                        <p> {games.team1.name}: <span>{map.team1Score}</span></p>
                                                        <p>{games.team2.name}: <span>{map.team2Score}</span></p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }
        </>
    );
}

export default Esports;
