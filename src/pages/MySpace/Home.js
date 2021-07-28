import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import BackgroundPlanet from './../../components/BackgroundPlanet'

export default function Home({menu, setMenu}) {
  const [focus, setFocus] = useState(false);
  
  useEffect(() => {
    setMenu('myspace');
  }, [menu, setMenu]);

  return (
    <div>
      <Link to="/MySpace/planet">planet</Link>
      <button onClick={() => {
        console.log(focus);
        setFocus(!focus);
        }
      }>animation</button>
      <BackgroundPlanet
        focus = {focus}
      />
    </div>
  )
}
