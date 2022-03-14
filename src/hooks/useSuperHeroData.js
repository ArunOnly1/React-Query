import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHero = async ({ queryKey }) => {
  const heroId = queryKey[1]
  return await axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
export const useSuperHeroData = (heroId) => {
  return useQuery(['super-hero', heroId], fetchSuperHero, {
    select: (data) => {
      return data.data
    },
  })
}
