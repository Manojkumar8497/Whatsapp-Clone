import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
// CSS
import "./SidebarChat.css";

function SidebarChat({ isNewChat }) {
  // Avatar State
  const [avatarName, setAvatarName] = useState("");
  // Component life cycle hook
  useEffect(() => {
    const random = Math.floor(Math.random() * 2000);
    setAvatarName(random);
  }, []);
  //   Handling the create new chat
  const handleCreateChat = () => {
    const roomName = prompt("Please enter the room name");
    if (roomName) {
      console.log(roomName);
    }
  };
  return !isNewChat ? (
    <div className="sidebarChat">
      <Avatar
        src={`https://avatars.dicebear.com/api/human/${avatarName}.svg`}
      />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={() => handleCreateChat()}>
      <h4>Add new chat</h4>
    </div>
  );
}

export default SidebarChat;
