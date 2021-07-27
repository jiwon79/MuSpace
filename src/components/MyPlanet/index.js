import React from 'react'
import './Planet.css'

export default function MyPlanet({focus}) {
  return (
    <div className="planet">
      <img 
        src="/img/circle.png" 
        alt="planet"
        className={['planet__img', focus && 'planet-animation'].join(' ')}
      />
    </div>
  )
}
