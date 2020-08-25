import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
// Components
import SidebarChat from "./../SidebarChat/SidebarChat";
// Icons
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLargeOutlined";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
// Database config
import db from "./../../firebase";
// CSS
import "./Sidebar.css";
import { useStateValue } from "./../../Store/StateProvider";

function Sidebar() {
  // State
  const [{ user }, dispatch] = useStateValue();
  const [rooms, setRooms] = useState([]);
  // Life cycle hooks
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      const rooms = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setRooms(rooms);
    });
    // Whenever the component destroyed it will run
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar__header">
        {/* Avatar */}
        <Avatar src={user?.photoURL} />
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
        {rooms.map((room) => (
          <SidebarChat key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
