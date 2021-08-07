import {atom} from "jotai"
import Parser from 'rss-parser';

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

type Episode = {
  title: string;
  artworkUrl: string;
  pubDate: Date;
  audioUrl: string;
  chaptersUrl?: string;
  podcastTitle: string;
  link: string;
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
