import React from 'react'
import BackgroundPlanet from './../../components/BackgroundPlanet'

export default function Planet({menu, setMenu}) {
  setMenu('myspace');
  
  return (
    <div>
      planet
      <BackgroundPlanet/>
    </div>
  )
}
