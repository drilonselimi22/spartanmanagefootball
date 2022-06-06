import * as RiIcons from "react-icons/ri"
import * as AiIcons from "react-icons/ai"
import * as BiIcons from "react-icons/bi"
import * as BsIcons from "react-icons/bs"
import * as FiIcons from "react-icons/fi"
import * as CgIcons from "react-icons/cg"

export const AgentPages = [
    {
        title: 'Home',
        path: '/agent',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Stadium',
        path: '/agent-stadiums',
        icon: <AiIcons.AiFillFileAdd />,
        cName: 'nav-text'
    },
    {
        title: 'Leagues',
        path: '/agent-leagues',
        icon: <BiIcons.BiFootball />,
        cName: 'nav-text'
    },
    {
        title: 'Squads',
        path: '/agent-squads',
        icon: <AiIcons.AiOutlineUserAdd />,
        cName: 'nav-text'
    },
    {
        title: 'Matches',
        path: '/agent-matches',
        icon: <BsIcons.BsFillCalendarDateFill />,
        cName: 'nav-text'
    },
    {
        title: 'Referees',
        path: '/agent-referees',
        icon: <FiIcons.FiCreditCard />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/login',
        icon: <CgIcons.CgLogOut />,
        cName: 'nav-text'
    }
]