import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom'
import './Header.css'

function Header({buttonBack}) {
    const history = useHistory();
    return (
        <div className="header">
            {buttonBack ? (
                <ArrowBackIosIcon  onClick={() => history.replace(buttonBack)}  className="header_icons" fontSize="large" />
            ):(
                <PersonIcon className="header_icons" fontSize="large"/>
            )}
            
            <Link to="/">
            <img src="https://i.ibb.co/9HLBbJb/
            logo-bg-transparent.png" alt="Kollab" className="header_logo" />
            </Link>
            <Link to="/chat">
            <ForumIcon className="header_icons" fontSize="large"/>
            </Link>
        </div>
    )
    
}

export default Header