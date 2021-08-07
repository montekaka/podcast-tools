import {useAtom} from "jotai"
import ReactPlayer from 'react-player'
import { playerAtom, episodesAtom, updatePlayerAtom} from '../../jotai'

const PlayerHolder = () => {
  const [playerState] = useAtom(playerAtom);
  const [episodes] = useAtom(episodesAtom);
  const [_, updatePlayer] = useAtom(updatePlayerAtom);
  

  if(playerState.playingId >= 0 && episodes.length > 0) {
    const { audioUrl } = episodes[playerState.playingId];

    return (
      <ReactPlayer 
        url={audioUrl} 
        controls={true}
        height={"0"}
        width={"0"}    
        onProgress={(res) => {
          if(playerState.onSeeking === false) {
            const playedSeconds = res.playedSeconds;
            updatePlayer({playedSeconds})
          }
        }}
        onReady={(res) => {
          if(res) {
            updatePlayer({
              onReady: true, 
              durationSeconds: res.getDuration(),
              playerRef: res
            })
          }
        }}
        playing={playerState.playing}     
      />
    )
  }

  return null;
}

export default PlayerHolder;