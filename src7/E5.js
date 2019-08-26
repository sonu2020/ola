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

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 6,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Hdng}>gaana</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Ionicons name="ios-arrow-back" color="black" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Ionicons name="md-settings" color="black" size={35} />
          </TouchableOpacity>
        </View>
        <Text style={styles.A}>Radio</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              flex: 5,
              marginTop: 20,
              marginLeft: 20,
              height: 55,
              width: 120,
              backgroundColor: '#6a5acd',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => Actions.E6()}
          >
            <Text style={styles.H}> RADIO </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 5,
              marginTop: 20,
              marginLeft: 10,
              height: 55,
              width: 120,
              backgroundColor: '#ff0000',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.H}> SHOWS </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.K}> FEATURED </Text>
        <Image
          style={{
            width: 300,
            height: 280,
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 10
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYA8AH_WIVwmhVkM9ykzZ0MMRC0cRYrjPmGw1D_pOBzvTmKc2iw'
          }}
        />
        <View
          style={{
            width: '100%',
            height: 60,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="home" color="black" size={25} />
            <Text>Home</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialIcons name="keyboard-voice" color="black" size={25} />
            <Text>seacrh</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="radio" color="black" size={25} />
            <Text>Radio</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons
              name="music-box-outline"
              color="black"
              size={25}
            />
            <Text>My music</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#a9a9a9'
  },
  A: {
    fontSize: 45,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15
  },
  H: {
    fontSize: 20,
    color: '#fff'
  },
  K: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15
  }
});
