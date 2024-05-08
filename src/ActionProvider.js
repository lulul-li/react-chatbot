var index = 0;
const questionList = [
  "1. What's your age?",
  "2. Are you feeling sad or tearful?",
  "3. Are you irritable towards your baby and partner?",
  "4. Are you having trouble sleeping at night?",
  "5. Are you experiencing problems concentrating or making decisions?",
  "6. Are you overeating or experiencing loss of appetite?",
  "7. Are you feeling anxious?",
  "8. Do you have feelings of guilt?",
  "9. Are you having problems bonding with your baby?",
  "10. Have you ever attempted suicide?"
];
const answerList = [
  "Thank you for sharing your age with me. Age can influence how we experience and deal with different challenges.",
  "Thank you for sharing your feelings. It's good to talk about these things.",
  "It's quite common to experience friction with family members. You're not alone in this.",
  "I see. Good sleep is very important for health, isn't it?",
  "Hmm, making decisions can sometimes be challenging.",
  "Changes in eating habits can often reflect increased stress. This is something many people experience.",
  "This is a common feeling",
  "Dealing with feelings of guilt sometimes takes time and space. It’s completely normal to feel this way.",
  "Bonding with a newborn can have its own pace. It’s something that varies for everyone.",
  "This is a very important issue, and I appreciate you being open to share. It’s crucial to talk about these feelings."
];
var responseList = [];

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }


  greet() {
    const q1 = this.createChatBotMessage("Before we start, I want to ensure you understand that our conversation is confidential. While I'm here to help, please remember I'm not a doctor but can offer some basic support and information. Are you ready to chat?"
      , {
        widget: "YesNoOptions"
      });
    this.updateChatbotState(q1);
  }

  conversation() {
    if (index <= questionList.length) {
      if (index > 0) {
        const answer = this.createChatBotMessage(answerList[index - 1]);
        this.updateChatbotState(answer);
      }
      if (index < questionList.length) {
        const question = this.createChatBotMessage(questionList[index],{delay: 2000});
        this.updateChatbotState(question);
      }

      index++;
    } else {
      index = 0;
    }
  }

  update_msg(message) {
    responseList.push(message);
    if (responseList.length > 10) {
      this.inference(responseList);
    }
  }

  start() {
    const msg = this.createChatBotMessage("Great! next we will ask you some questions, please answer them to the point...");
    this.updateChatbotState(msg);
    this.conversation();
  }

  inference(input) {
    const q1 = this.createChatBotMessage("We got your response, pls wait for few minutes, let us analyse your responses...");
    this.updateChatbotState(q1);

    fetch("https://postpartum-depression-backend-api.onrender.com/api-predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputData: input })
    }).then(response => response.json())
      .then(data => {
        const prediction = this.createChatBotMessage(data["prediction"], { delay: 2000 });
        this.updateChatbotState(prediction);

        if (data["prediction"] === "our predictions is: Depressed") {
          const message = this.createChatBotMessage(data["message"]);
          this.updateChatbotState(message);

          const article1 = this.createChatBotMessage(data["article1"]);
          this.updateChatbotState(article1);

          const article2 = this.createChatBotMessage(data["article2"]);
          this.updateChatbotState(article2);

          const article3 = this.createChatBotMessage(data["article3"]);
          this.updateChatbotState(article3);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
    responseList = [];
  }


  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  }
}

export default ActionProvider;
