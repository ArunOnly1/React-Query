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

  const { data: channelData, isLoading } = useQuery(
    ['channel', channelId],
    fetchChannel,
    {
      enabled: !!channelId,
      select: (data) => data.data,
    }
  )

  if (isLoading) {
    return <h2>Loading ...</h2>
  }

  return (
    <div>
      {channelData?.courses.map((course, index) => {
        return <p key={index}>{course}</p>
      })}
    </div>
  )
}

export default DependentQueryPage
