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
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => Actions.pop()}
          >
            <Ionicons name="ios-arrow-back" color="black" size={35} />
          </TouchableOpacity>
          <View
            style={{
              flex: 8,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Hdng}>Favorites</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 3,
              borderBottomColor: 'red'
            }}
          >
            <Text style={styles.Txt}>SONGS</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>ALBUMS</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>PLAYLIS</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>RADIO</Text>
          </View>
        </View>
        <Text style={styles.A}>Add playlists from Ganna to your Favorite</Text>
        <Text style={styles.B}>Them at one place here</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image
            style={{
              width: 180,
              height: 230,
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10
            }}
            source={{
              uri: 'https://s.saregama.com/image/c/m/3/6a/98/719_1491224853.jpg'
            }}
          ></Image>

          <Image
            style={{
              width: 180,
              height: 230,
              marginTop: 20,
              marginLeft: 15,
              borderRadius: 10
            }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYA8AH_WIVwmhVkM9ykzZ0MMRC0cRYrjPmGw1D_pOBzvTmKc2iw'
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View style={{ flex: 3, marginLeft: 15, marginTop: 15 }}>
            <Text style={styles.Hdng}>I warned My</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 2, marginLeft: 10, marginTop: 15 }}
            onPress={() => Actions.E10()}
          >
            <AntDesign name="hearto" color="black" size={35} />
          </TouchableOpacity>
          <View
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Hdng}>Koi Chakkar</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="hearto" color="black" size={35} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            marginTop: 20,
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
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },

  A: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  B: {
    fontSize: 20,
    marginLeft: 20
  },
  C: {
    fontSize: 20
  }
});
