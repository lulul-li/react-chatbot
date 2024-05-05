import React from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

function App() {
  return (
    <div className="App">
      <img src="/FT-Postpartum-Depression.png" />
      <div className="Chatbot">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default App;
