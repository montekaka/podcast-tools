import { Play, Pause } from 'react-feather';

const PlayPauseButton = () => {
  return (
    <div className="play-pause-button" style={{background: "#123123"}}>
      <Play style={{color: "white"}} className="icon"/>
    </div>    
  )
}

export default PlayPauseButton