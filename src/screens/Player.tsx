import React, {useEffect} from "react";
import {useAtom} from 'jotai'
import {podcastRssAtom, episodesAtom, playingIdAtom, chaptersAtom, playerSkinAtom} from '../jotai'
import {JCPlayer} from '../components/jc-player'

const Player = () => {
  const [rssFeed, rssFeedSet] = useAtom(podcastRssAtom);
  const [episodes] = useAtom(episodesAtom);
  const [_] = useAtom(playingIdAtom);
  const [chapters] = useAtom(chaptersAtom);
  const [playerSkin] = useAtom(playerSkinAtom)

  useEffect(() => {
    rssFeedSet("https://feed.justcast.com/shows/inside-the-aluminum-tube-with-shanon-baker/audioposts.rss")
    // rssFeedSet("https://feed.justcast.com/shows/jia-chen-chinaconscience/audioposts.rss")
  }, [])
  
  return (
    <div>
      <JCPlayer/>
    </div>
  )
}

export default Player;