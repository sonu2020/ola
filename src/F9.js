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
              flex: 6,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Hdng}>All course</Text>
            <Ionicons
              name="md-arrow-dropdown"
              color="white"
              size={35}
              onPress={() => Actions.pop()}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.F10()}
          >
            <AntDesign name="shoppingcart" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 110,
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
          <View
            style={{
              flex: 8,
              marginLeft: 40,
              borderBottomWidth: 4,
              marginRight: 70,
              borderBottomColor: 'blue'
            }}
          >
            <Text style={styles.Txt}>
              DEVELOP YOUR OWN OPERTAING SYSTEM FROM SCTRCH MongoDb
            </Text>

            <Text>Bodgan Stashukc</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 110,
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
          <View
            style={{
              flex: 8,
              marginLeft: 40,
              borderBottomWidth: 4,
              marginRight: 70,
              borderBottomColor: 'blue'
            }}
          >
            <Text style={styles.Txt}>
              DEVELOP YOUR OWN OPERTAING SYSTEM FROM SCTRCH MongoDb
            </Text>

            <Text>Bodgan Stashukc</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 110,
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
          <View
            style={{
              flex: 8,
              marginLeft: 40,
              borderBottomWidth: 4,
              marginRight: 70,
              borderBottomColor: 'blue'
            }}
          >
            <Text style={styles.Txt}>
              DEVELOP YOUR OWN OPERTAING SYSTEM FROM SCTRCH MongoDb
            </Text>

            <Text>Bodgan Stashukc</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 110,
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
          <View
            style={{
              flex: 8,
              marginLeft: 40,
              borderBottomWidth: 4,
              marginRight: 70,
              borderBottomColor: 'blue'
            }}
          >
            <Text style={styles.Txt}>
              DEVELOP YOUR OWN OPERTAING SYSTEM FROM SCTRCH MongoDb
            </Text>

            <Text>Bodgan Stashukc</Text>
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
    color: '#fff'
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
