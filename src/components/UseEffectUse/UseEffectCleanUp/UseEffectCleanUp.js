import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }
  // cleanup function remove the event listener after call the event  otherwise it call again and again in the browser.
  useEffect(() => {
    console.log('useEffect call ')
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('clean up function')
      window.removeEventListener('resize', checkSize)
    }
  })

  console.log('component render')
  return (
    <>
      <h1> useEffect Clean Up Function </h1>
      <section className='section content-center'>
        <div>
          <h1> {size} </h1>
          <h2> Window Size : </h2>
        </div>
      </section>
    </>
  )
}

export default UseEffectCleanUp
