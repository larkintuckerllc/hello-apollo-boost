import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import defaults from './graphql/defaults';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const URI = 'https://fakerql.com/graphql';
const client = new ApolloClient({
  uri: URI,
  clientState: {
    defaults,
    resolvers,
    typeDefs
  },
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
