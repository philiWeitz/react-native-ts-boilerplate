
import * as React from 'react';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react';

import { NavigationActions, NavigationScreenProp } from 'react-navigation';

import { Button, Text, Icon } from 'native-base';
import { MaterialDialog } from 'react-native-material-dialog';
import * as DeviceBrightness from 'react-native-device-brightness';
import * as BleManager from 'react-native-ble-manager';
import KeepAwake from 'react-native-keep-awake';

import styles from './styles';
import AppUIStore from '../../mobx/uiStores/appUIStore';
import SampleStore from '../../mobx/domainStores/samplesStore';

import mutation from '../../graphql/mutation';
import subscription from '../../graphql/subscription';
import { PostSubscriptionList } from '../../components';


export interface WelcomeScreenProps {

}

interface ScreenState {
  dialogVisible: boolean;
}

// add injected props here
interface InjectedProps extends WelcomeScreenProps {
  samplesStore: SampleStore;
  appUIStore: AppUIStore;
  navigation: NavigationScreenProp<any,any>;
}


@inject('samplesStore')
@inject('appUIStore')
@observer
class WelcomeScreen extends React.Component<WelcomeScreenProps,ScreenState> {

  state = {
    dialogVisible: false,
  };


  private get injected() : InjectedProps {
    return this.props as InjectedProps;
  }


  constructor(props, context) {
    super(props, context);

    KeepAwake.activate();
    BleManager.start({ showAlert: false });

    // handle subscription manually
    subscription.subscribePosts(1)
      .subscribe(() => console.log('Post was updated'));
  }


  navigateToListScreen = () => {
    const navigateAction = NavigationActions.navigate({
      params: {},
      routeName: 'List',
    });

    this.injected.navigation.dispatch(navigateAction);
  }


  upVoteFirstVote = () => {
    // mutate manually
    mutation.upVotePost(1);
  }


  renderPosts = ({ data: { loading, posts } }) => {
    return (
      <Text>TEST GRAPHQL</Text>
    );
  }

  render() {
    const { samplesStore, appUIStore } = this.injected;

    return (
      <View style={styles.page}>
        <Text>Welcome Page</Text>
        <Text>Counter: {samplesStore.counter}</Text>

        {appUIStore.isLoading
          ? <Text>Loading...</Text>
          : <Text>Loaded</Text>
        }

        <Text>Injected Store Items</Text>
        { samplesStore.items.map((item) => {
          return <Text key={item}>{item}</Text>;
        })}

        <Button style={styles.button} block onPress={() => this.setState({ dialogVisible: true })}>
          <Icon name="home" />
          <Text>Enable Bluetooth</Text>
        </Button>

        <Button style={styles.button} block onPress={() => this.navigateToListScreen()}>
          <Icon name="arrow-forward" />
          <Text>Show List Screen</Text>
        </Button>

        <Button style={styles.button} block onPress={() => {
          DeviceBrightness.setBrightnessLevel(0.1);
          samplesStore.incCounter();
          samplesStore.pushAndPopItem((10 * Math.random()).toFixed(1));
        }}>
          <Icon name="home" />
          <Text>Lower Brightness</Text>
        </Button>

        <View style={styles.container}>
          <PostSubscriptionList />
        </View>

        <Button block onPress={this.upVoteFirstVote}>
          <Text>Up vote first post</Text>
        </Button>

        <MaterialDialog
          title="Test Dialog"
          visible={this.state.dialogVisible}
          onOk={() => {
            BleManager.enableBluetooth().then(() => {
              // Success code
              console.debug('The bluetooh is already enabled or the user confirm');
            });
            this.setState({ dialogVisible: false });
          }}
          onCancel={() => this.setState({ dialogVisible: false })}>
          <Text>
            This is an example Dialog
          </Text>
        </MaterialDialog>
      </View>
    );
  }
}

export default WelcomeScreen;
