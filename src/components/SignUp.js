import React, { useEffect, useState } from 'react'
import { useMutation, useApolloClient } from '@apollo/client'

import { IS_LOGGED_IN } from '../graphql/query'
import { SIGNUP_USER } from '../graphql/mutation'
import UserForm from './UserForm'

const SignUp = (props) => {

  useEffect(() => {
    document.title = 'Sign Up — Notedly'
  })

  const client = useApolloClient()

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      localStorage.setItem('Token', data.signUp)
      client.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: true } })
      props.history.push('/')
    }
  })

  return (
    <>
      <UserForm action={signUp} formType="signup" />
      {loading && <p>Loading...</p>}
      {error && <p>Error signing up!</p>}
    </>
  )
}

export default SignUp