import React, { useState } from 'react'
import data from '../../Demo_Data/peopleData'
import Modal from './Modal/Modal'

const AddPersone = () => {
  const [people, setPeople] = useState(data)
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name) {
      setShowModal(true)
      setPeople([...people, { id: new Date().getTime().toString(), name }])

      setName('')
    } else {
      setShowModal(true)
    }
  }

  return (
    <>
      <h2> useReducer Hook </h2>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className='form'>
        <div className=''>
          {/* <label htmlFor='name'>Name : </label> */}
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <button type='submit' className='button'>
          Add
        </button>
      </form>

      {people.map((person) => (
        <div key={person.id}>
          <h4 style={{ textAlign: 'center' }}> {person.name} </h4>
        </div>
      ))}
    </>
  )
}

export default AddPersone
