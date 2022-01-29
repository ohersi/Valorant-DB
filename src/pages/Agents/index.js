import React, { useState, useEffect } from 'react';

const Agents = ({ agentData, fetchVal }) => {

    const [agentSelect, setAgentSelect] = useState({
        activeObject: null
    })
    console.log(agentSelect)


    const toggleActive = (index) => {
        setAgentSelect({ ...agentSelect, activeObject: agentData[index] })
    }
    const toggleStyles = (index) => {
        if (agentSelect.activeObject === agentData[index]) {
            return 'cards active'
        } else {
            return 'cards inactive'
        }
    }

    useEffect(() => {
        fetchVal();
    }, []);

    return (
        <>
            <div id="agents-container">
                {
                    agentData.map((agents, index) => (
                        <div key={agents.uuid} className={toggleStyles(index)} onClick={() => toggleActive(index)}>
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
