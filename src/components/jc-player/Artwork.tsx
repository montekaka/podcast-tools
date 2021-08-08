const Artwork = (props: any) => {
  const {artworkUrl} = props;
  return (
    <div className="artwork">
      <img 
        className="artwork-image"
        src={artworkUrl} 
        title="artwork"
      />
    </div>
  )
}

export default Artwork;