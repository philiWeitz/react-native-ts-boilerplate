
import * as React from 'react';
import { Root } from 'native-base';
import { ApolloProvider } from 'react-apollo';

import WelcomeNavigator from './navigation';
import persist, { IHydrateStore } from './mobx/persist';
import Provider, { providedStores } from './mobx/Provider';

import graphQLClient from './graphql/graphQLClient';


class App extends React.Component<any,any> {

  componentDidMount() {
    // specify all stores and their keys
    const toHydrate: IHydrateStore[] = [
      { key: 'samples', store: providedStores.samplesStore },
    ];

    persist.hydrateStores(toHydrate).then(() => {
      // set app state to loaded
      providedStores.appUIStore.isLoading = false;
    });
  }

  render() {
    return (
      <Root>
        <Provider>
          <ApolloProvider client={graphQLClient}>
            <WelcomeNavigator />
          </ApolloProvider>
        </Provider>
      </Root>
    );
  }
}


export default App;
