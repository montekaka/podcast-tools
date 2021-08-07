// import React from "react";
import PlayerContainer from './PlayerContainer'
import EpisodeList from './EpisodeList'
import PlayerHolder from './PlayerHolder'

const JCPlayer = () => {
  return (
    <div className="jc-player-wrapper">
      <PlayerContainer/>
      <EpisodeList/>
      <PlayerHolder/>
    </div>
  )
}

export default JCPlayer;