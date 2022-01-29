import React, { useEffect } from 'react';

const Agents = ({ agentData, fetchVal }) => {

    useEffect(() => {
        fetchVal();
    }, []);

    return (
        <>
            <div id="agents-container">
                {
                    agentData.map(agents => (
                        <div key={agents.uuid}>
                            <h2>{agents.displayName}</h2>
                            <img id='agent-portrait' src={agents.displayIcon} alt="agent-profile-img" />
                            <h3>{agents.role?.displayName}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Agents;
