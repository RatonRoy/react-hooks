import React from 'react'

const RemovePeople = (props) => {
  const { id, name, saveRemovePeople } = props.people
  return (
    <div className=''>
      <h4> {name} </h4>
    </div>
  )
}

export default RemovePeople
