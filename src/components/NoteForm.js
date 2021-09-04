import React, { useState } from 'react'
import styled from 'styled-components'

import Button from './Button'

const Wrapper = styled.div`
  height: 100%;
`

const Form = styled.form`
  height: 100%;
  max-width: 800px;
  padding: 1em;
  
`

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 90%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
`

function NoteForm(props) {
  const [value, setValue] = useState({ content: props.content || '' })

  function onChange(event) {
    setValue({ ...value, [event.target.name]: event.target.value })
  }

  function onSubmit(event) {
    event.preventDefault()
    props.action({ variables: { ...value } })
  }

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note content"
          value={value.content}
          onChange={onChange}
        />
        <Button outline round type="submit">Save</Button>
      </Form>
    </Wrapper>
  )
}

export default NoteForm