import React from 'react';
import { motion } from 'framer-motion'
// CSS
import './home.css'

const Home = () => {
    return (
        <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }}>
              <div className='home-main'>
            Home Page
        </div>
        </motion.div>
      
    );
}

export default Home;
