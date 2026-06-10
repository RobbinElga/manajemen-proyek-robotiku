export interface Track {
  title: string;
  artist: string;
  src: string;
}

// Place the matching audio files in public/music/ to enable playback.
export const PLAYLIST: Track[] = [
  { title: "I Miss You", artist: "From - Elga", src: "/music/imiss.mp3" },
  { title: "Line Without Hook", artist: "From - Fuad", src: "/music/linewithout.mp3" },
  { title: "See You Again", artist: "From - Rohim", src: "/music/seeyou.mp3" },
];
