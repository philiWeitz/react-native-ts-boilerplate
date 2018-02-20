/* global window */

import * as React from 'react';
import { Text } from 'react-native';
import { Provider as MobxProvider } from 'mobx-react';

import stores, { IStores } from './stores';


export interface ProviderProps { children?: any; }


const Provider = ({ children } : ProviderProps) => {

  const renderDevelopmentProvider = () => {

    // expose the stores globally for dev purpose
    (window as any).stores = stores;

    return (
      <MobxProvider {...stores}>
        {children
          ? children
          : <Text>No provider context given</Text>}
      </MobxProvider>
    );
  };

  const renderProvider = () => {
    return renderDevelopmentProvider();
  };

  return renderProvider();
};


export const providedStores : IStores = stores;

export default Provider;
