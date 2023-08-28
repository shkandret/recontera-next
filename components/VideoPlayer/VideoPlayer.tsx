import styles from "./VideoPlayer.module.scss";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className }) => (
  <video
    preload="auto"
    playsInline
    autoPlay
    loop
    muted
    equalizer-state="attached"
    className={className}
  >
    <source src={src} type="video/mp4" />
  </video>
);

export default VideoPlayer;
