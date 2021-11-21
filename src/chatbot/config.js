// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Components/BotAvatar/BotAvatar";
import UserAvatar from "../Components/UserAvatar/UserAvatar";


const config = {
  initialMessages: [createChatBotMessage(`Hello I am your friend on a phone if you ever need to chat let me know`)]
  , customStyles: { botMessageBox: { backgroundColor: "#89CFF0" } }
  , botName: "Friend-On-A-Phone"
  , customComponents:
  {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />

  }



}

export default config