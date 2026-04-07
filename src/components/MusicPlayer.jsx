import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const playlist = [
  {
    title: "Thành Đô",
    artist: "Gurbane",
    url: "/music/ThanhDo.mp3",
  },
  {
    title: "Cả Một Đời Để Quên",
    artist: "Đặng Tuấn Vũ x Lâm Tuấn",
    url: "/music/CaMotDoiDeQuen.mp3",
  },
  {
    title: "Người Bình Thản Kẻ Nặng Lòng",
    artist: "Noo Phước Thịnh",
    url: "/music/NguoiBinhThanKeNangLong.mp3",
  },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  const currentTrack = playlist[currentTrackIndex];

  // Attempt autoplay on mount
  useEffect(() => {
    const attemptPlay = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.warn("Autoplay blocked by browser:", err);
        setIsPlaying(false);
      }
    };
    attemptPlay();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked or playback error:", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex(
      (prev) => (prev - 1 + playlist.length) % playlist.length,
    );
    setIsPlaying(true);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="music-player-fixed glass"
    >
      <audio ref={audioRef} src={currentTrack.url} onEnded={nextTrack} />

      <div className="player-content">
        <div className="player-info">
          <div className="visualizer">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="vis-bar"
                animate={
                  isPlaying
                    ? { height: ["20%", "80%", "40%", "100%", "20%"] }
                    : { height: "20%" }
                }
                transition={{
                  repeat: Infinity,
                  duration: 0.6 + i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <div className="track-details">
            <span className="track-title">{currentTrack.title}</span>
            <span className="track-artist">{currentTrack.artist}</span>
          </div>
        </div>

        <div className="player-controls">
          <button onClick={prevTrack} className="player-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="19 20 9 12 19 4 19 20" />
              <line x1="5" y1="19" x2="5" y2="5" />
            </svg>
          </button>

          <button onClick={togglePlay} className="player-btn play-pause">
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>

          <button onClick={nextTrack} className="player-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 4 15 12 5 20 5 4" />
              <line x1="19" y1="5" x2="19" y2="19" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
