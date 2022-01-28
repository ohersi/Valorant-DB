import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            NAVBAR
            <Link to='/'>Home</Link>
            <Link to='agents'>Agents</Link>
        </div>
    );
}

export default Nav;
