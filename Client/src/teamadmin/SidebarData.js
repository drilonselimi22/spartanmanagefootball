import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

export const AdminSideBarData = [
    {
        title: 'Add Team',
        path: "/addTeam",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: 'Add Player',
        path: "/addPlayers",
        icon: <RiIcons.RiTeamFill />,
        cName: "nav-text"
    },
    {
        title: 'Logout',
        path: "/login",
        icon: <IoIcons.IoMdLogOut />,
        cName: "nav-text"
    }
]