import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

import callIcon from "./assets/call_icon.png"
import Info from "./components/Info";
import Hero from "./components/Hero";


function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="App">
      <Hero></Hero>
      <Info></Info>
        <div className="Chatbot">
          {!isChatbotOpen && ( <div className="chatbot-toggle" onClick={toggleChatbot}>
            <img className="chatbot-icon" src={callIcon}></img>
          </div>)}
          {isChatbotOpen && (
            <div className="chatbot-container" onClick={toggleChatbot}>
              <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
              />
            </div>
          )}
        </div>
    </div>
  );
}

export default App;
