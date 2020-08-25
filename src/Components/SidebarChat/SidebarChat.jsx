import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
// Utils
import formatDate from "./../../Utils/formatDate";
// Database
import db from "./../../firebase";
// CSS
import "./SidebarChat.css";
import { useHistory } from "react-router-dom";

function SidebarChat({ isNewChat, room }) {
  const id = room?.id;
  const [messages, setMessages] = useState([]);
  // Histroy
  const history = useHistory();
  // Getting the message
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          const messages = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setMessages(messages);
        });
    }
  }, [id]);
  //   Handling the create new chat
  const handleCreateChat = () => {
    const roomName = prompt("Please enter the room name");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
        imageUrl: `https://avatars.dicebear.com/api/human/${roomName}.svg`,
      });
    }
  };
  // Remove spaces
  const removeSpaces = (name) => {
    return name.toLowerCase().split(" ").join("-");
  };
  return !isNewChat ? (
    <div
      className="sidebarChat"
      onClick={() =>
        history.push(`/chats/${room.id}/${removeSpaces(room.name)}`)
      }
    >
      <Avatar src={room.imageUrl} />
      <div className="sidebarChat__info">
        <div className="sidebarChat__header">
          <h2>{room.name}</h2>
          <small className="sidebarChat__timestamp">
            {formatDate(messages[0]?.timestamp)}
          </small>
        </div>
        <p>{messages[0]?.message}</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={() => handleCreateChat()}>
      <h4>Add new chat</h4>
    </div>
  );
}

export default SidebarChat;
