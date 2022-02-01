import React, { useState, useEffect } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
// Components
import Panel from '../../components/Panel';
// CSS
import './agents.css'

const Agents = ({ agentData, fetchVal }) => {

    const [agentSelect, setAgentSelect] = useState({
        activeObject: null
    })
    // console.log(agentSelect)
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
    console.log(fullAgentCard)

    useEffect(() => {
        fetchVal();
    }, []);

    return (
        <>
            <div onClick={toggleFullAgent} id="main-agent">
                {
                    fullAgentCard && agentSelect.activeObject !== null ?
                        <AnimatePresence>
                          <Panel agentPanel={agentPanel} toggleActive={toggleActive} />  
                        </AnimatePresence>
                         :
                        <motion.div id="agents-container" layoutId="cards" >
                            {
                                agentData.map((agents, index) => (
                                    <motion.div key={agents.uuid} className={toggleStyles(index)} onClick={() => toggleActive(index)} type='crossfade' initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{duration: 0.4}}>
                                        <h2>{agents.displayName}</h2>
                                        <img id='agent-portrait' src={agents.displayIcon} alt="agent-profile-img" />
                                        <h3>{agents.role?.displayName}</h3>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                }
            </div>
        </>
    );
}

export default Agents;
