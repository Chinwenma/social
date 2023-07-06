import './navbar.scss';
import { useContext } from "react";
import { DarkModeContext } from '../../context/darkModeContext';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { Link } from 'react-router-dom';


export default function Navbar() {

    const { toggle, darkMode } = useContext(DarkModeContext)

    return (
        <div className="navbar">
            <div className='left'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span> Socio_Matrix</span>
                </Link>
                <HomeOutlinedIcon className='icon' />
                {darkMode ? (
                    <WbSunnyOutlinedIcon onClick={toggle}  className='icon'/>
                ) : (
                    <DarkModeOutlinedIcon onClick={toggle} className='icon'/>
                )}
                <GridViewOutlinedIcon className='icon' />
                <div className='search'>
                    <SearchOutlinedIcon className='icon' />
                    <input placeholder='Search...' style={{ background: "transparent" }} />
                </div>
            </div>
            <div className='right'>
                <PersonOutlinedIcon className='icon' />
                <EmailOutlinedIcon className='icon' />
                <NotificationsOutlinedIcon className='icon'/>
                <div className='user'>
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='user' />
                    <span>Ruhama May</span>
                </div>
            </div>
        </div>
    )
}