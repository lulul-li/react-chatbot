import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import FrequencyOptions from "./components/Options/FrequencyOptions";
import YesNoOptions from "./components/Options/YesNoOptions";

const config = {
  botName: "HopeChat",
  initialMessages: [
    createChatBotMessage("Hi, friend. I'm here to help you understand your recent emotions and feelings. You can stop the conversation at any time, and all discussions are confidential.", {
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName:"YesNoOptions",
      widgetFunc: (props) => <YesNoOptions {...props} />,
    },
    {
      widgetName: "frequencyOptions",
      widgetFunc: (props) => <FrequencyOptions {...props} />,
    },
  ],
};

export default config;
