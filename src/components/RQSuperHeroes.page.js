import React from 'react'
import { Link } from 'react-router-dom'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'

const RQSuperHeroes = () => {
  const onSuccess = (data) => {
    console.log('Perform side effect after fetching data')
  }

  const onError = () => {
    console.log('Perform side effect after encountering error')
  }

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError)

  console.log({ isLoading, isFetching })

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    console.log({ error: error.response })
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      {/* <button onClick={refetch}>Click me</button> */}

      {data?.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  )
}

export default RQSuperHeroes
