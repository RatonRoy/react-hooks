import React, { useState, useContext, createContext } from 'react'
import data from '../../Demo_Data/peopleData'

const PersonContext = React.createContext()

// two components - Provider, Consumer
const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <>
      {/*
       ** Provider component act as a distributer.
       ** wrap the root component.
       ** have a value props
       */}
      <PersonContext.Provider value='hello context'>
        <List people={people} removePerson={removePerson} />
      </PersonContext.Provider>
    </>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name, removePerson }) => {
  const data = useContext(PersonContext)
  console.log(data)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
