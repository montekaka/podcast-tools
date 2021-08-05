const Metas = (props: any) => {
  return (
    <div className="metas">
      <div className="subtitle">name - date</div>
      <div className="title">We finally hired developers 🎉 Plus, our new sales pipeline (Ep. 39)</div>
      {props.children}
    </div>
  )
}

export default Metas;