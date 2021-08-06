import Metas from './Metas'
import Artwork from './Artwork';
import PlayerControl from './PlayerControl'
import ChaptersList from './ChaptersList'

const PlayerContainer = () => {
  return (
    <div className="jc-player-container">
      <Artwork/>
      <Metas/>        
      <PlayerControl/>
      <ChaptersList/>
    </div>
  )
}

export default PlayerContainer;