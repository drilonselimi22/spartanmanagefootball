import React, { useState } from 'react'
import * as RiIcons from "react-icons/ri"
import { Link } from 'react-router-dom';
import { AgentPages } from './AgentPages';
import './SidebarAgent.css';
import Logo from '../../images/textlogo.svg';

function SidebarAgent() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className='sidebar__agent'>
                <div>
                    <img src={Logo} width='130px' />
                </div>
                <div>
                    <h4>Agent Name</h4>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            {/* <img src={Logo} width='50px' /> */}
                        </Link>
                    </li>
                    {AgentPages.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default SidebarAgent;