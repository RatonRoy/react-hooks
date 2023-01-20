import React, { useEffect, useState } from 'react'

const MultipleReturns = () => {
  const url = 'https://api.github.com/users/ezmobius'

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('Default User')

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        // this is the network status or errors if data come successfully the status remain between 200 to 299.
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        }
        // otherwise it become face an errors like this
        else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((data) => {
        console.log(data)
        setUser(data)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (isLoading) {
    return <h2> Loading ..... </h2>
  }
  if (isError) {
    return <h1> Error..... </h1>
  }
  return (
    <>
      <div>
        <h1> {user.login} </h1>
      </div>
    </>
  )
}

export default MultipleReturns
