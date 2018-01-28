
import * as React from 'react';

import Provider from './mobx/provider';
import WelcomeNavigator from './navigation';


const App = () => {
  return (
    <Provider>
      <WelcomeNavigator />
    </Provider>
  );
};

export default App;
