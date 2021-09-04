import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import NoteForm from './NoteForm'
import { Text } from '../ui'

import { ADD_NOTE } from '../graphql/mutation'

const NewNote = props => {
  useEffect(() => {
    document.title = 'New Note — Notedly'
  })

  const [addNote, { loading, error }] = useMutation(
    ADD_NOTE,
    {
      onCompleted: data => props.history.push(`/note/${data.newNote.id}`)
    }
  )

  return <>
    {loading && <Text>Loading...</Text>}
    {error && <Text>Error saving the note.</Text>}
    <NoteForm action={addNote}/>
  </>
}

export default NewNote