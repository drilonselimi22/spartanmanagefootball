import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as IoIcons from "react-icons/io";
import { AdminSideBarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import AdminBackground from '../images/adminbackground.jpg';

export default function NavbarAdmin() {
    const [sidebar, setSidebar] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    var dataSidebar = AdminSideBarData;
        useEffect(() => {
            setUserEmail(localStorage.getItem('email'))
        });

    const showSidebar = () => setSidebar(!sidebar);




    async function logout(){
        await localStorage.removeItem("username")
        await localStorage.removeItem("email")
        await localStorage.removeItem("token")
        await localStorage.removeItem("role")

        window.location.reload(false);
        window.location.reload(false);
    }
    return (
        <div style={{
            backgroundImage: `url(${AdminBackground})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            height: '120vh',
            width : "100%",
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
                        <h5>Team admin Dashboard</h5>
                    </div>
                    <div>
                        <h6>{userEmail}</h6>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <IoIcons.IoMdClose />
                            </Link>
                        </li>
                        <div>
                                <li className={dataSidebar[0].cName}>
                                    <Link to={dataSidebar[0].path}>
                                        {dataSidebar[0].icon}
                                        <span>{dataSidebar[0].title}</span>
                                    </Link>
                                </li>
                                <li className={dataSidebar[1].cName}>
                                    <Link to={dataSidebar[1].path}>
                                        {dataSidebar[1].icon}
                                        <span>{dataSidebar[1].title}</span>
                                    </Link>
                                </li>
                                <li onClick={logout} className={dataSidebar[2].cName}>
                                    <Link to={dataSidebar[2].path}>
                                        {dataSidebar[2].icon}
                                        <span>{dataSidebar[2].title}</span>
                                    </Link>
                                </li>
                            </div>
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    )
} 