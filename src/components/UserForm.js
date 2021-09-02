import React, { useState } from 'react'
import styled from 'styled-components'

import Button from './Button'
import Input from './Input'
import Label from './Label'

const Form = styled.form`
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;

  input,
  label {
    display: block;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
  }

  label {
    margin-bottom: 0.33em;
  }
`

const UserForm = props => {
  const [values, setValues] = useState()

  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = event => {
    event.preventDefault()
    props.action({
      variables: {...values}
    })
  }

  return (
    <Form onSubmit={onSubmit}>
      {props.formType === 'signin' && <h2>Sign In</h2>}
      {props.formType === 'signup' && <h2>Sign Up</h2>}
      {props.formType === 'signup' && (
        <>
          <Label>Username:</Label>
          <Input
            required
            type="text"
            id="username"
            name="username"
            placeholder="username"
            onChange={onChange}
          />
        </>
      )}
      <Label>Email:</Label>
      <Input
        required
        type="email"
        id="email"
        name="email"
        placeholder="email"
        onChange={onChange}
      />
      <Label>Passeord:</Label>
      <Input
        required
        type="password"
        id="password"
        name="password"
        placeholder="password"
        onChange={onChange}
      />
      <Button outline round type="submit">Submit</Button>
    </Form>
  )
}

export default UserForm