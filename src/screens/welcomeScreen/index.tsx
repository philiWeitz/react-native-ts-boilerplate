
import * as React from 'react';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react';

import { Button, Text, Icon } from 'native-base';
import { MaterialDialog } from 'react-native-material-dialog';
import * as DeviceBrightness from 'react-native-device-brightness';
import * as BleManager from 'react-native-ble-manager';
import KeepAwake from 'react-native-keep-awake';

import SampleStore from '../../mobx/domainStores/samplesStore';


export interface WelcomeScreenProps {

}

interface WelcomeScreenState {
  dialogVisible: boolean;
}

// add injected props here
interface InjectedWelcomeScreenProps extends WelcomeScreenProps {
  samplesStore: SampleStore;
}


@inject('samplesStore')
@observer
class WelcomeScreen extends React.Component<any,WelcomeScreenState> {

  state = {
    dialogVisible: false,
  };


  private get injected() : InjectedWelcomeScreenProps {
    return this.props as InjectedWelcomeScreenProps;
  }


  constructor(props, context) {
    super(props, context);

    KeepAwake.activate();
    BleManager.start({ showAlert: false });
  }


  render() {
    const { samplesStore } = this.injected;

    return (
      <View>
        <Text>Welcome Page</Text>

        <Text>Injected Store Items</Text>
        { samplesStore.items.map((item) => {
          return <Text key={item}>{item}</Text>;
        })}

        <Button onPress={() => this.setState({ dialogVisible: true })}>
          <Icon name="home" />
          <Text>Enable Bluetooth</Text>
        </Button>

        <Button onPress={() => DeviceBrightness.setBrightnessLevel(0.1)}>
          <Icon name="home" />
          <Text>Lower Brightness</Text>
        </Button>

        <MaterialDialog
          title="Test Dialog"
          visible={this.state.dialogVisible}
          onOk={() => {
            BleManager.enableBluetooth().then(() => {
              // Success code
              console.log('The bluetooh is already enabled or the user confirm');
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
