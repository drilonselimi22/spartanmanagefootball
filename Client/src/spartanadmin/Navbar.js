import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as IoIcons from "react-icons/io";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import AdminBackground from '../images/adminbackground.jpg';

function NavbarAdmin() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div style={{
            backgroundImage: `url(${AdminBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: '120vh',
            objectFit: 'cover'
        }}>
            <IconContext.Provider value={{ color: '#F8C047' }}>
                <div className='navbar_spartan'>
                    <div>
                        <Link to="#" className='menu-bars'>
                            <IoIcons.IoMdMenu onClick={showSidebar} />
                        </Link>
                    </div>
                    <div>
                        <h5>Spartan Admin Dashboard</h5>
                    </div>
                    <div>
                        <h6>Admin Name</h6>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <IoIcons.IoMdClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
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
            </IconContext.Provider>
        </div>
    )
}

export default NavbarAdmin;