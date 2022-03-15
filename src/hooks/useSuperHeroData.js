import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

const fetchSuperHero = async ({ queryKey }) => {
  const heroId = queryKey[1]
  return await axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient()

  return useQuery(['super-hero', heroId], fetchSuperHero, {
    select: (data) => {
      return data.data
    },
    initialData: () => {
      const hero = queryClient
        .getQueryData('superHeroes')
        ?.data?.find((hero) => hero.id === parseInt(heroId))

      if (hero) {
        return {
          data: hero,
        }
      } else {
        return undefined
      }
    },
  })
}
