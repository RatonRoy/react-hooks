import React, { useEffect, useState } from 'react'

const UseEffectBasic = () => {
  const [value, setValue] = useState(0)
  // No dependencies parameter useEffect run every component render or change the state values this is the default behavior of useEffect.
  /* useEffect(() => {
    console.log('useEffect call')
    document.title = `New title ${value} `
  }) */

  // Never add useEffect or any hook inside a condition it doesn't work and it is break the hooks rules.
  // if(value > 2) {
  //  useEffect(() => {
  //    console.log('useEffect call')
  //    document.title = `New title ${value} `
  //  })
  // }

  // use the condition inside the hook here inside the call back function.
  /*  useEffect(() => {
    console.log('useEffect call with a condition')
    if (value >= 2) {
      document.title = `New title ${value} `
    }
  })
 */
  // with empty array dependencies it run only initial render
  /* useEffect(() => {
    console.log('useEffect call with empty array')
    if (value >= 2) {
      document.title = `New title ${value} `
    }
  }, []); */

  // give a or more dependent value it call after change the dependent value.

  useEffect(() => {
    console.log('useEffect call with a dependent value')
    if (value >= 2) {
      document.title = `New title ${value} `
    }
  }, [value])

  // you can add more than one useEffect in a component
  useEffect(() => {
    console.log(' 2nd  useEffect call ')
  })

  console.log('render function')
  return (
    <>
      <h1> useEffect Basic </h1>

      <section className='section content-center '>
        <div className=''>
          <h1> {value} </h1>
          <button
            className='btn'
            onClick={() => setValue(value + 1)}
            style={{ display: 'block' }}
          >
            {' '}
            Click Me{' '}
          </button>
        </div>
      </section>
    </>
  )
}

export default UseEffectBasic
