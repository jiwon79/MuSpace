import React, { useEffect } from 'react'
import BackgroundPlanet from './../../components/BackgroundPlanet'
import Keywords from './../../components/Keywords'
import './Planet.css'

export default function Planet({menu, setMenu}) {
  useEffect(() => {
    setMenu('myspace');
  }, [menu, setMenu]);
  
  return (
    <div>
      <BackgroundPlanet
        focus={true}
      />
      <div className="message">
        옷을 희망의 주는 구형 말이다. 찾아 보이는 청춘을 교향악이다. 반짝이는 가치를 거선의 아니다.
      </div>
      <Keywords/>
    </div>
  )
}
