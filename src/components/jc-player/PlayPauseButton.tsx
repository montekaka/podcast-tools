import { Play, Pause } from 'react-feather';
import {useAtom} from "jotai"
import { playerAtom, togglePlayPauseAtom } from '../../jotai'

const PlayPauseButton = () => {

  const [playerState] = useAtom(playerAtom);
  const {playing} = playerState;
  
  const [, togglePlayPause] = useAtom(togglePlayPauseAtom);

  return (
    <div 
      onClick={togglePlayPause}
      className="play-pause-button" 
      style={{background: "#123123"}}
    >
      {playing ? <Pause style={{color: "white"}} className="icon"/> : <Play style={{color: "white"}} className="icon"/>}
    </div>    
  )
}

export default PlayPauseButton