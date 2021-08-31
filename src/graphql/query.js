import { gql } from '@apollo/client'

export const isLoggedIn = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`