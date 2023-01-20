import React, { useState } from 'react'

const ShortCircuitElement = () => {
  // const [isError, setIsError] = useState('')
  // text is falsy if the text have no string value. text become truthy if the text have any string value.
  const [text, setText] = useState('text value')
  return (
    <>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        {/* if the text have a value then show the text value other wish show the other value conditional or operator work like this way in react   */}
        {text || (
          <h1 style={{ marginTop: '2rem', textAlign: 'center' }}>
            This text show if the text value become falsy{' '}
          </h1>
        )}
      </div>
      {/* if the text value is true or text have a string value then show the other text value otherwise nothing to show */}
      {text && (
        <h2 style={{ marginTop: '2rem', textAlign: 'center' }}>
          This text show if the text value become truthy.
        </h2>
      )}
    </>
  )
}

export default ShortCircuitElement
