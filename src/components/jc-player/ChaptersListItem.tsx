import {getHHMMSSFromSeconds} from '../../libs'
import {useAtom} from "jotai"
import {playerSkinAtom} from '../../jotai'

const ChaptersListItem = (props:any) => {
  const {title, startTime, id, onClick} = props;
  const [playerSkin] = useAtom(playerSkinAtom)

  return (
    <div className="chapter" onClick={() => {
      onClick(id);
      }}
      style={{
        backgroundColor: playerSkin.chapterBackgroundColor,
        color: playerSkin.chapterTextColor
      }}
    >
      <div className="chapter-title">{title}</div>
      <div className="chapter-subtitle">{getHHMMSSFromSeconds(startTime)}</div>
    </div>
  )
}

export default ChaptersListItem;