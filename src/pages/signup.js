import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMutation, useApolloClient } from '@apollo/client'

import Button from '../components/Button'
import Input from '../components/Input'
import { IS_LOGGED_IN } from '../graphql/query'
import { SIGNUP_USER } from '../graphql/mutation'

const Wrapper = styled.div`
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`

const Form = styled.form`
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

  const onSubmit = event => {
    event.preventDefault()
    signUp({ variables: { ...values } })
    setValues({ username: '', email: '', password: '' })
  }

  return (
    <Wrapper>
      <h2>Sign Up</h2>
      <Form onSubmit={onSubmit}>
        <Input
          label="Username:"
          required
          value={values.username}
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={onChange}
        />
        <Input
          label="Email:"
          required
          value={values.email}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <Input
          label="Password:"
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