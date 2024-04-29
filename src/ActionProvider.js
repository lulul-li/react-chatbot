class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend. I'm here to help you understand your recent emotions and feelings. You can stop the conversation at any time, and all discussions are confidential.");
    this.updateChatbotState(greetingMessage);
    const q1 = this.createChatBotMessage("Before we start, I want to ensure you understand that our conversation is confidential. While I'm here to help, please remember I'm not a doctor but can offer some basic support and information. Are you ready to chat?",{
      delay: 2000,
    });
    this.updateChatbotState(q1);
  }

  recentlyFeeling(){
    const msg = this.createChatBotMessage("Great! To start, could you share how you've been feeling lately? For instance, how have the past few days been for you?");
    this.updateChatbotState(msg);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
