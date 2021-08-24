import React from 'react'
import ReactMarkdown from 'react-markdown'
import { format } from 'date-fns'
import styled from 'styled-components'

const StyledNote = styled.article`
  background-color: #fff;
  color: #444;
  max-width: 800px;
  margin: 1.5em;
  padding: 2em 2em 1em;
  border-radius: 1em;
  box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.025);
`

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: flex-start;
  }
`

const MetaInfo = styled.div`
  padding-right: 1em;
`

const UserAction = styled.div`
  margin-left: auto;
`

const Avatar = styled.img`
  border-radius: 50%;
`

const Note = ({ note }) => (
  <StyledNote>
    <MetaData>
      <MetaInfo>
        <Avatar
          src={ note.author.avatar }
          alt={ `${ note.author.username } avatar` }
          height="48px"
        />
      </MetaInfo>
      <MetaInfo>
        <em>by</em> { note.author.username } <br/>
        { format(new Date(note.createdAt), 'yyyy-MM-dd') }
      </MetaInfo>
      <UserAction>
        <em>Favorites:</em> { note.favoriteCount }
      </UserAction>
    </MetaData>
    <ReactMarkdown>{ note.content }</ReactMarkdown>
  </StyledNote>
)

export default Note