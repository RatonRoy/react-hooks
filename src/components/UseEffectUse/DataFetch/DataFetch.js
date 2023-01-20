import React, { useEffect, useState } from 'react'

const DataFetch = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const url = 'https://api.github.com/users'

  const getUsers = async () => {
    const response = await fetch(url)
    const resUser = await response.json()
    setIsLoading(false)
    setUsers(resUser)
    // console.log(resUser)
  }
  // don't use async inside useEffect callback function because useEffect not working this way.
  /*  useEffect(async() => {
    
  }, []) */

  // must give a empty array when data fetching or rerendering the component other wise the browser going crush.
  useEffect(() => {
    getUsers()
  }, [])

  if (isLoading) {
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <h1 style={{ textAlign: 'center' }}> Loading........... </h1>
        </div>
      </>
    )
  }

  return (
    <>
      <h1> Github Users </h1>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt='login' />
              <div>
                <h4> login </h4>
                <a href={html_url}> Profile </a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default DataFetch
