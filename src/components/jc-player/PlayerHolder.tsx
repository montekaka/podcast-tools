import {useAtom} from "jotai"
import ReactPlayer from 'react-player/lazy'
import { playerAtom, episodesAtom, updatePlayerAtom, updatePlayingIdAtom, playingIdAtom} from '../../jotai'

const PlayerHolder = () => {
  const [playerState] = useAtom(playerAtom);
  const [episodes] = useAtom(episodesAtom);
  const [_, updatePlayer] = useAtom(updatePlayerAtom);
  const [playerId] = useAtom(playingIdAtom)
  const [, updatePlayingId] = useAtom(updatePlayingIdAtom);

  // console.log(playerId)

  if(playerId >= 0 && episodes.length > 0) {
    const { audioUrl } = episodes[playerId];

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
          const idx = playerId+ 1;
          if(idx < episodes.length) {
            // go to the next episode
            updatePlayer({
              durationSeconds: 0,
              playedSeconds: 0,
              playing: true, 
              onReady: false
            })

            updatePlayingId(idx);
          }
        }}     
        playing={playerState.playing}     
      />
    )
  }

  return null;
}

export default PlayerHolder;