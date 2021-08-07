import {atom} from "jotai"
import {episodesAtom} from './podcastAtom'

type Player = {
  playingId: number;
  durationSeconds: number;
  playedSeconds: number;
  seekSeconds: number;
  onSeeking: boolean;
  onReady: boolean;
  playing: boolean;    
  playerRef: any;
}

export const playerAtom = atom<Player>((get) => {
  const items = get(episodesAtom);
  if(items.length > 0) {
    return {
      playingId: 0,
      durationSeconds: 0,
      playedSeconds: 0,
      seekSeconds: 0,
      onSeeking: false,
      onReady: false,
      playing: false,
      playerRef: null
    }
  } else {
    return {
      playingId: -1,
      durationSeconds: 0,
      playedSeconds: 0,
      seekSeconds: 0,
      onSeeking: false,
      onReady: false,
      playing: false,
      playerRef: null
    };
  }
})

export {}