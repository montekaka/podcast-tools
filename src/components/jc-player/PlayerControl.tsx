import PlayPauseButton from "./PlayPauseButton";
import ProgressBackward from './ProgressBackward'
import ProgressForward from './ProgressForward'

const PlayerControl = () => {
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
          <div className="time">00:00:00</div>
          <div className="time">00:22:33</div>
        </div>
        <div className="slidecontainer">
          <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
        </div>
      </div>
    </div>
  )
}

export default PlayerControl;