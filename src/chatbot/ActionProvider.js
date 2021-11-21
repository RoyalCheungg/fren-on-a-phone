// ActionProvider starter code
import { createChatBotMessage } from 'react-chatbot-kit';
class ActionProvider {
    constructor(
      createChatbotMessage, setStateFunc, createClientMessage,

   ) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
   }

 
 

    getResponse(responseMsg){
    const botMessage = createChatBotMessage(responseMsg);
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  
  
   
}


  
  
 

export default ActionProvider;
