import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='agents'>Agents</Link>
            <Link to='weapons'>Weapons</Link>
            <Link to='maps'>Maps</Link>
            <Link to='esports'>Esports</Link>
        </div>
    );
}

export default Nav;
