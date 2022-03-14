import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useSuperHeroData } from '../hooks/useSuperHeroData'

const RQSuperhero = () => {
  const { heroId } = useParams()
  const { isLoading, data, isError, error } = useSuperHeroData(heroId)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.alterEgo}</p>
    </div>
  )
}

export default RQSuperhero
