import React, { useRef, useEffect } from "react";
import Chat from "./Chat";

const ChatGroup = () => {
  const listEndRef = useRef(null);

  const chats = new Array(100).fill(0);

  useEffect(() => {
    // Scroll to the end when the items change or initially mount
    listEndRef.current.scrollIntoView({});
  }, [chats]);

  return (
    <div
      className="overflow-auto gap-2 d-flex flex-column"
      style={{ height: "90%" }}
    >
      {chats.map((chat) => {
        return <Chat key={chat} />;
      })}
      <div ref={listEndRef} />
    </div>
  );
};

export default ChatGroup;
