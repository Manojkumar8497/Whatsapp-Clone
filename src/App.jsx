import React from "react";
import "./App.css";
// Router
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Pages/Login/Login";
import Chat from "./Pages/Chat/Chat";
// State
import { useStateValue } from "./Store/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {/* App body */}
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            {/* Sidebar */}
            <Sidebar />
            <Switch>
              <Route path="/chats/:chatId/:chatName?">
                {/* Chat Screen */}
                <Chat />
              </Route>
              <Route path="/" exact>
                {/* Chat Screen */}
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
