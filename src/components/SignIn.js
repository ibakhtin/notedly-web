import React, { useEffect } from 'react'
import { useMutation, useApolloClient, gql, ApolloClient } from '@apollo/client'

import UserForm from '../components/UserForm'

import { SIGNIN_USER } from '../graphql/mutation'

const SignIn = props => {
  useEffect(() => {
    document.title = 'Sign In — Notedly'
  })

  const client = useApolloClient()

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      localStorage.setItem('Token', data.signIn)
      client.writeQuery({ query: SIGNIN_USER, data: { isLoggedIn: true } })
      props.history.push('/')
    }
  })

  return (
    <>
      <UserForm action={signIn} formType="signIn" />
      {loading && <p>Loading...</p>}
      {error && <p>Error signing in!</p>}
    </>
  )
}

export default SignIn