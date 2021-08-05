import Metas from './Metas'
import Artwork from './Artwork';
import PlayerControl from './PlayerControl'

const PlayerContainer = () => {
  return (
    <div className="jc-player-container">
      <Artwork/>
      <Metas>
        <PlayerControl/>
      </Metas>
    </div>
  )
}

export default PlayerContainer;