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
        className="gap-2 d-flex flex-column scroll-bar-custom pt-3 overflow-auto"
        style={{ height: "90%", width: '90%' }}
      >
        {chats_array.map((chat) => {
          return <Chat key={chat.turn} role={chat.role} message={chat.message} />;
        })}
        <div ref={listEndRef} />
      </div>
    );
}

export default ChatGroup