import {atom, useAtom} from "jotai"
import Parser from 'rss-parser';
import { playingIdAtom } from "./playerAtom";

const parser: Parser = new Parser({
  customFields: {
    item: [
      ["podcast:chapters", "chapters"] // rename the filed to chapters
    ]
  }
})

// type Podcast = {
//   title: string;
// }

export interface Episode {
  title: string;
  artworkUrl: string;
  pubDate: Date;
  audioUrl: string;
  chaptersUrl?: string;
  podcastTitle: string;
  link: string;
}

export interface Chapter {
  title: string;
  startTime: number;
  img?: string;
  url? : string;
}

export const podcastRssAtom = atom<string>("");

export const episodesAtom = atom<Episode[]>(async (get) => {
  const rss = get(podcastRssAtom);
  if(rss) {
    try {
      const feed = await parser.parseURL(rss);
      const feedArtwork = feed.image?.url;
      const podcastTitle = feed.title;
      const items:Episode[] = [];
      
      feed.items.forEach((item:any) => {
        let artworkUrl = feedArtwork;
        if(item.itunes && item.itunes.image) {
          artworkUrl = item.itunes.image;
        }

        let chaptersUrl = null;
        if(item.chapters && item.chapters.$ && item.chapters.$.url) {
          chaptersUrl = item.chapters.$.url;
        }

        // console.log(artworkUrl)
        items.push({
          title: item.title,
          podcastTitle: podcastTitle!,
          artworkUrl: artworkUrl!,
          pubDate: item.pubDate,
          link: item.link,
          audioUrl: item.enclosure.url,
          chaptersUrl: chaptersUrl
        })
      })
      return items;
      // feed.items[0].chapters.$.url
      // return feed.items;
    } catch (err) {
      console.log(err);
      return [];
    }
  } else {
    return [];
  }
});

export const chaptersAtom = atom<Chapter[]>(async (get) => {
  const playingId = get(playingIdAtom);
  const episodes = get(episodesAtom);
  if(playingId >= 0 && episodes.length > 0 && episodes[playingId].chaptersUrl) {
    const url = episodes[playingId].chaptersUrl;
    try {
      const response = await fetch(url!)
      const data = await response.json();
      // console.log(data)
      if(data.chapters && data.chapters.length > 0) {
        return data.chapters;
      }
    } catch (err) {
      return [];
    }
  } else {
    return [];
  }
})