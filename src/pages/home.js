import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`

const Home = () => {
  useEffect(() => {
    document.title = 'Home — Notedly'
  })

  const { data, loading, error } = useQuery(GET_NOTES)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error...</p>

  return (
    <div>
      {data.noteFeed.notes.map(note => (
        <div key={note.id}>{note.content} by {note.author.username}</div>
      ))}
    </div>
  )
}

export default Home