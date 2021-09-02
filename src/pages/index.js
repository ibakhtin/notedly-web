import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './home'
import MyNotes from './mynotes'
import Favorites from './favorites'
import NotePage from './note'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

import Layout from '../components/Layout'

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={ Home }/>
        <Route path="/mynotes" component={ MyNotes }/>
        <Route path="/favorites" component={ Favorites }/>
        <Route path="/note/:id" component={ NotePage }/>
        <Route path="/signin" component={ SignIn }/>
        <Route path="/signup" component={ SignUp }/>
      </Layout>
    </Router>
  )
}

export default Pages