import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

// remove the coment for better security TODO
// when uncomented it forces that client side and server side be of a same origin
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
    /*opts: {
      credentials: 'same-origin',
    },*/
  }),
})

console.log("<<<< >>>>");
render(
  (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  ),
  document.getElementById('main'),
);
