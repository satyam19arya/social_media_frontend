import React, { useState } from "react";
import './Chat.scss';
import { useEffect } from "react";
import { userChats } from "../chat/ChatRequest";
import { useSelector } from "react-redux";

const Chat = () => {
    const [chats, setChats] = useState([]);
    const user = useSelector(state => state.appConfigReducer.myProfile);

    useEffect(() => {
        const getChats = async () => {
          try {
            const { data } = await userChats(user);
            setChats(data);
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };
        getChats();
      }, [user]);

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