import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'

// used when multiple single superhero detail must be fetched at the same time

const fetchSuperHero = async (heroId) => {
  return await axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
const DynamicParallerQueries = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id),
      }
    })
  )

  console.log({ queryResults })
  return <div>DynamicParallerQueries</div>
}

export default DynamicParallerQueries
