import React, { useEffect } from 'react'

export default function OurSpace({menu, setMenu}) {
  useEffect(() => {
    setMenu('ourspace');
  }, [menu, setMenu]);

  return (
    <div>
      Our space
    </div>
  )
}
