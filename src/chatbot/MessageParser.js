import socketIOClient from 'socket.io-client';
import { io } from "socket.io-client";

var WebSocketClient = require('websocket').client;
const MonkeyLearn = require('monkeylearn')
// MessageParser starter code

class MessageParser {
  static messageOptions = [
    ["Keep being Silly, Honest, Kind.", "Its a nice day today isnt it", "I like your attitude!", "Wowzers! You're a-ok. Don't stop believing", "Because im happy! Clap along if you feel like happiness is the truth ..."],
    ["Today, Tomorrow, Yesterday ... It's all the same.", "Interesting! Tell me more...", "What are you passionate about?", "Sometimes I'm happy and I'm not a human", "Mary HAD a little lamb"],
    ["Focus on the journey, not the destination.", "Well, thats too bad );","Cheer up! You got this!","I'm sorry you're having a bad day... but remember nothing is permanent", "Don't let others put you down. You are in charge of your life."]
  ]

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
