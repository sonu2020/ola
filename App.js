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
import F1 from './src/F1';
import F2 from './src/F2';
import F3 from './src/F3';
import F4 from './src/F4';
import F5 from './src/F5';
import F6 from './src/F6';
import F7 from './src/F7';
import F8 from './src/F8';
import F9 from './src/F9';
import F10 from './src/F10';

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
            <Scene key="F1" component={F1} title="F1" hideNavBar={true} />
            <Scene key="F2" component={F2} title="F2" hideNavBar={true} />
            <Scene key="F3" component={F3} title="F3" hideNavBar={true} />
            <Scene key="F4" component={F4} title="F4" hideNavBar={true} />
            <Scene key="F5" component={F5} title="F5" hideNavBar={true} />
            <Scene key="F6" component={F6} title="F6" hideNavBar={true} />
            <Scene key="F7" component={F7} title="F7" hideNavBar={true} />
            <Scene key="F8" component={F8} title="F8" hideNavBar={true} />
            <Scene key="F9" component={F9} title="F9" hideNavBar={true} />
            <Scene key="F10" component={F10} title="F10" hideNavBar={true} />
          </Stack>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
