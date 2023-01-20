import React, { useEffect, useState } from 'react'

const ShowElement = () => {
  const [size, setSize] = useState(window.innerWidth)

  const check = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('resize', check)
    }
  }, [])
  return (
    <>
      <h3 style={{ textAlign: 'center', color: 'green' }}>
        {' '}
        This text come from Show Element{' '}
      </h3>
      <h1 style={{ textAlign: 'center', color: 'green' }}>
        {' '}
        Window Size : {size} Px{' '}
      </h1>
    </>
  )
}

export default ShowElement
