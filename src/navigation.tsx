
import * as React from 'React';
import { StackNavigator } from 'react-navigation';

import Header from './components/header';
import ListScreen from './screens/listScreen';
import WelcomeScreen from './screens/welcomeScreen';


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
});

export default WelcomeNavigator;
