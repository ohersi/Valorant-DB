import React from 'react';
import { motion } from 'framer-motion'
// CSS
import './home.css'

const Home = () => {

    const logo = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(16, 24, 35, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(16, 24, 35, 1)",
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3
            }
        }
    };

    return (
        <motion.div>
            <div className='home-main'>

                <svg width="201" height="165" viewBox="0 0 201 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path d="M114.076 107.429L114.083 107.421L114.09 107.412L199.081 1.22353C199.336 0.943877 199.691 0.883799 199.988 0.985584C200.284 1.08676 200.5 1.33712 200.5 1.7V79.5C200.5 80.6707 200.05 81.7541 199.326 82.5678L199.318 82.5773L199.31 82.5873L179.91 106.787L179.904 106.795C178.992 107.98 177.635 108.7 176.1 108.7H114.7C114.007 108.7 113.674 107.889 114.076 107.429ZM2.59052 82.6878L2.59042 82.6877C1.8673 81.7838 1.49604 80.6909 1.39999 79.5788V1.80001C1.39999 1.43712 1.61609 1.18677 1.91184 1.08559C2.20938 0.9838 2.56389 1.04389 2.81853 1.32357L132.31 163.112L132.316 163.121L132.324 163.129C132.701 163.561 132.432 164.3 131.7 164.3H70.3C68.7335 164.3 67.2892 163.656 66.3964 162.495L66.3905 162.488L2.59052 82.6878Z" stroke="rgb(16, 24, 35)"
                        variants={logo}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 4, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                </svg>

            </div>
        </motion.div>

    );
}

export default Home;
