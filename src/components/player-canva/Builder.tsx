import {useState} from 'react'
import {useAtom} from 'jotai'
import {podcastRssAtom, getSelectingColorAtom, playerSkinOptions, selectingColorAtom, updateColorAtom} from '../../jotai'


const Builder = () => {
  const [rssFeed, setRssFeed] = useState('');  
  const [_, rssFeedSet] = useAtom(podcastRssAtom);  
  const [playerColorOptions] = useAtom(playerSkinOptions);
  const [selectingColorId, selectingColorIdSet] = useAtom(selectingColorAtom);
  const [selectedColor] = useAtom(getSelectingColorAtom)
  const [, updateColor] = useAtom(updateColorAtom)

  const handleRSSFeed = () => {
    if(rssFeed.length > 0) {
      rssFeedSet(rssFeed);
    }    
  }

  const handleOptionClick = (id:string) => {
    // const skin = playerColorOptions[id]['id'];   
    // const hexColor = playerSkin.chapterBackgroundColor ? playerSkin.chapterBackgroundColor : "#ffffff";
    // setColor(hexColor)
    selectingColorIdSet(id)
  }

  const handleColorChange = (color: string) => {
    updateColor(color);
  }


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
              <div key={item.id}
                onClick={() => {
                  handleOptionClick(item.id)
                }}
              >{item.label}</div>
            )
          }
        </div>        
      </div>
    </div>
  )
}

export default Builder;