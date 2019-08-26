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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#696969'
        }}
      >
        <View
          style={{
            width: '100%',
            height: 80,

            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10
            }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 15, marginLeft: 10 }}></View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="sharealt" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.F3()}
          >
            <AntDesign name="shoppingcart" color="white" size={30} />
          </TouchableOpacity>
        </View>

        <Text style={styles.A}>
          React - The Complete Guide (incl Hooks,React Router,Redux)
        </Text>
        <Text style={styles.D}>
          Dive in and learn React 16.8 from scracth! LEarn
          Rejactes,Hooks,Redux,react Routing animations.Next.js and way more!
        </Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              flex: 5,
              marginTop: 10,
              marginLeft: 10,
              height: 55,
              width: 100,
              borderColor: '#fff',
              borderWidth: 2,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.H}> CREATED BY ACADAMIC BY MAXIMILON </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              flex: 3,
              marginTop: 15,
              marginLeft: 20,
              borderColor: '#fff',
              borderWidth: 2,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.H}> UPDATED </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 7,
              marginTop: 15,
              marginLeft: 10,
              borderColor: '#fff',
              borderWidth: 2,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.H}> CC,ENGLISH,FRENCH </Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{ width: 320, height: 230, marginLeft: 50, marginTop: 20 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wHwN7X0RSGf4a8J1GRje34cgcXC1wTYtwHfc6PfzXQRw-1Jk'
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  M: {
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 10
  },

  A: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 20
  },
  D: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 25,
    marginTop: 10
  },
  H: {
    fontSize: 20,
    color: '#fff'
  }
});
