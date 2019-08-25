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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
            onPress={() => Actions.E7()}
          >
            <Ionicons name="md-settings" color="black" size={35} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              width: 85,
              height: 85,
              marginTop: 25,
              marginLeft: 45,
              backgroundColor: '#ff4500',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AntDesign name="download" color="white" size={25} />
          </View>

          <View
            style={{
              width: 85,
              height: 85,
              marginTop: 25,
              marginLeft: 45,
              backgroundColor: '#da70d6',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AntDesign name="heart" color="white" size={25} />
          </View>

          <View
            style={{
              width: 85,
              height: 85,
              marginTop: 25,
              marginLeft: 45,
              backgroundColor: '#1e90ff',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Entypo name="old-mobile" color="white" size={25} />
          </View>
        </View>
        <Image
          style={{
            width: 380,
            height: 70,
            marginTop: 30,
            marginLeft: 20,
            borderRadius: 10
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3KSoPy_uDrvTcBbp71BD5QWQ58y_REaYX0BDqTWKatoBvDY5qw'
          }}
        />
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <View style={{ flex: 8, marginTop: 20, marginLeft: 15 }}>
            <Text style={styles.A}>Browse By Categaries</Text>
          </View>
          <View style={{ flex: 2, marginTop: 20, marginLeft: 20 }}>
            <Ionicons name="ios-arrow-up" color="black" size={25} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              width: 85,
              height: 85,
              marginTop: 35,
              marginLeft: 45,
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Ionicons name="ios-musical-notes" color="black" size={25} />
          </View>

          <View
            style={{
              width: 85,
              height: 85,
              marginTop: 35,
              marginLeft: 45,
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <FontAwesome name="dot-circle-o" color="black" size={25} />
          </View>

          <View
            style={{
              width: 85,
              height: 85,
              marginTop: 35,
              marginLeft: 45,
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Entypo name="menu" color="black" size={25} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            marginTop: 80,
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
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
            backgroundColor: 'red'
          }}
        >
          <View style={{ flex: 8, marginTop: 10, marginLeft: 15 }}>
            <Text style={styles.A}> No internet</Text>
          </View>
          <View style={{ flex: 2, marginTop: 10, marginLeft: 20 }}>
            <AntDesign name="close" color="black" size={35} />
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

  H: {
    fontSize: 20,
    color: '#fff'
  },
  A: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
