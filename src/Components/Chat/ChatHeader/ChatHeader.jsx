import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
// Utils
import formatDate from "./../../../Utils/formatDate";
// Icons
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
// CSS
import "./ChatHeader.css";

function ChatHeader({ data, timestamp }) {
  return (
    //   Chat Header
    <div className="chat__header">
      {/* Header Info */}
      <Avatar src={data.imageUrl} />
      <div className="chat__headerInfo">
        <h4>{data.name}</h4>
        <p>last seen {formatDate(timestamp)}</p>
      </div>
      {/* Header icons */}
      <div className="chat__headerRight">
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
