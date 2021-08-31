import React from 'react'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink, gql,
  InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import GlobalStyles from './components/GlobalStyles'
import Pages from './pages'
import { isLoggedIn } from './graphql/query'

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
  query: isLoggedIn,
  data: {
    isLoggedIn: !!localStorage.getItem('Token')
  }
})

client.onResetStore(
  () => cache.writeQuery({
    query: isLoggedIn,
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
