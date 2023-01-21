import React from 'react';
import './Chat.scss';

const Chat = () => {


  return (
    <div className="Chat">
        <div className="Left-side-chat">
            <div className="Chat-container">
                <h2>Chats</h2>
                <div className="Chat-list">
                    Conversations
                </div>
            </div>
        </div>

        <div className="Right-side-chat">
            Right side
        </div>
    </div>
  )
}

export default Chat; 