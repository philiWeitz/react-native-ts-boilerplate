
import * as React from 'react';
import { View } from 'react-native';

import { Text, Icon, List, ListItem, Body, Right, Toast } from 'native-base';


class ListScreen extends React.Component<any,any> {

  onListItemPress = (itemName) => {
    Toast.show({
      text: `${itemName} selected`,
      position: 'bottom',
      buttonText: 'Okay',
      type: 'success',
    });
  }


  render() {
    return (
      <View>
        <Text>List Page</Text>

        <List>
          <ListItem itemDivider>
            <Text>Available Items</Text>
          </ListItem>
          <ListItem icon onPress={() => {this.onListItemPress('Item 1');}}>
            <Body>
            <Text>Item 1</Text>
            </Body>
            <Right>
              <Text>Connect</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => {this.onListItemPress('Item 2');}}>
            <Body>
            <Text>Item 2</Text>
            </Body>
            <Right>
              <Text>Connect</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => {this.onListItemPress('Item 3');}}>
            <Body>
            <Text>Item 3</Text>
            </Body>
            <Right>
              <Text>Connect</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>

      </View>
    );
  }
}

export default ListScreen;
