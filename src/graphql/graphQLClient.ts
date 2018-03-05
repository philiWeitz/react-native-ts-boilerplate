
import Config from 'react-native-config';
import ApolloClient from 'apollo-client';

import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';


// Create an http link:
const httpLink = new HttpLink({
  uri: Config.GRAPH_QL_URL,
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: Config.GRAPH_QL_SUBSCRIPTION_URL,
  options: {
    reconnect: true,
  },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);


const graphQLClient = new ApolloClient({
  link,
  cache: new InMemoryCache().restore((window as any).__APOLLO_STATE__),
});

export default graphQLClient;
