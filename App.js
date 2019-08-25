import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from 'react-native';

import { Router, Stack, Scene } from 'react-native-router-flux';
import E1 from './src/E1';
import E2 from './src/E2';
import E3 from './src/E3';
import E4 from './src/E4';
import E5 from './src/E5';
import E6 from './src/E6';
import E7 from './src/E7';
import E8 from './src/E8';
import E9 from './src/E9';
import E10 from './src/E10';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Router>
          <Stack>
            <Scene key="E1" component={E1} title="E1" hideNavBar={true} />
            <Scene key="E2" component={E2} title="E2" hideNavBar={true} />
            <Scene key="E3" component={E3} title="E3" hideNavBar={true} />
            <Scene key="E4" component={E4} title="E4" hideNavBar={true} />
            <Scene key="E5" component={E5} title="E5" hideNavBar={true} />
            <Scene key="E6" component={E6} title="E6" hideNavBar={true} />
            <Scene key="E7" component={E7} title="E7" hideNavBar={true} />
            <Scene key="E8" component={E8} title="E8" hideNavBar={true} />
            <Scene key="E9" component={E9} title="E9" hideNavBar={true} />
            <Scene key="E10" component={E10} title="E10" hideNavBar={true} />
          </Stack>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  Txt: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  E: {
    color: '#fff',
    fontSize: 20
  }
});
