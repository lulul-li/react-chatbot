import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import FrequencyOptions from "./components/LearningOptions/FrequencyOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "HopeChat",
  initialMessages: [
    createChatBotMessage("Hi! I'm xxx. Nice to meet you", {
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
      widgetFunc:(props) => <LinkList {...props} />,
      props: {
        options: [
          {text: "Yes, I'm ready",
            id:1},
          {text: "No, I'm not ready",
            id:2},
        ]
      }
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
