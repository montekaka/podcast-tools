import {useAtom} from "jotai"
import ChaptersListItem from './ChaptersListItem'
import {chaptersAtom, updatePlayedTimeAtom} from '../../jotai'

const ChaptersList = () => {

  const [chapters] = useAtom(chaptersAtom);
  const [_, updatePlayTime] = useAtom(updatePlayedTimeAtom);

  const handleClick = (id:number) => {
    updatePlayTime(chapters[id].startTime);
  }

  return (
    <div className="chapters">
      {
        chapters.map((chapter, idx) => {
          if(chapter.title && chapter.startTime) {
            return <ChaptersListItem
              id={idx}
              key={`chapter-${idx+1}`}
              title={chapter.title}
              startTime={chapter.startTime}
              onClick={handleClick}
            />
          } else {
            return null;
          }
        })
      }          
    </div>
  )
}

export default ChaptersList;