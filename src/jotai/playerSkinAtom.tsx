import {atom} from "jotai"

export interface PlayerSkin {
  primaryBackgroundColor: string;
  primaryButtonColor: string;
  primaryTextColor: string;
  progressBarColor: string;
  progressBarThumbColor: string;
  playlistBackgroundColor?: string;
  playlistTextColor?: string;
  chapterBackgroundColor?: string;
  chapterTextColor?: string;
}

export const playerSkinAtom = atom<PlayerSkin>({
  primaryBackgroundColor: "#3B1F50",
  primaryButtonColor: "#D933C3",
  primaryTextColor: "#ffffff",
  progressBarColor: "#D933C3",
  progressBarThumbColor: "#02030A",
  // playlistBackgroundColor?: null,
  // playlistTextColor?: "#6D5938",
  // chapterBackgroundColor?: string;
  // chapterTextColor?: string;
});