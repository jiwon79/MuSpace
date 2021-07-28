import React, { useEffect } from 'react'

export default function SpaceJourney({menu, setMenu}) {
  useEffect(() => {
    setMenu('journey');
  }, [menu, setMenu]);
  
  return (
    <div>
      Space Journey
    </div>
  )
}
