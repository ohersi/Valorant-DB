import React from 'react';
import { Link } from 'react-scroll'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div id='sidebar'>
                <Link to='Ascent' smooth={true}>Ascent</Link>
                <Link to='Split' smooth={true}>Split</Link>
                <Link to='Fracture' smooth={true}>Fracture</Link>
                <Link to='Bind' smooth={true}>Bind</Link>
                <Link to='Breeze' smooth={true}>Breeze</Link>
                <Link to='Icebox' smooth={true}>Icebox</Link>
                <Link to='The Range' smooth={true}>The Range</Link>
                <Link to='Haven' smooth={true}>Haven</Link>
            </div>

        </div>
    );
}

export default Sidebar;