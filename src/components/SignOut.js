import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { isLoggedIn } from '../graphql/query'


const SignOut = (props) => {
  const { data, client } = useQuery(isLoggedIn)

  const onClick = () => {
    localStorage.removeItem('Token')
    client.resetStore()
    client.writeQuery({ query: isLoggedIn, data: { isLoggedIn: false } })
    console.log(data)
    props.history.push('/')
  }

  return <Link to='/' onClick={onClick}>Sign out</Link>
}

export default withRouter(SignOut)