"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";

export type MusicPlayerHandle = {
  play: () => void;
};

const MusicPlayer = forwardRef<MusicPlayerHandle>(function MusicPlayer(_, ref) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      // The tap on the invitation is the browser-recognized playback gesture.
    }
  };

  useImperativeHandle(ref, () => ({ play: () => void playMusic() }));

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (!audioRef.current.paused) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    await playMusic();
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/parents-wedding-invitation/music/wedding.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button
        type="button"
        className="music-toggle"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
      >
        <span className="music-icon">
          {isPlaying ? "❚❚" : "♪"}
        </span>

        {isPlaying && (
          <span className="music-bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        )}
      </button>
    </>
  );
});

export default MusicPlayer;
