import React from "react";
import "./App.css";
import {ChatbotShell} from './Components/ChatbotShell.js'
function App() {
  return (
      <div className="App">
        <div style={{ maxWidth: "300px"}}>
            <ChatbotShell></ChatbotShell>
        </div>
  
    </div>
  );
}

export default App;