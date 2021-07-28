import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import BackgroundPlanet from './../../components/BackgroundPlanet'
import './Home.css'

export default function Home({menu, setMenu}) {
  const [focus, setFocus] = useState(false);
  
  useEffect(() => {
    setMenu('myspace');
  }, [menu, setMenu]);

  return (
    <div>
      {/* <button onClick={() => {
        console.log(focus);
        setFocus(!focus);
        }
      }>animation</button> */}
      <BackgroundPlanet
        focus = {focus}
      />
      <div className="album">
        <img className="album__cover" src="/img/album.png" alt="album-cover"/>
        <Link to="/MySpace/planet">
          <img className="album__play" src="/img/playIcon.png" alt="play-icon"/>
        </Link>
      </div>

    </div>
  )
}
