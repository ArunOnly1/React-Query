import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = async () => {
  return await axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = async () => {
  return await axios.get('http://localhost:4000/friends')
}

const ParallelQueries = () => {
  useQuery('super-heroes', fetchSuperHeroes)
  useQuery('friends', fetchFriends)
  return <div>ParallelQueries</div>
}

export default ParallelQueries
