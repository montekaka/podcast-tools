import {atom} from "jotai"
import { Player } from "../screens"
import {episodesAtom, podcastRssAtom} from './podcastAtom'

type Player = {
  // playingId: number;
  durationSeconds: number;
  playedSeconds: number;
  seekSeconds: number;
  onSeeking: boolean;
  onReady: boolean;
  playing: boolean;    
  playerRef: any;
}

export const playerAtom = atom<Player>({
  // playingId: 0,
  durationSeconds: 0,
  playedSeconds: 0,
  seekSeconds: 0,
  onSeeking: false,
  onReady: false,
  playing: false,
  playerRef: null
})

export const playingIdAtom = atom(0);

export const updatePlayingIdAtom = atom((get) => get(playingIdAtom), (_get, set, id:number) => {
  set(playingIdAtom, id);
})

export const updatePlayerAtom = atom(
  (get) => get(playerAtom), 
  (_get, set, update: any) => {
    const currentState = _get(playerAtom);
    set(playerAtom, {...currentState, ...update})
  }
)

export const togglePlayPauseAtom = atom((get) => get(playerAtom), (_get, set, _) => {
  const currentState = _get(playerAtom);
  const {playing} = currentState
  set(playerAtom, {...currentState, playing: !playing});
})

export const updatePlayedTimeAtom = atom((get) => get(playerAtom),  (_get, set, seconds: number) => {
  const currentState = _get(playerAtom);;
  const {durationSeconds, playerRef} = currentState
  let playedSeconds = seconds;
  if(seconds >= durationSeconds) {
    playedSeconds = durationSeconds;
  } else if (seconds <= 0 ){
    playedSeconds = 0;
  }
  playerRef.seekTo(playedSeconds);
  set(playerAtom, {...currentState, playedSeconds});
})

export {}