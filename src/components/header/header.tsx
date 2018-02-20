
import * as React from 'react';

import { View, Platform } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Text, Body, Button, Icon, Right, Left } from 'native-base';

import styles from './HeaderStyle';


export interface HeaderProps {

}

// add injected props here
interface InjectedProps extends HeaderProps {
  index: number;
  navigation: NavigationScreenProp;
}


class Header extends React.Component<HeaderProps> {

  private get injected() : InjectedProps {
    return this.props as InjectedProps;
  }


  renderBackButton = () => {
    if (this.injected.index > 0 && Platform.OS === 'ios') {
      return (
        <Left>
          <Icon name="menu" />
        </Left>
      );
    }
    return <Left />;
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderBackButton()}
        <Body>
          <Text>Header</Text>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </View>
    );
  }
}

export default Header;
