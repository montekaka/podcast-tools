const EpisodeListItem = (props:any) => {
  const {pubDate, id, title, onClick} = props;

  return (
    <div className="item" onClick={() => {
      onClick(id);
    }}>
      <div className="subtitle">        
        <div>{pubDate}</div>
      </div>
      <div className="title">{title}</div>
    </div>
  )
}

export default EpisodeListItem;