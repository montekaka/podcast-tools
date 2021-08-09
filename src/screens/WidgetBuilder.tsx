import {useAtom} from 'jotai'
import {podcastRssAtom, episodesAtom, playingIdAtom, chaptersAtom, playerSkinAtom} from '../jotai'
import {JCPlayer} from '../components/jc-player'
import {Builder} from '../components/player-canva'

const WidgetBuilder = () => {
  const [rssFeed, rssFeedSet] = useAtom(podcastRssAtom);
  const [episodes] = useAtom(episodesAtom);
  const [_] = useAtom(playingIdAtom);
  const [chapters] = useAtom(chaptersAtom);
  const [playerSkin] = useAtom(playerSkinAtom)
  
  
  return (
    <div>
      <h2>Hello</h2>
      <Builder/>
      <div>
        {episodes && episodes.length > 0 ? <JCPlayer/> : null}
      </div>
    </div>
  )
}

export default WidgetBuilder;