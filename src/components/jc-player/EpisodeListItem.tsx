import {format} from 'date-fns'

const EpisodeListItem = (props:any) => {
  const {pubDate, id, title, onClick} = props;

  return (
    <div className="item" onClick={() => {
      onClick(id);
    }}>
      <div className="subtitle">        
        <div>{format(new Date(pubDate), 'MM/dd/yyyy')}</div>
      </div>
      <div className="title">{title}</div>
    </div>
  )
}

export default EpisodeListItem;