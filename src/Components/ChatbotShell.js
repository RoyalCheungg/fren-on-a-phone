import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "../chatbot/config.js";
import ActionProvider from "../chatbot/ActionProvider.js";
import MessageParser from "../chatbot/MessageParser.js";
import 'react-chatbot-kit/build/main.css'



export const ChatbotShell = () => {
    return (
        <div>
            <Chatbot 
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        />
        </div>
    )
}
