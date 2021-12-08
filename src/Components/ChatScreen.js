import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import '../assets/ChatScreen.css'

function ChatScreen() {

    const [input, setInput] = useState('')

    const [messages, setMessages] = useState([
        {
            name: 'Mark',
            image: 'http://www.random-art.org/img/large/373584.jpg',
            message: 'Yo!'
        },
        {
            name: 'Mark',
            image: 'http://www.random-art.org/img/large/373584.jpg',
            message: 'Your demo is sick!'
        },
        {
            message: 'Thanks 😊'
        },
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <h2 className="h2">Inbox</h2>
            <p>{messages.map(message => (
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar alt="Travis Howard" className="avatar" src={message.image} alt={message.name} />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen_message">
                        <p className="chatScreen_text_user">{message.message}</p>
                    </div>
                )
            ))}</p>
            <div>
                <form className="form">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type your message" className="chatScreen_input" />
                    <button onClick={handleSend} type="submit" className="send">Send</button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreen;