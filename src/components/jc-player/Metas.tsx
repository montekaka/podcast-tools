import {episodesAtom, playingIdAtom} from '../../jotai'
import {useAtom} from "jotai"

const Metas = (props: any) => {
  const {podcastTitle, title} = props;

  return (
    <div className="metas">
      <div className="subtitle">{podcastTitle}</div>
      <div className="title">{title}</div>
      {props.children}
    </div>
  )
}

export default Metas;