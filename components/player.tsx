import { useState, useRef, memo } from "react";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";

type Props = {
  videoUrl: string;
};

export default function Player({ videoUrl }: Props) {
  const [player, setPlayer] = useState({
    playing: true,
    volume: 0.8,
    played: 0,
    loaded: 0,
    seeking: false,
    playbackRate: 1,
  });
  const playerElement = useRef<ReactPlayer>(null);

  const handleSeekChange = (value: string) => {
    setPlayer((o) => ({ ...o, played: parseFloat(value) }));
    playerElement.current?.seekTo(parseFloat(value));
  };
  return (
    <div>
      <div className="pt-4">
        <div className="w-full aspect-video">
          <ReactPlayer
            ref={playerElement}
            url={`https://www.youtube.com/embed/${videoUrl}`}
            className="w-full aspect-video pointer-events-none"
            width="100%"
            height="100%"
            playing={player.playing}
            playbackRate={player.playbackRate}
            controls={false}
            onProgress={(state) => {
              if (!player.seeking) {
                setPlayer((p) => ({ ...p, ...state }));
              }
            }}
            style={{
                borderColor:"red"
            }}
          />
        </div>
      </div>
      <div className="pt-4 flex items-center">
        <div className="pr-2">
          <button
            type="button"
            onClick={() => setPlayer((o) => ({ ...o, playing: !o.playing }))}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm 
            text-white bg-primary"
          >
            {player.playing ? (
                <i className="ic ic-pause_video ic-white"></i>
            ) : (
                <i className="ic ic-play_video ic-white"></i>
            )}
          </button>
        </div>
        <div className="pl-2 w-full flex items-center">
          <input
            type="range"
            className="w-full bg-primary"
            min={0}
            max={0.999999}
            step="any"
            value={player.played}
            onMouseDown={() => setPlayer((p) => ({ ...p, seeking: true }))}
            onChange={({ target: { value } }) => handleSeekChange(value)}
            onMouseUp={() => setPlayer((p) => ({ ...p, seeking: false }))}
          />
        </div>
        <div className="hidden sm:block px-2">
          <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <button
              type="button"
              disabled={player.playbackRate === 0.75}
              onClick={() => setPlayer((o) => ({ ...o, playbackRate: 0.75 }))}
              className={`relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition ${
                player.playbackRate === 0.75 ? "bg-gray-100" : "bg-white"
              }`}
            >
              0.75x
            </button>
            <button
              type="button"
              disabled={player.playbackRate === 1}
              onClick={() => setPlayer((o) => ({ ...o, playbackRate: 1.0 }))}
              className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition ${
                player.playbackRate === 1 ? "bg-gray-100" : "bg-white"
              }`}
            >
              1x
            </button>
            <button
              type="button"
              disabled={player.playbackRate === 1.25}
              onClick={() => setPlayer((o) => ({ ...o, playbackRate: 1.25 }))}
              className={`-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition ${
                player.playbackRate === 1.25 ? "bg-gray-100" : "bg-white"
              }`}
            >
              1.25x
            </button>
          </span>
        </div>

      </div>
    </div>
  );
}
