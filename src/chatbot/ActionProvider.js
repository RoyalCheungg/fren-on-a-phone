// ActionProvider starter code

import socketIOClient from 'socket.io-client';
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,

   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }
}

// function handleInput(socket,message){
//     socket.on(message,(data)=>{
//       const message = this.createChatBotmessage('Hello. Nice to meet you.');

//     this.setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, botMessage],
//     }));
//   }
// }
//     });

// }
 
export default ActionProvider;