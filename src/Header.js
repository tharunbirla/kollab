import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <PersonIcon className="header_icons" fontSize="large"/>
            <img src="https://i.ibb.co/9HLBbJb/
            logo-bg-transparent.png" alt="Kollab" className="header_logo" />
            <ForumIcon className="header_icons" fontSize="large"/>
        </div>
    )
    
}

export default Header