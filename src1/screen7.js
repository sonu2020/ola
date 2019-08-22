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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#191970'
        }}
      >
        <View
          style={{
            width: '100%',
            height: 80,
            backgroundColor: '#00008b',
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: 'black'
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="white" size={35} />
          </TouchableOpacity>
          <View
            style={{
              flex: 4,
              marginTop: 20,
              marginLeft: 10
            }}
          >
            <Text style={styles.Hdng}>Permission</Text>
          </View>
        </View>
        <Text style={styles.txt}>Your permission needed</Text>
        <View
          style={{
            width: '100%',
            height: 220,
            backgroundColor: '#191970',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            style={{ width: 120, height: 150, borderRadius: 15 }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwtS8It10bs6wOGe7TOcsQWPtjEfaPFDIlI2yGsOW6NYlF5r7pg'
            }}
          />
        </View>
        <Text style={styles.M}>Hey, to read the photos we need to access</Text>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
          onPress={() => Actions.screen8()}
        >
          <Text style={styles.P}>Request</Text>
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
  txt: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 55
  },
  P: {
    fontSize: 18,
    marginVertical: 15,
    color: 'black',
    backgroundColor: 'yellow',
    width: 80,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  M: {
    fontSize: 20,
    marginLeft: 10,
    color: '#fff'
  }
});
