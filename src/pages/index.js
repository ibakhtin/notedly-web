import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Home from './home'
import MyNotes from './mynotes'
import Favorites from './favorites'
import NotePage from './note'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Layout from '../components/Layout'

import { IS_LOGGED_IN } from '../graphql/query'
import NewNote from '../components/NewNote'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { data, loading, error } = useQuery(IS_LOGGED_IN)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home}/>
        <PrivateRoute path="/mynotes" component={MyNotes}/>
        <PrivateRoute path="/favorites" component={Favorites}/>
        <Route path="/note/:id" component={NotePage}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <PrivateRoute path="/newnote" component={NewNote}/>
      </Layout>
    </Router>
  )
}

export default Pages