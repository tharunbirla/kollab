import React from 'react'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom'
import './Header.css'

function Header({buttonBack, profileBack}) {
    const history = useHistory();
    return (
        <div className="header">
            {buttonBack ? (
                <ArrowBackIosIcon  onClick={() => history.replace(buttonBack)}  className="header_icons" fontSize="large" />
            ):(
                <Link to="profile">
                    <AdminPanelSettingsIcon className="header_icons" fontSize="large"/>
                </Link>
            )}
            
            <Link to="/">
            <img src="https://i.ibb.co/9HLBbJb/
            logo-bg-transparent.png" alt="Kollab" className="header_logo" />
            </Link>
            
            {profileBack ? (
                <ArrowBackIosIcon style={{ transform: "rotate(180deg)" }}  onClick={() => history.replace(profileBack)}  className="header_icons" fontSize="large" />
            ):(
                <Link to="chat">
                    <ForumIcon className="header_icons" fontSize="large"/>
                </Link>
            )}
            
        </div>
    )
    
}

export default Header