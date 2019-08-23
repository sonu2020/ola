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
import C1 from './src/C1';
import C2 from './src/C2';
import C3 from './src/C3';
import C4 from './src/C4';
import C5 from './src/C5';
import C6 from './src/C6';
import C7 from './src/C7';
import C8 from './src/C8';
import C9 from './src/C9';

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
            <Scene key="C1" component={C1} title="C1" hideNavBar={true} />
            <Scene key="C2" component={C2} title="C2" hideNavBar={true} />
            <Scene key="C3" component={C3} title="C3" hideNavBar={true} />
            <Scene key="C4" component={C4} title="C4" hideNavBar={true} />
            <Scene key="C5" component={C5} title="C5" hideNavBar={true} />
            <Scene key="C6" component={C6} title="C6" hideNavBar={true} />
            <Scene key="C7" component={C7} title="C7" hideNavBar={true} />
            <Scene key="C8" component={C8} title="C8" hideNavBar={true} />
            <Scene key="C9" component={C9} title="C9" hideNavBar={true} />
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
