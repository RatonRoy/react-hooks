import React, { useReducer, useState } from 'react'
import data from '../../Demo_Data/peopleData'
import Modal from './Modal/Modal'

const reducer = (state, action) => {
  console.log(state)
  if (action.type === 'test') {
    return {
      ...state,
      people: data,
      isShowModal: true,
      modalContent: 'hello reducer',
    }
  }
  // return state
  throw new Error('No Matching Action');
}

const UseReducer = () => {
  // const [people, setPeople] = useState(data)
  // const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('');

  const defaultState = {
    people: [],
    isShowModal: false,
    modalContent: '',
  }

  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      dispatch({ type: 'test' })
    } else {
    }
  }

  return (
    <>
      <h2> useReducer Hook </h2>
      {state.isShowModal && <Modal modalContent={state.modalContent} />}

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
        <button type='submit' className='button btn' style={{padding : '0.7rem 1rem'}} >
          Add People 
        </button>
      </form>

      {state.people.map((person) => (
        <div key={person.id}>
          <h4 style={{ textAlign: 'center' }}> {person.name} </h4>
        </div>
      ))}
    </>
  )
}

export default UseReducer;
