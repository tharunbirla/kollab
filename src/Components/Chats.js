import React from 'react';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chat_screen">
            <Chat
                name="Alisha"
                message="replied: Thanks 😊"
                timestamp="35 minutes ago"
                profilePic=""
            />
            <Chat
                name="Erick"
                message="replied: Thanks 😊"
                timestamp="35 minutes ago"
                profilePic="https://i.imgur.com/9hMohYO.jpg"
            />
        </div>
    )
}

export default Chats;