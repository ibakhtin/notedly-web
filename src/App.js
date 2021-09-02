import React from 'react'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import GlobalStyles from './components/GlobalStyles'
import Pages from './pages'
import { IS_LOGGED_IN } from './graphql/query'

const uri = process.env.REACT_APP_API_URI
const httpLink = createHttpLink({ uri })
const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('Token') || ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
})

cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem('Token')
  }
})

client.onResetStore(
  () => cache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
      isLoggedIn: !!localStorage.getItem('Token')
    }
  })
)

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyles/>
    <Pages/>
  </ApolloProvider>
)

export default App
