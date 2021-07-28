import React, { useEffect } from 'react'
import BackgroundPlanet from './../../components/BackgroundPlanet'

export default function Planet({menu, setMenu}) {
  useEffect(() => {
    setMenu('myspace');
  }, [menu, setMenu]);
  
  return (
    <div>
      planet
      <BackgroundPlanet/>
    </div>
  )
}
