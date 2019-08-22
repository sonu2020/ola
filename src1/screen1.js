import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#00008b' }}>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Feather name="arrow-left" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}>Upload recipie</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 90 }}>
          <View style={{ flex: 1, marginTop: 15, marginLeft: 10 }}>
            <Text style={styles.A}>Recipie name</Text>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 5, marginLeft: 10 }}>
          <TextInput style={styles.C}>Receipi name</TextInput>
        </View>

        <TouchableOpacity
          style={{
            width: 65,
            height: 65,
            backgroundColor: 'yellow',
            borderRadius: 50,
            marginTop: 25,
            position: 'absolute',
            right: 15,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => Actions.screen2()}
        >
          <AntDesign name="arrowright" color="black" size={35} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  A: {
    fontSize: 23,
    marginTop: 55,
    color: '#fff',
    fontWeight: 'bold'
  },
  C: {
    fontSize: 20,
    color: '#fff'
  }
});
