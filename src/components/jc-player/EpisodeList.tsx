import {useAtom} from "jotai"
import { episodesAtom, updatePlayerAtom, updatePlayingIdAtom} from '../../jotai'
import EpisodeListItem from './EpisodeListItem'

const EpisodeList = () => {

  const [episodes] = useAtom(episodesAtom);
  const [, updatePlayer] = useAtom(updatePlayerAtom);
  const [, updatePlayingId] = useAtom(updatePlayingIdAtom);

  const handleClick = (idx:number) => {
    updatePlayer({
      // playingId: idx, 
      // durationSeconds: 0,
      playedSeconds: 0,
      playing: true, 
      onReady: false
    })
    updatePlayingId(idx);
  }

  return (
    <div className="episodes-list">
      {
        episodes.map((item:any, idx: number) => {
          return <EpisodeListItem key={(idx+1).toString()}
            title={item.title}
            pubDate={item.pubDate}
            id={idx}
            onClick={handleClick}
          />
        })
      }
    </div>
  )
}

export default EpisodeList;