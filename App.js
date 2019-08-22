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
import B1 from './src/B1';
import B2 from './src/B2';
import B3 from './src/B3';
import B4 from './src/B4';
import B5 from './src/B5';
import B6 from './src/B6';
import B7 from './src/B7';
import B8 from './src/B8';
import B9 from './src/B9';

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
            <Scene key="B1" component={B1} title="B1" hideNavBar={true} />
            <Scene key="B2" component={B2} title="B2" hideNavBar={true} />
            <Scene key="B3" component={B3} title="B3" hideNavBar={true} />
            <Scene key="B4" component={B4} title="B4" hideNavBar={true} />
            <Scene key="B5" component={B5} title="B5" hideNavBar={true} />
            <Scene key="B6" component={B6} title="B6" hideNavBar={true} />
            <Scene key="B7" component={B7} title="B7" hideNavBar={true} />
            <Scene key="B8" component={B8} title="B8" hideNavBar={true} />
            <Scene key="B9" component={B9} title="B9" hideNavBar={true} />
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
