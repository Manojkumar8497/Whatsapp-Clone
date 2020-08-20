import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
// Icons
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
// CSS
import "./Chat.css";

function Chat() {
  // State
  const [avatarName, setAvatarName] = useState("");
  const [message, setMessage] = useState("");
  // Component Life cycle hooks
  useEffect(() => {
    const random = Math.floor(Math.random() * 10);
    setAvatarName(random);
  }, []);
  // Handle submit function
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
  };
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
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Manojkumar</span>
          <span className="chat__content">
            Many more happy return of the day
          </span>
          <span className="chat__timestamp">8:20 AM</span>
        </p>
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">GaneshKumar</span>
          <span className="chat__content">Thank you so much</span>
          <span className="chat__timestamp">8:25 AM</span>
        </p>
      </div>
      {/* Chat Footer */}
      <div className="chat__footer">
        {/* emoji keyboard */}
        <InsertEmoticonIcon />
        {/* Type a message */}
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        {/* Mic icon */}
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
