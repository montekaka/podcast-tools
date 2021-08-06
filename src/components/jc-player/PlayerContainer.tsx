import Metas from './Metas'
import Artwork from './Artwork';
import PlayerControl from './PlayerControl'

const PlayerContainer = () => {
  return (
    <div className="jc-player-container">
      <Artwork/>
      <Metas/>        
      <PlayerControl/>
      <div className="chapters"></div>
    </div>
  )
}

export default PlayerContainer;