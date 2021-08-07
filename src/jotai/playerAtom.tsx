import {atom, WritableAtom} from "jotai"
import { Player } from "../screens"
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

export const playerAtom = atom<Player>({
  playingId: 0,
  durationSeconds: 0,
  playedSeconds: 0,
  seekSeconds: 0,
  onSeeking: false,
  onReady: false,
  playing: false,
  playerRef: null
})

export const initPlayerAtom = atom<Player>((get) => {
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

export {}