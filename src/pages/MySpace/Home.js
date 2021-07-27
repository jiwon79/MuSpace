import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BackgroundPlanet from './../../components/BackgroundPlanet'

export default function Home() {
  const [focus, setFocus] = useState(false);

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
