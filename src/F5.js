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
        <ImageBackground
          style={{
            width: 420,
            height: 250
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxr371J0hm5MzBU-_bFxnhy2PkOZ7p9wtHyQwHoMpvE6Wqc6m5-w'
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                flex: 1,
                marginTop: 20,
                marginLeft: 15
              }}
              onPress={() => Actions.pop()}
            >
              <AntDesign name="arrowleft" color="white" size={35} />
            </TouchableOpacity>
            <View
              style={{
                flex: 7
              }}
            ></View>

            <TouchableOpacity
              style={{
                flex: 2,
                marginTop: 20,
                marginRight: 15
              }}
              onPress={() => Actions.F6()}
            >
              <AntDesign name="shoppingcart" color="white" size={40} />
            </TouchableOpacity>
          </View>
          <Text style={styles.A}>More than a course</Text>
          <Text style={styles.Txt}>A movement,Course up to 90%</Text>
        </ImageBackground>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              marginTop: 20,
              marginLeft: 30,
              height: 75,
              width: 350,
              backgroundColor: '#ffd700',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.H}>
              SHOP THE SEASONS BEST SALE NOW! 4 DAYS LEFT!
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            marginTop: 15,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Hdng}>CATEGORIES</Text>
          </View>
          <View style={{ flex: 2, marginRight: 15 }}>
            <TouchableOpacity>
              <Text style={styles.E}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              flex: 3,
              marginTop: 10,
              marginLeft: 10,
              height: 55,
              width: 50,
              backgroundColor: '#dcdcdc',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.L}> DEVELOPMENT </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              flex: 3,
              marginTop: 15,
              marginLeft: 20,
              backgroundColor: '#dcdcdc',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.L}> UPDATED </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 7,
              marginTop: 15,
              marginLeft: 10,
              backgroundColor: '#dcdcdc',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.L}> CC,ENGLISH,FRENCH </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.P}>BECAUSE YOU SEARCHED FOR "NODEJS"</Text>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#4682b4',
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="star" color="white" size={25} />
            <Text>Favorites</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="home" color="white" size={25} />
            <Text>Home</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialIcons name="keyboard-voice" color="white" size={25} />
            <Text>seacrh</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="radio" color="white" size={25} />
            <Text>Radio</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons
              name="music-box-outline"
              color="white"
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
    fontWeight: 'bold'
  },

  R: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20
  },
  A: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#fff'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#fff',
    marginTop: 10
  },
  H: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 15
  },
  E: {
    fontSize: 20,
    color: 'grey'
  },
  L: {
    fontSize: 20
  },
  P: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20
  }
});
