import React from "react";
import "./App.css";

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <div className="app">
      {/* App body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat Screen */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
