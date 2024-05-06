import React from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

function App() {
  return (

    <div className="App">
      <header className="App-header">
      <img src="/postpartum.jpg" />
      <div className="Chatbot">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
      </header>
    </div>

  );
}

export default App;
