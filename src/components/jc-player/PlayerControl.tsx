
import {RotateCcw, RotateCw} from 'react-feather'
import {useAtom} from "jotai"
import { playerAtom, updatePlayerAtom, updatePlayedTimeAtom, playerSkinAtom} from '../../jotai'
import PlayPauseButton from "./PlayPauseButton";
import ProgressChangeButton from './ProgressChangeButton'
import {getHHMMSSFromSeconds} from '../../libs'

const PlayerControl = () => {
  const [playerState] = useAtom(playerAtom);
  const [, updatePlayer] = useAtom(updatePlayerAtom);
  const {durationSeconds, playedSeconds, playerRef} = playerState;
  const [, updatePlayedTime] = useAtom(updatePlayedTimeAtom)
  const [playerSkin] = useAtom(playerSkinAtom);

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
          <RotateCcw className="icon" 
            style={{
                color: playerSkin.primaryButtonColor
            }}
          />
        </ProgressChangeButton> 
        <PlayPauseButton/>
        <ProgressChangeButton label="30"
          onClick={() => {
            updatePlayedTime(playedSeconds+30)
          }}        
        >
          <RotateCw className="icon"
            style={{
              color: playerSkin.primaryButtonColor
            }}          
          />
        </ProgressChangeButton>                                
        {/* <ProgressBackward/>
        <ProgressForward/> */}
      </div>
      <div className="progress-bar">
        <div className="progress-time" style={{
          color: playerSkin.primaryTextColor
        }}>
          <div className="time">{getHHMMSSFromSeconds(playedSeconds)}</div>
          <div className="time">{getHHMMSSFromSeconds(durationSeconds)}</div>
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
              background: `linear-gradient(90deg, ${playerSkin.progressBarColor} ${durationSeconds <= 1 ? 0 : playedSeconds * 100 / durationSeconds}%, ${playerSkin.primaryTextColor} ${durationSeconds <= 1 ? 0 : playedSeconds * 100 / durationSeconds}% )`
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PlayerControl;