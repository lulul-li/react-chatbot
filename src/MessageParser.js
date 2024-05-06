// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  async parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    console.log(lowerCaseMessage);
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("Yes, I'm ready")) {
      this.actionProvider.recentlyFeeling();
    } else {
      const sendMessage = async () => {
        const response = await fetch('https://ddp-ai-kpglnlidnq-ts.a.run.app/add_message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: 'test', message: message })
        });
        const data = await response.json();
        this.actionProvider.handleResponse(data.message);
      };

       await sendMessage();
    }
  }
}

export default MessageParser;
