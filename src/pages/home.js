import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'

import NoteFeed from '../components/NoteFeed'
import Button from '../components/Button'
import { GET_NOTES } from '../graphql/query'

const Home = () => {
  useEffect(() => {
    document.title = 'Home — Notedly'
  })

  const { data, loading, error, fetchMore } = useQuery(GET_NOTES)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error...</p>

  const onClick = () => fetchMore({
    variables: {
      cursor: data.noteFeed.cursor
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      return {
        noteFeed: {
          cursor: fetchMoreResult.noteFeed.cursor,
          hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
          notes: [
            ...previousResult.noteFeed.notes,
            ...fetchMoreResult.noteFeed.notes
          ],
          __typename: 'noteFeed'
        }
      }
    }
  })

  return (
    <>
      <NoteFeed notes={data.noteFeed.notes}/>
      {data.noteFeed.hasNextPage && (
        <Button onClick={onClick}>Load more</Button>
      )}
    </>
  )
}

export default Home