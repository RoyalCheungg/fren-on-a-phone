import socketIOClient from 'socket.io-client';
import { io } from "socket.io-client";
var WebSocketClient = require('websocket').client;
const MonkeyLearn = require('monkeylearn')
// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
      

    }

  
    parse(message) {
      let userMood='';

      

      const ml = new MonkeyLearn('a522f6dcecc4a28c01a0d9741a953f19bca506d7')
      let model_id = 'cl_pi3C7JiL'
      let data = [message]
      ml.classifiers.classify(model_id, data).then(res => {
          console.log(res.body)
        })


     
      console.log(userMood);


      
    }
}
  
   

export default MessageParser;
