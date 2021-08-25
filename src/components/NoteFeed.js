import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Note from './Note'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const NoteFeed = ({ notes }) => (
  <div>
    { notes.map(note => (
      <StyledLink key={ note.id } to={ `note/${ note.id }` }>
        <Note note={ note }/>
      </StyledLink>
    )) }
  </div>
)

export default NoteFeed