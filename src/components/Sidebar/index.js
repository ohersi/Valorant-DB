import React from 'react';
import { Link } from 'react-scroll'
import './sidebar.css'

const Sidebar = ({ mapData, weaponsData }) => {

    console.log(window.location.href)
    let url = window.location.href
    
    return (
        <div className='sidebar-container'>
            {   url == 'http://localhost:3000/maps' ?
                <div id='maps-sidebar'>
                    {
                        mapData.map(map => (
                            <div key={map.uuid} id={map.displayName}>
                                <Link to={`${map.displayName}`} smooth={true}>{map.displayName}</Link>
                            </div>
                        ))
                    }
                </div>
                : 
                <div id='weapons-sidebar'>
                    {
                        weaponsData.map(weapons => (
                            <div key={weapons.uuid} id={weapons.displayName}>
                                <Link to={`${weapons.displayName}`} smooth={true}>{weapons.displayName}</Link>
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    );
}

export default Sidebar;
