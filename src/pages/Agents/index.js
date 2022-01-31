import React, { useState, useEffect } from 'react';
import Panel from '../../components/Panel';

const Agents = ({ agentData, fetchVal }) => {

    const [agentSelect, setAgentSelect] = useState({
        activeObject: null
    })
    console.log(agentSelect)
    const [fullAgentCard, setFullAgentCard] = useState(false)
    const toggleFullAgent = e => {
        e.preventDefault()
        setFullAgentCard(!fullAgentCard)
    }


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

    let agentPanel = agentSelect.activeObject
    console.log(agentPanel)

    useEffect(() => {
        fetchVal();
    }, []);

    return (
        <>
        <div onClick={toggleFullAgent} id="main-agent">
            {
            fullAgentCard ? 
            <Panel agentPanel={agentPanel}  toggleActive={toggleActive}/> :
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
}
        </div>
        
        
        </>
    );
}

export default Agents;
