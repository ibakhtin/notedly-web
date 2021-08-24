import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

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
        <article key={note.id}>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            height='50px'
          />
          {note.author.username} {note.createdAt} {note.favoriteCount}{' '}
          <ReactMarkdown>{note.content}</ReactMarkdown>
        </article>
      ))}
    </div>
  )
}

export default Home