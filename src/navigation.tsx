
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/welcomeScreen';


const WelcomeNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    header: null,
    navigationOptions: {
      header: null,
    },
  },
});

export default WelcomeNavigator;
