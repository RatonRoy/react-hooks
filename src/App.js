import { useState } from 'react'
import './App.css'
import RemovePeople from './components/RemovePeople/RemovePeople'
import peoplesData from './Demo_Data/peopleData'

function App() {
  const [peoples, setPeoples] = useState(peoplesData)

  const removePeople = (id) => {
    let newPeople = peoples.filter((person) => person.id !== id)
    setPeoples(newPeople)
  }

  return (
    <>
      {peoples.map((people) => {
        return (
          <>
            <div className='item'>
              <RemovePeople
                key={people.id}
                people={people}
                saveRemovePeople={removePeople}
              />
              <button className='' onClick={() => removePeople(people.id)}>
                Remove
              </button>
            </div>
          </>
        )
      })}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className='btn' onClick={() => setPeoples([])}>
          Clear All
        </button>
      </div>
    </>
  )
}

export default App
