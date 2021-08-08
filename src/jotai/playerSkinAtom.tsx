import {atom} from "jotai"

export interface PlayerSkin {
  primaryBackgroundColor: string;
  primaryButtonColor: string;
  primaryTextColor: string;
  progressBarBackgroundColor: string;
  progressBarFilledColor: string;
  playlistBackgroundColor?: string;
  playlistTextColor?: string;
  chapterBackgroundColor?: string;
  chapterTextColor?: string;
}

export const playerSkinAtom = atom<PlayerSkin>({
  primaryBackgroundColor: "#3B1F50",
  primaryButtonColor: "#D933C3",
  primaryTextColor: "#f7f8f9",
  progressBarFilledColor: "#D933C3",
  progressBarBackgroundColor: "#8A8175",
  // progressBarThumbColor: "#02030A",
  playlistBackgroundColor: "#522657",
  playlistTextColor: "#f7f8f9",
  chapterBackgroundColor: "#522657",
  chapterTextColor:  "#f7f8f9"
});

// export const getPlaylistColorAtom = atom((get) => {
//   const {primaryBackgroundColor} = get(playerSkinAtom);
//   return chroma(primaryBackgroundColor);
// }) 