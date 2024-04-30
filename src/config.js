import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import FrequencyOptions from "./components/Options/FrequencyOptions";
import LinkList from "./components/LinkList/LinkList";
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
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
