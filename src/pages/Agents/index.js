import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Components
import Panel from '../../components/Panel';
import Loader from '../../components/Loader';
// CSS
import './agents.css'

const Agents = ({ agentData, fetchAgents }) => {

    const [agentSelect, setAgentSelect] = useState({
        activeObject: null
    })
    // console.log(agentSelect)
    const [fullAgentCard, setFullAgentCard] = useState(false)
    const [loading, setLoading] = useState(true)

    const toggleFullAgent = () => {
        setFullAgentCard(!fullAgentCard)
    }

    const toggleActive = (index) => {
        setAgentSelect({ ...agentSelect, activeObject: agentData[index] })
    }
    let agentPanel = agentSelect.activeObject
    // console.log(fullAgentCard)

    useEffect(() => {
        fetchAgents();
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

    return (
        <>
            {
                loading ?
                    <Loader />
                    :
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <AnimatePresence initial={false}>
                            <div id="main-agent">
                                {/* <h1 id='header'>AGENTS</h1> */}
                                {
                                    fullAgentCard && agentSelect.activeObject !== null ?
                                        <Panel agentPanel={agentPanel}
                                            toggleActive={toggleActive}
                                            toggleFullAgent={toggleFullAgent} />
                                        :
                                        <motion.div id="agents-container" layoutId="cards">
                                            {
                                                agentData.map((agents, index) => (
                                                    <motion.div
                                                        whileHover={{  backgroundColor: "#FF4454" }}
                                                        key={agents.uuid}
                                                        className='agent-cards'
                                                        onClick={() => { toggleActive(index); toggleFullAgent() }}
                                                        type='crossfade'
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.4 }}
                                                    >
                                                        <h2>{agents.displayName}</h2>
                                                        <img id='agent-portrait' src={agents.displayIcon}
                                                            alt={`${agents.displayName}-portrait`} />
                                                        <h3>{agents.role?.displayName}</h3>
                                                    </motion.div>
                                                ))
                                            }
                                        </motion.div>
                                }
                            </div>
                        </AnimatePresence>

                    </motion.div>
            }
        </>
    );
}

export default Agents;
