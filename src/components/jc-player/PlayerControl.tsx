import { useState } from "react";

import PlayPauseButton from "./PlayPauseButton";
import ProgressBackward from './ProgressBackward'
import ProgressForward from './ProgressForward'

const PlayerControl = () => {

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
          <div className="time">{playedSeconds}</div>
          <div className="time">00:22:33</div>
        </div>
        <div className="slide-container">
          <input 
            type="range" 
            min={1} 
            max={100} 
            step={0.01}
            value={playedSeconds}
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