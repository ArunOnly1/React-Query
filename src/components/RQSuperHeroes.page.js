import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      // default cacheTime is 5 minutes and that is okay
      // cacheTime: 5000,
      // default staleTime is 0
      // staleTime: 30000,
      // refetchOnMount provides same behaviour as traditional way
      // refetchOnMount: true,
      // refetchOnWindowFocus: 'always',
      // by default refetchInterval is false
      // refetchInterval: 2000,
      // refetchIntervalInBackground fetches data in background even when the window is not in focus
      // refetchIntervalInBackground: true,
      // enabled decides whether to run query when component mounts or not, by default:true
      enabled: false,
    }
  )

  console.log({ isLoading, isFetching })

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    console.log({ error: error.response })
    return <h2>{error.message}</h2>
  }

  const { data: heroesData } = data ? data : []

  return (
    <>
      <h2>RQSuperHeroes</h2>
      <button onClick={refetch}>Click me</button>
      {heroesData?.map((hero) => (
        <p key={hero.id}>{hero.name}</p>
      ))}
    </>
  )
}

export default RQSuperHeroes
