import React from 'react';
import { motion } from 'framer-motion';
// CSS
import './panel.css'

const Panel = ({ agentPanel, toggleF }) => {
    console.log(agentPanel)
    return (
        <> <motion.div className="panel-container" transition={{ duration: 0.4}} layoutId="cards" >
            {
                //agentPanel is null until an agent is clicked, ternary to prevent page from rendering empty prop
                agentPanel == null ? null :
                    <motion.div className='panel' type="crossfade" initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 1}}>
                        <h2>{agentPanel.displayName}</h2>
                        <img id='agent-renders' src={agentPanel.largeImages.img ? agentPanel.largeImages.img : agentPanel.displayIcon} alt="agent-profile-img" />
                        <h3>{agentPanel.role?.displayName}</h3>
                        <h4>{agentPanel.description}</h4>
                    </motion.div>
            }
        </motion.div>

        </>
    );
}

export default Panel;
