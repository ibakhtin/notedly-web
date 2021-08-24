import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import GlobalStyles from './components/GlobalStyles'
import Pages from './pages'

const uri = process.env.REACT_APP_API_URI
const cache = new InMemoryCache()

const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
})

const App = () => (
    <ApolloProvider client={client}>
        <GlobalStyles/>
        <Pages/>
    </ApolloProvider>
)

export default App
