import {useAtom} from "jotai"
import { playerSkinAtom} from '../../jotai'

const ProgressChangeButton = (props: any) => {
  const {label, onClick} = props;
  const [playerSkin] = useAtom(playerSkinAtom);

  return (
    <div className="progress-control" onClick={onClick}>
      {props.children}
      <div className="label" style={{
        color: playerSkin.primaryButtonColor
      }}>{label}</div>
    </div>
  )
}

export default ProgressChangeButton;