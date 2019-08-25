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
            <Entypo name="menu" color="white" size={35} />
          </TouchableOpacity>
          <View
            style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Hdng}>Offers</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <Image
          style={{ width: 420, height: 220, marginTop: 10 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJ4l4DoRbJSfIrbHLHNuNwb6tmkXB59Q_0uOGkwJvfiYI-kSZ'
          }}
        />
        <View
          style={{
            width: '100%',
            height: 180,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View
            style={{
              flex: 1,
              marginLeft: 15
            }}
          >
            <Image
              style={{ width: 160, height: 150 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqj28ReZzcdfqwPzUE86SjEXn197dycRA3830QvVWPr6F7nj4'
              }}
            />
            <Text>Coffebarstyjjekll</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={{ width: 160, height: 150 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKm-_Fye8aEkaVW_4jOQlIIISXAhtClvB6VoOrvz-eN03PQ8u'
              }}
            />
            <Text>Coffebarstyjjekll</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 180,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View
            style={{
              flex: 1,
              marginLeft: 15
            }}
          >
            <Image
              style={{ width: 160, height: 150 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqj28ReZzcdfqwPzUE86SjEXn197dycRA3830QvVWPr6F7nj4'
              }}
            />
            <Text>Coffebarstyjjekll</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={{ width: 160, height: 150 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKm-_Fye8aEkaVW_4jOQlIIISXAhtClvB6VoOrvz-eN03PQ8u'
              }}
            />
            <Text>Coffebarstyjjekll</Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            backgroundColor: '#dcdcdc'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="light-bulb" color="white" size={25} />
            <Text>bulb</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="white" size={25} />
            <Text>seacrh</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="upload" color="white" size={25} />
            <Text>upload</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="ios-notifications" color="white" size={25} />
            <Text>upload</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  },
  H: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  R: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  M: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 25
  },
  P: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
