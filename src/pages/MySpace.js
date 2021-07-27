import React, { useState } from 'react'
import MyPlanet from './../components/MyPlanet'

export default function MySpace() {
  const [focus, setFocus] = useState(false);

  return (
    <div>
      <button onClick={() => {
        console.log(focus);
        setFocus(!focus);
        }
      }>animation</button>
      <MyPlanet
        focus = {focus}
      />
    </div>
  )
}
