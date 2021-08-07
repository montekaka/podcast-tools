const ProgressChangeButton = (props: any) => {
  const {label, onClick} = props;

  return (
    <div className="progress-control" onClick={onClick}>
      {props.children}
      <div className="label">{label}</div>
    </div>
  )
}

export default ProgressChangeButton;