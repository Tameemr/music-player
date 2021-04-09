import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  setSongs,
}) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-Songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            songs={songs}
            song={song}
            key={song.id}
            id={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
