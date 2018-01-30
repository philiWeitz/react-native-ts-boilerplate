
import * as React from 'react';

import Provider, { providedStores } from './mobx/provider';
import WelcomeNavigator from './navigation';
import persist, { IHydrateStore } from './mobx/persist';


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
      <Provider>
        <WelcomeNavigator />
      </Provider>
    );
  }
}


export default App;
