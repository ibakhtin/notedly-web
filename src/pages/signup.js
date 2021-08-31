import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMutation, useApolloClient, gql } from '@apollo/client'

import Button from '../components/Button'
import Input from '../components/Input'

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`

const Form = styled.form`
  label,
  input {
    display: block;
  }

  label {
    font-size: 14px;
    margin-bottom: 0.33em;
  }

  input {
    margin-bottom: 1em;
  }
`

const SignUp = (props) => {

  useEffect(() => {
    document.title = 'Sign Up — Notedly'
  })

  const [values, setValues] = useState({ username: '', email: '', password: '' })

  const client = useApolloClient()

  const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
      signUp(email: $email, username: $username, password: $password)
    }
  `

  const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      localStorage.setItem('Token', data.signUp)
      client.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: true } })
      props.history.push('/')
    }
  })

  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    signUp({ variables: { ...values } })
    setValues({ username: '', email: '', password: '' })
  }

  return (
    <Wrapper>
      <h2>Sign Up</h2>
      <Form onSubmit={onSubmit}>
        <label htmlFor="username">Username:</label>
        <Input
          required
          value={values.username}
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={onChange}
        />
        <label htmlFor="email">Email:</label>
        <Input
          required
          value={values.email}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <label htmlFor="password">Password:</label>
        <Input
          required
          value={values.password}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Wrapper>
  )
}

export default SignUp