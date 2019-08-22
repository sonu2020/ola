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
          backgroundColor: '#191970',
          justifyContent: 'center',
          alignItems: 'center'
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
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Entypo name="menu" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}>Recipiebook</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 420,
            backgroundColor: '#191970',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            style={{ width: 120, height: 150, borderRadius: 10 }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfEXAvi4oXlUlWYHTwgwVwW5ZBDELx0HqobZxZDO5aLygcnds'
            }}
          />
          <Text style={styles.txt}>All Caught Up!No new notifications</Text>
        </View>
        <TouchableOpacity onPress={() => Actions.screen3()}>
          <Text style={styles.P}>CHECK OUT RECIPIES</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            backgroundColor: '#191970'
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
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons name="account" color="white" size={25} />
            <Text>profile</Text>
          </View>
        </View>
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
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  P: {
    fontSize: 18,
    marginVertical: 15,
    color: 'black',
    backgroundColor: 'yellow',
    width: 200,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  }
});
