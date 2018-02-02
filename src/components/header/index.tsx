
import * as React from 'react';

import { View, Dimensions, StyleSheet, Platform } from 'react-native';
import { Text, Body, Button, Icon, Right, Left } from 'native-base';


const { width: screenWidth } = Dimensions.get('window');

export const HEADER_HEIGHT = 40;


export interface HeaderProps {

}

// add injected props here
interface InjectedProps extends HeaderProps {
  index: number;
}

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    width: screenWidth,
  },
});


class Header extends React.Component<HeaderProps,any> {

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
    console.log(this.props);

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
