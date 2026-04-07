import React from "react";
import Hero from "./components/Hero";
import IdentityHub from "./components/IdentityHub";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <IdentityHub />
        <div className="music-player-fixed">
          <MusicPlayer />
        </div>
      </main>
    </div>
  );
}

export default App;
