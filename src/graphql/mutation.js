import { gql } from '@apollo/client'

export const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`

export const SIGNIN_USER = gql`
    mutation signIn($email: String!, $password: String!) {
      signIn(email: $email, password: $password)
    }
`

export const ADD_NOTE = gql`
  mutation newNote($content: String!) {
    newNote(content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        id
        username
      }
    }
  } 
`