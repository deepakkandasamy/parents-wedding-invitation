"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // A first interaction is required by some browsers before sound can play.
      }
    };

    const startAfterFirstInteraction = (event: Event) => {
      if (
        event.target instanceof Element &&
        event.target.closest(".music-toggle")
      ) {
        return;
      }

      void startMusic();
      window.removeEventListener("pointerdown", startAfterFirstInteraction);
      window.removeEventListener("click", startAfterFirstInteraction);
      window.removeEventListener("keydown", startAfterFirstInteraction);
    };

    void startMusic();
    window.addEventListener("pointerdown", startAfterFirstInteraction);
    window.addEventListener("click", startAfterFirstInteraction);
    window.addEventListener("keydown", startAfterFirstInteraction);

    return () => {
      window.removeEventListener("pointerdown", startAfterFirstInteraction);
      window.removeEventListener("click", startAfterFirstInteraction);
      window.removeEventListener("keydown", startAfterFirstInteraction);
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (!audioRef.current.paused) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      // The play request may still be blocked until a browser-recognized gesture.
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/parents-wedding-invitation/music/wedding.mp3"
        autoPlay
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
}
