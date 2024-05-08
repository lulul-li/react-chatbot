import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import ArticleCards from "./components/ArticleCards";
import { articles } from "./data/Articles";
import callIcon from "./assets/call_icon.png"


function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/postpartum.jpg" />
        <div className="card-wrapper">
          {React.Children.toArray(
            articles.map(({title,img,contain,url}) => (
              <ArticleCards title={title} img={img} contain={contain} url={url}></ArticleCards>
            ))
          )}
        </div>
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
      </header>
    </div>
  );
}

export default App;
