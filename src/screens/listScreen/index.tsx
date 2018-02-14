
import * as React from 'react';
import { View, Animated, Easing } from 'react-native';

import { Text, Icon, List, ListItem, Body, Right, Toast } from 'native-base';


class ListScreen extends React.Component {


  onListItemPress = (itemName, animatedValue) => {
    // play the animation on click
    this.playConnectAnimation(animatedValue);

    Toast.show({
      text: `${itemName} selected`,
      position: 'bottom',
      buttonText: 'Okay',
      type: 'success',
    });
  }


  playConnectAnimation = (animatedValue) => {
    // reset animation
    animatedValue.setValue(0);

    Animated.timing(
      animatedValue,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
      },
    ).start();
  }


  renderListItem = (text) => {
    const animatedValue = new Animated.Value(0);

    const translateX = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 30, 0],
    });

    return (
      <ListItem icon onPress={() => {this.onListItemPress(text, animatedValue);}}>
        <Body>
        <Text>{text}</Text>
        </Body>
        <Right>
          <Animated.View style={{ flexDirection: 'row', transform: [{ translateX }] }}>
            <Text>Connect</Text>
            <Icon name="arrow-forward" />
          </Animated.View>
        </Right>
      </ListItem>
    );
  }


  render() {
    return (
      <View>
        <Text>List Page</Text>

        <List>
          <ListItem itemDivider>
            <Text>Available Items</Text>
          </ListItem>

          {this.renderListItem('Item 1')}
          {this.renderListItem('Item 2')}
          {this.renderListItem('Item 3')}
        </List>

      </View>
    );
  }
}

export default ListScreen;
