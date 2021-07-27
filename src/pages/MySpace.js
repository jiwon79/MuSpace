import React, { useState } from 'react'
import BackgroundPlanet from './../components/BackgroundPlanet'

export default function MySpace() {
  const [focus, setFocus] = useState(false);

  return (
    <div>
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
