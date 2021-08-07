import { useState } from "react";
import {useAtom} from "jotai"
import { playerAtom } from '../../jotai'
import PlayPauseButton from "./PlayPauseButton";
import ProgressBackward from './ProgressBackward'
import ProgressForward from './ProgressForward'

const PlayerControl = () => {
  const [playerState] = useAtom(playerAtom);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [playedPercentage, setPlayedPercentage] = useState("0");

  return (
    <div className="player-control">
      {/* <Camera style={{color: '#ACDAF5'}}/> */}
      <div className="controls">
        <ProgressBackward/>
        <PlayPauseButton/>        
        <ProgressForward/>
      </div>
      <div className="progress-bar">
        <div className="progress-time">
          <div className="time">{playerState.playedSeconds}</div>
          <div className="time">{playerState.durationSeconds}</div>
        </div>
        <div className="slide-container">
          <input 
            type="range" 
            min={0} 
            max={playerState.durationSeconds} 
            step={0.01}
            value={playerState.playedSeconds}
            onChange={(e) => {
              setPlayedSeconds(Number(e.target.value))
              setPlayedPercentage(e.target.value);
            }}
            className="slider"
            id="time-progress-bar"
            style={{
              background: `linear-gradient(90deg, rgb(117, 252, 117) ${playedPercentage}%, rgb(214, 214, 214) ${playedPercentage}% )`
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PlayerControl;