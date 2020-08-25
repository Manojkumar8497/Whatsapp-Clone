import React from "react";
// Utils
import formatDate from "../../../Utils/formatDate";
// CSS
import "./ChatMessage.css";
function ChatMessage({ data, isReceiver }) {
  return (
    <p className={`chat__message ${isReceiver && "chat__receiver"}`}>
      <span className="chat__name">{data.name}</span>
      <span className="chat__content">{data.message}</span>
      <span className="chat__timestamp">{formatDate(data.timestamp)}</span>
    </p>
  );
}

export default ChatMessage;
