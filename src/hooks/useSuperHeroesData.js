import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('superHeroes', fetchSuperHeroes, {
    // default cacheTime is 5 minutes and that is okay
    // cacheTime: 5000,
    // default staleTime is 0
    // staleTime: 30000,
    // refetchOnMount provides same behaviour as traditional way
    // refetchOnMount: true,
    // refetchOnWindowFocus: 'always',
    // by default refetchInterval is false
    // refetchInterval: false,
    // refetchIntervalInBackground fetches data in background even when the window is not in focus
    // refetchIntervalInBackground: true,
    // enabled decides whether to run query when component mounts or not, by default:true
    // enabled: false,
    // cacheTime: 5000,

    onSuccess,
    onError,

    select: (data) => {
      return data.data
    },
  })
}
