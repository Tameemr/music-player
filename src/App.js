import React, { useState } from "react";
// import style
import "../src/style/app.scss";
// import components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
// import Util
import data from "./util";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[3]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
