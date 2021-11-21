// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Components/BotAvatar/BotAvatar";
import UserAvatar from "../Components/UserAvatar/UserAvatar";

const randMsg = ["Hello, how are you today? What is on your mind? ",
  "How are you feeling today?",
  "I love spending time with you!",
  "You are loved :)"];

const random = randMsg[Math.floor(Math.random() * randMsg.length)]

const config = {

  initialMessages: [createChatBotMessage(random)]
  , customStyles: {
    botMessageBox: { backgroundColor: "#89CFF0" },
    chatButton: {
      backgroundColor: "#f4c2c2"
    }
  }
  , botName: "Friend-On-A-Phone"
  , customComponents:
  {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
    header: () => <div> Friend-On-A-Phone </div>

  }



}

export default config