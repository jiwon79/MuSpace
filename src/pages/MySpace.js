import React, { useState } from 'react'
import Header from './../components/Header'
import MyPlanet from './../components/MyPlanet'

export default function MySpace() {
  const [focus, setFocus] = useState(false);

  return (
    <div>
      <Header/>
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
