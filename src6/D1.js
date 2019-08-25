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
            backgroundColor: '#3cb371',
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="white" size={35} />
          </TouchableOpacity>
          <View
            style={{ flex: 9, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Hdng}>NOTIFICATIONS</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 5,
              borderBottomColor: 'black'
            }}
            onPress={() => Actions.D2()}
          >
            <Text style={styles.Txt}>ALERTS</Text>
          </TouchableOpacity>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>OFFERS</Text>
          </View>
        </View>

        <Text style={styles.K}>WHO DOSEN'T LOVE APPELS AT $22</Text>
        <Text style={styles.G}> Mini blush red baby apples are on demand</Text>
        <Image
          style={{ width: 380, height: 100, marginTop: 30, marginLeft: 15 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSWjHBojui3f9nzJwe369pWejXMEi8DT4nxpq7YzH10SF4uVnew'
          }}
        />
        <Text style={styles.K}>WHO DOSEN'T LOVE APPELS AT $22</Text>
        <Text style={styles.G}> Mini blush red baby apples are on demand</Text>

        <Text style={styles.G}> Mini blush red baby apples are on demand</Text>
        <Image
          style={{ width: 380, height: 100, marginTop: 30, marginLeft: 15 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyY0X-sNfUCz8r9Igru8V3xYefslvJSKa4cbuGQ1VysDAmjyD_xw'
          }}
        />
        <View
          style={{
            width: '100%',
            height: 60,
            marginTop: 25,
            flexDirection: 'row',
            backgroundColor: '#696969'
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
            <MaterialCommunityIcons name="account" color="white" size={25} />
            <Text>profile</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  K: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20
  },
  G: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 15
  }
});
