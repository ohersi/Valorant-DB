import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// CSS
import './panel.css'

const Panel = ({ agentPanel, toggleFullAgent }) => {

    const [isHovering, setIsHovering] = useState(false)

    return (
        <>
            <motion.div onClick={toggleFullAgent} className="panel-container" transition={{ duration: 0.4 }} layoutId="cards" >
                {
                    //agentPanel is null until an agent is clicked, ternary to prevent page from rendering empty prop
                    agentPanel == null ? null :
                        <motion.div className='panel' type="crossfade" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}>
                            <h2>{agentPanel.displayName}</h2>
                            <motion.img id='agent-renders'
                                onHoverStart={() => setIsHovering(true)}
                                onHoverEnd={() => setIsHovering(false)}
                                src={agentPanel.largeImages.img ?
                                    agentPanel.largeImages.img
                                    : agentPanel.displayIcon}
                                alt={`${agentPanel.displayName}-agent`} />
                            {
                                agentPanel.background !== null ?
                                    <img id='agent-background' src={agentPanel.background} alt={`${agentPanel.displayName}-background`} />
                                    : null
                            }
                            <div className="info">
                                <h3>{agentPanel.role?.displayName}</h3>
                                <h4>{agentPanel.description}</h4>
                            </div>
                        </motion.div>
                }
            </motion.div>

        </>
    );
}

export default Panel;
