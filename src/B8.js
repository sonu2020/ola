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

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            width: '100%',
            height: 80,
            borderBottomWidth: 1,
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Entypo name="menu" color="black" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}> Ola Share Passes</Text>
          </View>
        </View>
        <Image
          style={{
            width: 320,
            height: 240,
            marginTop: 50,
            borderRadius: 10,
            marginLeft: 50
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhBiQvOI83JYvR0w7Old4VNhN0Mxhg_KfQVQZmMVrU4I4RA0CEg'
          }}
        />
        <View
          style={{
            width: '100%',
            height: 160,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25
          }}
        >
          <Text style={styles.A}>ONE FARE, ANYWHRE</Text>
          <Text style={styles.B}>
            ENJOY OLA SHARE RIDES TO ANYWHRE IN THE CITY
          </Text>
          <TouchableOpacity onPress={() => Actions.B9()}>
            <Text style={styles.C}>View Pass Benefits</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#dcdcdc',
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <TouchableOpacity style={{ flex: 2, marginTop: 10, marginLeft: 20 }}>
            <Entypo name="radio" color="grey" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 8, marginTop: 10, marginLeft: 15 }}>
            <Text style={styles.F}> BUY A NEW PASS</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#dcdcdc',
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity style={{ flex: 2, marginTop: 10, marginLeft: 20 }}>
            <Entypo name="radio" color="grey" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 8, marginTop: 10, marginLeft: 15 }}>
            <Text style={styles.F}> REGISTER A PASS</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  A: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  B: {
    fontSize: 15
  },
  C: {
    fontSize: 15,
    marginTop: 10,
    color: 'blue'
  },
  F: {
    fontSize: 20
  }
});
