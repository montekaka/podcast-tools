import {useAtom} from "jotai"
import ReactPlayer from 'react-player/lazy'
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
        onError={(err) =>{ 
          console.log('can not load', err)
        }}   
        onEnded={() => {
          const idx = playerState.playingId + 1;
          if(idx < episodes.length) {
            // go to the next episode
            updatePlayer({
              playingId: idx, 
              durationSeconds: 0,
              playedSeconds: 0,
              playing: true, 
              onReady: false
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