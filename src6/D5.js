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

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
            backgroundColor: '#3cb371',
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Ionicons name="ios-arrow-back" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4 }} />
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="sharealt" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.D6()}
          >
            <AntDesign name="delete" color="white" size={35} />
          </TouchableOpacity>
        </View>
        <Text style={styles.Hdng}>HEALTH&NUTRITION DRINK-</Text>
        <Text style={styles.Hdng}>1 KG-CARTOON</Text>
        <Text style={styles.A}>Rs.389</Text>
        <Image
          style={{ width: 380, height: 300 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaT62nLqZbU1iX01kdoSdV-WWbgxfBgKSa13WKYkLTwM7GthnSQ'
          }}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 70,
            backgroundColor: 'red',
            marginTop: 75
          }}
        >
          <View
            style={{
              flex: 1,

              backgroundColor: '#696969',
              flexDirection: 'row'
            }}
          >
            <View style={{ flex: 2, marginTop: 15, marginLeft: 10 }}>
              <AntDesign name="delete" color="#fff" size={30} />
            </View>
            <View style={{ flex: 8, marginTop: 15 }}>
              <Text style={styles.H}>SAVE FOR</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,

              backgroundColor: '#dc143c',
              flexDirection: 'row'
            }}
          >
            <View style={{ flex: 2, marginTop: 15, marginLeft: 15 }}>
              <AntDesign name="delete" color="#fff" size={30} />
            </View>
            <View style={{ flex: 8, marginTop: 15 }}>
              <Text style={styles.H}>ADD BSKT</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    marginTop: 15,
    marginLeft: 15,
    fontWeight: 'bold'
  },
  A: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    fontWeight: 'bold'
  },
  H: {
    fontSize: 20,
    color: '#fff'
  },
  M: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20
  }
});
