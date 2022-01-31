import React from 'react';

const Panel = ({ agentPanel }) => {
    console.log(agentPanel)
    return (
        <>
            {
                //agentPanel is null until an agent is clicked, ternary to prevent page from rendering empty prop
                agentPanel == null ? null :
                    <div className='panel'>
                        <h2>{agentPanel.displayName}</h2>
                        <img id='agent-renders' src={agentPanel.largeImages.img ? agentPanel.largeImages.img : agentPanel.displayIcon} alt="agent-profile-img" />
                        <h3>{agentPanel.role?.displayName}</h3>
                        <h4>{agentPanel.description}</h4>
                    </div>
            }

        </>
    );
}

export default Panel;
