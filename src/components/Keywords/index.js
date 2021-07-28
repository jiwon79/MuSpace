import React from 'react'
import './Keywords.css'

const KeywordItem = ({keyword}) => {
  return (
    <div className="keywords__item">
      {keyword}
    </div>
  )
}

export default function Keywords() {
  var keywordList = ["취미", "음식", "수집", "여행", "음악", "운동", "영화"];

  return (
    <div className="keywords">
      {keywordList.map(
        (keyword) => <KeywordItem keyword={keyword}/>
      )
      }
    </div>
  )
}
