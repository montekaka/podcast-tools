import { useState } from "react";
import {RotateCcw, RotateCw} from 'react-feather'
import {useAtom} from "jotai"
import { playerAtom, updatePlayerAtom, updatePlayedTimeAtom} from '../../jotai'
import PlayPauseButton from "./PlayPauseButton";
import ProgressBackward from './ProgressBackward'
import ProgressForward from './ProgressForward'
import ProgressChangeButton from './ProgressChangeButton'

const PlayerControl = () => {
  const [playerState] = useAtom(playerAtom);
  const [, updatePlayer] = useAtom(updatePlayerAtom);
  const {durationSeconds, playedSeconds, playerRef} = playerState;
  const [, updatePlayedTime] = useAtom(updatePlayedTimeAtom)

  // const handleProgressChange = (seconds: number) => {
  //   let playedSeconds = seconds;
  //   if(seconds >= durationSeconds) {
  //     playedSeconds = durationSeconds;
  //   } else if (seconds <= 0 ){
  //     playedSeconds = 0;
  //   }
  //   playerRef.seekTo = playedSeconds;
  // }

  return (
    <div className="player-control">
      {/* <Camera style={{color: '#ACDAF5'}}/> */}
      <div className="controls">
        <ProgressChangeButton label="5" 
          onClick={() => {
            updatePlayedTime(playedSeconds-5)
          }}
        >
          <RotateCcw className="icon"/>
        </ProgressChangeButton> 
        <PlayPauseButton/>
        <ProgressChangeButton label="30"
          onClick={() => {
            updatePlayedTime(playedSeconds+30)
          }}        
        >
          <RotateCw className="icon"/>
        </ProgressChangeButton>                                
        {/* <ProgressBackward/>
        <ProgressForward/> */}
      </div>
      <div className="progress-bar">
        <div className="progress-time">
          <div className="time">{playedSeconds}</div>
          <div className="time">{durationSeconds}</div>
        </div>
        <div className="slide-container">
          <input 
            type="range" 
            min={0} 
            max={durationSeconds} 
            step={0.01}
            value={playedSeconds}
            onMouseDown={() => {
              updatePlayer({onSeeking: true})
            }}
            onMouseUp={() => {
              playerRef.seekTo(playedSeconds)
              updatePlayer({onSeeking: false})
            }}
            onChange={(e) => {
              updatePlayer({playedSeconds: Number(e.target.value)})
            }}
            className="slider"
            id="time-progress-bar"
            style={{
              background: `linear-gradient(90deg, rgb(117, 252, 117) ${durationSeconds <= 1 ? 0 : playedSeconds * 100 / durationSeconds}%, rgb(214, 214, 214) ${durationSeconds <= 1 ? 0 : playedSeconds * 100 / durationSeconds}% )`
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PlayerControl;