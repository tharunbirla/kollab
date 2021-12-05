import REact from 'react'
import Chat from './Chat';
import './Chats.css'

function Chats() {
    return (
        <div className="chat_screen">
            <Chat
            name="Mark"
            message="Yo! hello"
            timestamp="35 minutes ago"
            profilePic="http://www.random-art.org/img/large/373584.jpg"
            />
            <Chat
            name="Mark"
            message="Yo! hello"
            timestamp="35 minutes ago"
            profilePic="http://www.random-art.org/img/large/373583.jpg"
            />
            <Chat
            name="Mark"
            message="Yo! hello"
            timestamp="35 minutes ago"
            profilePic="http://www.random-art.org/img/large/373582.jpg"
            />
        </div>
    )
}

export default Chats;