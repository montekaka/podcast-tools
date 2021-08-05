// import React from "react";
import PlayerContainer from './PlayerContainer'
import EpisodesList from './EpisodesList'

const JCPlayer = () => {
  return (
    <div className="jc-player-wrapper">
      <PlayerContainer/>
      <EpisodesList/>
    </div>
  )
}

export default JCPlayer;