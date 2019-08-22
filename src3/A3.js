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

export default class A3 extends Component {
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
            backgroundColor: '#191970',
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
            <Entypo name="menu" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 15, marginLeft: 10 }}>
            <Text style={styles.Hdng}>amazon</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.A4()}
          >
            <SimpleLineIcons name="handbag" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.A}>$19,990</Text>
        <Text style={styles.B}>
          hgfvauyfkgaewkhhsugiuwgargrhstsuxrhdkfh,LkugIUQLGL
        </Text>
        <TouchableOpacity
          style={{
            flex: 1,
            marginTop: 20,
            height: 100,
            width: 350,
            backgroundColor: '#a9a9a9',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 80,
              flexDirection: 'row'
            }}
          >
            <View style={{ flex: 9 }}>
              <Text style={styles.M}>ksh;nerlhgezsgohoeAgdjGfl</Text>
              <Text style={styles.B}>dhfbxtdhfgkljzrsoiegahrfj</Text>
            </View>
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <Ionicons name="ios-arrow-forward" color="grey" size={35} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 30
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="light-bulb" color="black" size={45} />
            <Text>bulb</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="black" size={45} />
            <Text>seacrh</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="upload" color="black" size={45} />
            <Text>upload</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="ios-notifications" color="black" size={45} />
            <Text>upload</Text>
          </View>
        </View>
        <Text style={styles.B}>dhfbxtdhfwvh</Text>
        <Text style={styles.B}>dhfbxtdhfgkljzfasoizuhkgjwvh</Text>
        <Text style={styles.B}>dhfbxtdhfgkljzkpzizuhkgjwvh</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  A: {
    fontSize: 40,
    marginLeft: 15,
    marginTop: 15,
    fontWeight: 'bold'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  M: {
    fontSize: 20,
    color: 'red',
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  B: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 15,
    fontWeight: 'bold'
  }
});
