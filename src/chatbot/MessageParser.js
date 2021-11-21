import socketIOClient from 'socket.io-client';

// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
      const socket =initializeSocket();

    }

  
    parse(message) {
      socket.emit(message);
      //this.actionProvider.handleInput(this.socket,message);
    }
}
  
   function initializeSocket(){
       return(socketIOClient('localhost'));
  }

export default MessageParser;
