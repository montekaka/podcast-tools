import PlayPauseButton from "./PlayPauseButton";
import ProgressBackward from './ProgressBackward'
import ProgressForward from './ProgressForward'

const PlayerControl = () => {
  return (
    <div className="player-control">
      {/* <Camera style={{color: '#ACDAF5'}}/> */}
      <div className="controls">
        <PlayPauseButton/>
        <ProgressBackward/>
        <ProgressForward/>
      </div>
      <div className="progress-bar"></div>
    </div>
  )
}

export default PlayerControl;