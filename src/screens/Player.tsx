import React, {useEffect} from "react";
import {useAtom} from 'jotai'
import {podcastRssAtom} from '../jotai'
import {JCPlayer} from '../components/jc-player'

const Player = () => {
  const [rssFeed, rssFeedSet] = useAtom(podcastRssAtom)
  
  useEffect(() => {
    rssFeedSet("https://download.randgad.com/feed.xml")
  }, [])
  
  return (
    <div>
      <JCPlayer/>
    </div>
  )
}

export default Player;