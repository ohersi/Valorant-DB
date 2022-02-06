import React from 'react';
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import './sidebar.css'

const Sidebar = ({ mapData, weaponsData }) => {
    
    let url = window.location.href

    return (
        <>
            {
                url.includes('maps') ?

                    <div className='maps-sidebar-container'>
                        <div id='maps-sidebar'>
                            <h5 className='home-btn'>
                                <Link to='main-nav' smooth={true}><p>&#10006;</p>Home</Link>
                            </h5>
                            {
                                mapData.map(map => (
                                    <motion.div whileHover={{ scale: 1.15, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                        key={map.uuid}
                                        id={map.displayName}>
                                        <Link to={`${map.displayName}`} smooth={true}>{map.displayName}</Link>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    :
                    <div className='weapons-sidebar-container'>
                        <div id='weapons-sidebar'>
                            <h5 className='home-btn'>
                                <Link to='main-nav' smooth={true}><p>&#10006;</p>Home</Link>
                            </h5>
                            {
                                weaponsData.map(weapons => (
                                    <div key={weapons.uuid} id={weapons.displayName}>
                                        <Link to={`${weapons.displayName}`} smooth={true}>{weapons.displayName}</Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }
        </>

    );
}

export default Sidebar;
