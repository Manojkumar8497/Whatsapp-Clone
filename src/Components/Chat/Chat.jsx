import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
// Icons
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
// CSS
import "./Chat.css";

function Chat() {
  // State
  const [avatarName, setAvatarName] = useState("");
  // Component Life cycle hooks
  useEffect(() => {
    const random = Math.floor(Math.random() * 10);
    setAvatarName(random);
  }, []);
  return (
    <div className="chat">
      {/* Chat header */}
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${avatarName}.svg`}
        />
        <div className="chat__headerInfo">
          <h4>Room Name</h4>
          <p>Last seen at 50 mins ago</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton>
            <SearchOutlined />
          </IconButton>
        </div>
      </div>
      {/* Chat Messages */}
      <div className="chat__body"></div>
      {/* Chat Footer */}
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
