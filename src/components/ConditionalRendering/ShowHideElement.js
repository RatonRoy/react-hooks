import React, { useState } from 'react'
import ShowElement from './ShowElement'

const ShowHideElement = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{ display: 'block', textAlign: 'center' }}
          className='btn'
          onClick={() => setShow(!show)}
        >
          Show / Hide
        </button>
      </div>
      <section>
        {/* conditional and operator  */}
        {/* {show && <ShowElement />} */}
        {/* Using ternary operator  */}

        {show ? <ShowElement /> : ''}
      </section>
    </>
  )
}

export default ShowHideElement
