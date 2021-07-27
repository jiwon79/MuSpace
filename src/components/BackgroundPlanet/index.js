import React from 'react'
import './BackgroundPlanet.css'

export default function BackgroundPlanet({focus}) {
  return (
    <div className="background-planet">
      <img 
        src="/img/circle.png" 
        alt="planet"
        className={['planet-img', focus && 'planet-animation'].join(' ')}
      />
    </div>
  )
}
