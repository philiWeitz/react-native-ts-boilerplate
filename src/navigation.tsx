
import * as React from 'React';
import { StackNavigator } from 'react-navigation';

import { Header } from './components';
import { ListScreen, WelcomeScreen } from './screens';
import defaultTransition from './transitions/defaultTransition';


const navOptions = {
  header: props => <Header {...props} />,
};


const WelcomeNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      ...navOptions,
    },
  },
  List: {
    screen: ListScreen,
    navigationOptions: {
      ...navOptions,
    },
  },
},{
  transitionConfig: defaultTransition,
});

export default WelcomeNavigator;
