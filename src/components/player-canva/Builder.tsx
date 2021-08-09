import {useState} from 'react'
import {useAtom} from 'jotai'
import {podcastRssAtom, playerSkinOptions, updateColorAtom, playerSkinAtom} from '../../jotai'
import ColorPicker from './ColorPicker'

const Builder = () => {
  const [rssFeed, setRssFeed] = useState('');  
  const [_, rssFeedSet] = useAtom(podcastRssAtom);  
  const [playerColorOptions] = useAtom(playerSkinOptions);
  const [, updateColor] = useAtom(updateColorAtom)
  const [playerSkin] : any = useAtom(playerSkinAtom);

  const handleRSSFeed = () => {
    if(rssFeed.length > 0) {
      rssFeedSet(rssFeed);
    }    
  }

  const handleColorChange = (x:any) => {
    updateColor(x)
  }

  // const handleOptionClick = (id:string) => {
  //   selectingColorIdSet(id)
  // }

  // const handleColorChange = (color: string) => {
  //   updateColor(color);
  // }


  return (
    <div>
      <div>
        <div>RSS Feed</div>
        <div>
          <input value={rssFeed} onChange={(e) => {
            setRssFeed(e.target.value)
          }}/>
        </div>
        <div onClick={handleRSSFeed}>Update</div>
      </div>
      <div>
        <div>
          {
            playerColorOptions.map((item, idx) => 
              <div key={item.id}>
                <div>{item.label}</div>
                <ColorPicker 
                  color={playerSkin[item.id]} 
                  handleColorChange={handleColorChange}
                  id={item.id}
                />
              </div>
            )
          }
        </div>        
      </div>
    </div>
  )
}

export default Builder;