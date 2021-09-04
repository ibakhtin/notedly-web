import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import NoteForm from './NoteForm'
import { Text } from '../ui'

import { ADD_NOTE } from '../graphql/mutation'
import { GET_MY_NOTES, GET_NOTES } from '../graphql/query'

const AddNote = props => {
  useEffect(() => {
    document.title = 'New Note — Notedly'
  })

  const [addNote, { loading, error }] = useMutation(
    ADD_NOTE,
    {
      refetchQueries: [{query: GET_MY_NOTES}, {query: GET_NOTES}],
      onCompleted: data => props.history.push(`/note/${data.newNote.id}`)
    }
  )

  return <>
    {loading && <Text>Loading...</Text>}
    {error && <Text>Error saving the note.</Text>}
    <NoteForm action={addNote}/>
  </>
}

export default AddNote