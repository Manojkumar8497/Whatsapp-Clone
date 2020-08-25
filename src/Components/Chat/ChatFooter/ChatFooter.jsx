import React from "react";
// Icons
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
// CSS
import "./ChatFooter.css";
function ChatFooter({ message, setMessage, sendMessage }) {
  return (
    // Chat footer
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
  );
}

export default ChatFooter;
