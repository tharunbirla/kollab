import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Chat.css'

function Chat({ name, message, profilePic, timestamp}) {
    return (
        <div className="chat">
            <img className="avatar" src={profilePic} alt="{name}" />
            <div className="chat_details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat_timestamp">{timestamp}</p>
        </div>
    )
}

export default Chat;