import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
// Components
import SidebarChat from "./../SidebarChat/SidebarChat";
// Icons
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
// CSS
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar__header">
        {/* Avatar */}
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/* Sidebar Search */}
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chart" />
        </div>
      </div>
      {/* Sidebar Chats */}
      <div className="sidebar__chats">
        <SidebarChat isNewChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
