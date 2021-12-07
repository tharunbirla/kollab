import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'
import './Chat.css'

function Chat({ name, message, profilePic, timestamp }) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chat">
                <Avatar className="avatar" src={profilePic} alt="{name}" />
                <div className="chat_details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat_timestamp">{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat;