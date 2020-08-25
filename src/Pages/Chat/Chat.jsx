import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Components
import ChatHeader from "../../Components/Chat/ChatHeader/ChatHeader";
import ChatMessage from "../../Components/Chat/ChatMessage/ChatMessage";
import ChatFooter from "../../Components/Chat/ChatFooter/ChatFooter";
// State
import { useStateValue } from "./../../Store/StateProvider";
// Database
import db from "./../../firebase";
import firebase from "firebase";
// CSS
import "./Chat.css";

function Chat() {
  // State
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatData, setChatData] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  // Router params
  const { chatId } = useParams();
  // Fetching the room details from database
  useEffect(() => {
    if (chatId) {
      // Getting single room data
      db.collection("rooms")
        .doc(chatId)
        .onSnapshot((snapshot) => {
          setChatData(snapshot.data());
        });
      // Getting the chat messages
      db.collection("rooms")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          const messages = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setMessages(messages);
        });
    }
  }, [chatId]);

  // Whenever the messages updated scroll to bottom of the chat container
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Scroll to bottom
  function scrollToBottom() {
    const chatBodyEl = document.getElementById("chat__body");
    if (chatBodyEl) {
      chatBodyEl.scrollTop = chatBodyEl.scrollHeight;
    }
  }

  // Handle submit function
  const sendMessage = (e) => {
    e.preventDefault();
    // Send the message to database
    db.collection("rooms").doc(chatId).collection("messages").add({
      message,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };
  return chatData ? (
    <div className="chat">
      {/* Chat header */}
      <ChatHeader
        data={chatData}
        timestamp={messages[messages.length - 1]?.timestamp}
      />
      {/* Chat Messages */}
      <div className="chat__body" id="chat__body">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            data={message}
            isReceiver={user.displayName === message.name}
          />
        ))}
      </div>
      {/* Chat Footer */}
      <ChatFooter
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  ) : (
    <div className="chat"></div>
  );
}

export default Chat;
