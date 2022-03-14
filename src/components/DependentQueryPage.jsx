import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchUserByEmail = async ({ queryKey }) => {
  const email = queryKey[1]
  return await axios.get(`http://localhost:4000/users/${email}`)
}

const fetchChannel = async ({ queryKey }) => {
  const channelId = queryKey[1]
  return await axios.get(`http://localhost:4000/channels/${channelId}`)
}
const DependentQueryPage = ({ email }) => {
  const { data } = useQuery(['user', email], fetchUserByEmail, {
    select: (data) => data.data,
  })
  const channelId = data?.channelId

  useQuery(['channel', channelId], fetchChannel, {
    enabled: !!channelId,
  })
  return <div>DependentQueryPage</div>
}

export default DependentQueryPage
