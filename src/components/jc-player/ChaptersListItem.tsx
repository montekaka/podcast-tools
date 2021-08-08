import {getHHMMSSFromSeconds} from '../../libs'


const ChaptersListItem = (props:any) => {
  const {title, startTime, id, onClick} = props;

  return (
    <div className="chapter" onClick={() => {
      onClick(id);
    }}>
      <div className="chapter-title">{title}</div>
      <div className="chapter-subtitle">{getHHMMSSFromSeconds(startTime)}</div>
    </div>
  )
}

export default ChaptersListItem;