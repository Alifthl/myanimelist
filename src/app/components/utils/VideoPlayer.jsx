"use client";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen((state) => !state);
  };
  const option = {
    width: "300",
    height: "250",
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-2 right-2">
          <button
            className="text-color-primary float-right"
            onClick={handleClose}
          >
            <XCircle size={32} />
          </button>
          <YouTube
            videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
          />
        </div>
      ) : (
        <button
          className="border bg-color-accent px-8 py-1 mt-2 text-color-dark"
          onClick={handleClose}
        >
          Trailer
        </button>
      )}
    </>
  );
};

export default VideoPlayer;
