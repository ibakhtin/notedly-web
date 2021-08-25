import React from 'react'

const NotePage = (props) => (
  <div>
    <p>ID: {props.match.params.id}</p>
  </div>
)

export default NotePage