import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: 'Spartan Home',
        path: "/spartan",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: 'Squads',
        path: "/squads",
        icon: <RiIcons.RiTeamFill />,
        cName: "nav-text"
    },
    {
        title: 'Leagues',
        path: "/leagues",
        icon: <GiIcons.GiSoccerBall />,
        cName: "nav-text"
    },
    {
        title: 'Logout',
        path: "logout",
        icon: <IoIcons.IoMdLogOut />,
        cName: "nav-text"
    }
]