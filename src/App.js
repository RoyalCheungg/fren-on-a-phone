import React from "react";
import "./App.css";
import { Particles } from "react-tsparticles";
import { ChatbotShell } from './Components/ChatbotShell.js'



function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>


        <Particles
          id="tsparticles"
          options={{

            fpsLimit: 60,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 0.8,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}>

        </Particles>

        <ChatbotShell
          id="ChatbotShell">
        </ChatbotShell>

   
    

      </div>

    </div>


  );
}

export default App;