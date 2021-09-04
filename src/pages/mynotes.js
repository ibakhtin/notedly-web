import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_MY_NOTES } from '../graphql/query'

import NoteFeed from '../components/NoteFeed'
import { Text } from '../ui'

const MyNotes = () => {
  useEffect(() => {
    document.title = 'My Notes — Notedly'
  })

  const { data, loading, error } = useQuery(GET_MY_NOTES)

  if (loading) return 'Loading...'

  if (error) return `Error: ${error.message}`

  if (data.me.notes.length > 0) return <NoteFeed notes={data.me.notes} />
  else return <Text>No notes yet.</Text>
}

export default MyNotes