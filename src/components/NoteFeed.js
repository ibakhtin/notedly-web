import React from 'react'
import Note from './Note'

const NoteFeed = ({ notes }) => (
  <div>
    { notes.map(note => (
        <Note key={ note.id } note={ note }/>
    )) }
  </div>
)

export default NoteFeed