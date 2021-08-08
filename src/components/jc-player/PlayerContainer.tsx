import {episodesAtom, playingIdAtom} from '../../jotai'
import {useAtom} from "jotai"
import Metas from './Metas'
import Artwork from './Artwork';
import PlayerControl from './PlayerControl'
import ChaptersList from './ChaptersList'

const PlayerContainer = () => {
  const [episodes] = useAtom(episodesAtom);
  const [playingId] = useAtom(playingIdAtom)
  
  if(episodes && episodes.length > 0) {
    const episode = episodes[playingId];
    const {title, podcastTitle, artworkUrl} = episode;
    
    return (
      <div className="jc-player-container">
        <Artwork artworkUrl={artworkUrl}/>
        <Metas title={title} podcastTitle={podcastTitle}/>        
        <PlayerControl/>
        <ChaptersList/>
      </div>
    )

  }

  return null;  

}

export default PlayerContainer;