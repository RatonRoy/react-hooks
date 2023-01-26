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
       ** have a value props the value become a variable, constant, or a object.
       */}
      <PersonContext.Provider value={{ removePerson, people }}>
        <h1 style={{ textAlign: 'center', color: 'green' }}>
          {' '}
          Context API / useContext{' '}
        </h1>
        <List />
      </PersonContext.Provider>
    </>
  )
}

const List = () => {
  const mainData = useContext(PersonContext)
  // mainData reserve the full value object
  console.log(mainData)
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  // object destructuring
  const { removePerson } = useContext(PersonContext)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
