import React, { useEffect } from 'react'
import { useMutation, useApolloClient } from '@apollo/client'

import UserForm from './UserForm'

import { SIGNIN_USER } from '../graphql/mutation'
import { IS_LOGGED_IN } from '../graphql/query'

const SignIn = props => {

  useEffect(() => {
    document.title = 'Sign In — Notedly'
  })

  const client = useApolloClient()

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      localStorage.setItem('Token', data.signIn)
      client.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: true } })
      props.history.push('/')
    }
  })

  return (
    <>
      <UserForm action={signIn} formType="signin"/>
      {loading && <p>Loading...</p>}
      {error && <p>Error signing in!</p>}
    </>
  )
}

export default SignIn