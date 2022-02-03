import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimateSharedLayout } from 'framer-motion'
// CSS
import './nav.css'

const Nav = () => {

    const [activeIndex, setActiveIndex] = useState(null)

    return (
        <AnimateSharedLayout>
            <motion.div id='main-nav' onHoverEnd={() => setActiveIndex(null)} >
                {console.log(activeIndex)}

                <Link to='/'>
                    <motion.div onHoverStart={() => setActiveIndex(0)} className='btn'>
                        Home
                        {activeIndex === 0 ? <motion.span layoutId='shadow' className='shadow' /> : null}
                    </motion.div>
                </Link>

                <Link to='agents'>
                    <motion.div onHoverStart={() => setActiveIndex(1)} className="btn">
                        Agents
                        {activeIndex === 1 ? <motion.span layoutId='shadow' className='shadow' /> : null}
                    </motion.div>
                </Link>
                <Link to='weapons'>
                    <motion.div onHoverStart={() => setActiveIndex(2)} className="btn">
                        Weapons
                        {activeIndex === 2 ? <motion.span layoutId='shadow' className='shadow' /> : null}
                    </motion.div>
                </Link>
                <Link to='maps'>
                    <motion.div onHoverStart={() => setActiveIndex(3)} className="btn">
                        Maps
                        {activeIndex === 3 ? <motion.span layoutId='shadow' className='shadow' /> : null}
                    </motion.div>
                </Link>
                <Link to='cards'>
                    <motion.div onHoverStart={() => setActiveIndex(4)} className="btn">
                        Cards
                        {activeIndex === 4 ? <motion.span layoutId='shadow' className='shadow' /> : null}
                    </motion.div>
                </Link>
                <Link to='esports'>
                    <motion.div onHoverStart={() => setActiveIndex(5)} className="btn">
                        Esports
                        {activeIndex === 5 ? <motion.span layoutId='shadow' className='shadow' /> : null}
                    </motion.div>
                </Link>
            </motion.div>
        </AnimateSharedLayout>

    );
}

export default Nav;
