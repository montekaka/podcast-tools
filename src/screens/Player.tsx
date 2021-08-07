import React, {useEffect} from "react";
import {useAtom} from 'jotai'
import {podcastRssAtom, episodesAtom, initPlayerAtom} from '../jotai'
import {JCPlayer} from '../components/jc-player'

const Player = () => {
  const [rssFeed, rssFeedSet] = useAtom(podcastRssAtom);
  const [episodes] = useAtom(episodesAtom);
  const [_] = useAtom(initPlayerAtom);

  useEffect(() => {
    rssFeedSet("https://feed.justcast.com/shows/readcast/audioposts.rss")
    // rssFeedSet("https://feed.justcast.com/shows/jia-chen-chinaconscience/audioposts.rss")
  }, [])
  
  return (
    <div>
      <JCPlayer/>
    </div>
  )
}

export default Player;