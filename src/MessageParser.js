// MessageParser starter code in MessageParser.js
var index = 0;

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }


  async parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    console.log(lowerCaseMessage);
    if (index === 0) {
      this.actionProvider.greet();
      index++;
    } else if (lowerCaseMessage.includes("Yes, I'm ready")) {
      this.actionProvider.start();
      this.actionProvider.conversation();
    }else{
      this.actionProvider.update_msg(message);
      this.actionProvider.conversation();
    }
  }
}

export default MessageParser;
