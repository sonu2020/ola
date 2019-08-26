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
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="close" color="white" size={35} />
          </TouchableOpacity>
          <View
            style={{
              flex: 7,
              justifyContent: 'center'
            }}
          >
            <Text style={styles.W}>Wishlist</Text>
          </View>

          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.F4()}
          >
            <AntDesign name="shoppingcart" color="white" size={30} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            height: 130,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV19mRrIIeo1EDUkLprMFlSaVWvtKEtwiHFIDkpHdR4jvMD006ng'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}>
              DEVELOP YOUR OWN OPERTAING SYSTEM FROM SCTRCH
            </Text>
            <Text>dgethxfhzsetj</Text>
            <AntDesign name="star" color="yellow" size={30} />
            <Text style={styles.Txt}>$500.00</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 130,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV19mRrIIeo1EDUkLprMFlSaVWvtKEtwiHFIDkpHdR4jvMD006ng'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}>
              DEVELOP YOUR OWN OPERTAING SYSTEM FROM SCTRCH
            </Text>
            <Text>dgethxfhzsetj</Text>
            <AntDesign name="star" color="yellow" size={30} />
            <Text style={styles.Txt}>$500.00</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 130,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV19mRrIIeo1EDUkLprMFlSaVWvtKEtwiHFIDkpHdR4jvMD006ng'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}>
              DEVELOP YOUR OWN OPERTAING SYSTEM FROM SCTRCH
            </Text>
            <Text>dgethxfhzsetj</Text>
            <AntDesign name="star" color="yellow" size={30} />
            <Text style={styles.Txt}>$500.00</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 130,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV19mRrIIeo1EDUkLprMFlSaVWvtKEtwiHFIDkpHdR4jvMD006ng'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}>
              DEVELOP YOUR OWN OPERTAING SYSTEM FROM SCTRCH
            </Text>
            <Text>dgethxfhzsetj</Text>
            <AntDesign name="star" color="yellow" size={30} />
            <Text style={styles.Txt}>$500.00</Text>
          </View>
        </View>
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

  H: {
    fontSize: 20,
    color: '#fff'
  },
  A: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  D: {
    fontSize: 20,
    color: '#696969'
  },
  E: {
    fontSize: 20,
    color: '#fff'
  },
  W: {
    fontSize: 25,
    color: '#fff'
  }
});
