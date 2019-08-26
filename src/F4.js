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
            backgroundColor: '#dc143c',
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
            <AntDesign name="arrowleft" color="white" size={35} />
          </TouchableOpacity>
          <View
            style={{
              flex: 7,
              justifyContent: 'center'
            }}
          ></View>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons
              name="filter-variant"
              color="white"
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.F5()}
          >
            <AntDesign name="shoppingcart" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.R}>DEVELOPEMENT</Text>
        <Text style={styles.A}>COURSE TO GET YOU START</Text>
        <Image
          style={{ width: 350, height: 250, marginTop: 20, marginLeft: 30 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxr371J0hm5MzBU-_bFxnhy2PkOZ7p9wtHyQwHoMpvE6Wqc6m5-w'
          }}
        />
        <View style={{ flex: 1, marginLeft: 20 }}>
          <Text style={styles.Txt}>
            COMPLETE PYTHON BOOTCAMP: GO FROM ZERO TO HERO
          </Text>
          <AntDesign name="star" color="yellow" size={30} />
          <Text style={styles.Txt}>$500.00</Text>
        </View>
        <Text style={styles.A}>FEATURED COURSE</Text>
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
    fontWeight: 'bold',
    color: 'black'
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
    marginTop: 12
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
