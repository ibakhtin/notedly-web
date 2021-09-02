import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { IS_LOGGED_IN } from '../graphql/query'


const SignOut = (props) => {
  const { data, client } = useQuery(IS_LOGGED_IN)

  const onClick = () => {
    localStorage.removeItem('Token')
    client.resetStore()
    client.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: false } })
    console.log(data)
    props.history.push('/')
  }

  return <Link to='/' onClick={onClick}>Sign out</Link>
}

export default withRouter(SignOut)