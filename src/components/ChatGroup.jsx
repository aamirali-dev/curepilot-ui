import React from 'react'
import { useRef, useEffect } from 'react';
import Chat from './Chat';

const ChatGroup = ({chats}) => {
    const listEndRef = useRef(null);

    const chats_array = [...chats]
  
    useEffect(() => {
      // Scroll to the end when the items change or initially mount
      listEndRef.current.scrollIntoView({});
    }, [chats_array]);
  
    return (
      <div
        className="gap-2 d-flex flex-column scroll-bar-custom overflow-auto col-lg-9 pt-3"
        style={{ height: "90%", paddingLeft: '20%', paddingRight: '20%'}}
      >
        {chats_array.map((chat) => {
          return <Chat key={chat.turn} role={chat.role} message={chat.message} />;
        })}
        <div ref={listEndRef} />
      </div>
    );
}

export default ChatGroup