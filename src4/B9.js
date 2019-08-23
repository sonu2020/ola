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
            borderBottomWidth: 1,
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Text style={styles.H}> Support</Text>
          </TouchableOpacity>
          <View style={{ flex: 5, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}> Your bill</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            flexDirection: 'row'
          }}
        >
          <Text style={styles.D}> $</Text>
          <Text style={styles.E}>77</Text>
        </View>
        <Text style={styles.R}> Wed,Aug 14, 08:39 AM</Text>
        <View
          style={{
            width: '100%',
            height: 60,
            justifyContent: 'center',
            marginTop: 10,
            alignItems: 'center'
          }}
        >
          <Image
            style={{ width: 60, height: 60, borderRadius: 5 }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwrt4HEMufJszObYXb5A1-83zGwRQ0ihj4E_xPUZE2nwJKZDyV'
            }}
          />
        </View>
        <View style={{ width: '100%', height: 80, flexDirection: 'row' }}>
          <View style={{ flex: 3, marginLeft: 15 }}>
            <Text style={styles.Y}>JP Nagar 6 th Phase side</Text>
          </View>
          <View style={{ flex: 4 }} />
          <View style={{ flex: 3, marginRight: 15 }}>
            <Text style={styles.Y}>JP Nagar 6 th Phase side</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            justifyContent: 'center',
            marginTop: 10,
            alignItems: 'center'
          }}
        >
          <Image
            style={{
              width: 70,
              height: 70
            }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghENvLqmXm2Hdg4IpWHbLSDWmzm7U5Gq2JSMRJG4_7im2aZVxoA'
            }}
          />
        </View>
        <Text style={styles.W}>HELP US SERVE YOU BETTER B</Text>
        <View
          style={{
            width: '100%',
            height: 60,
            justifyContent: 'center',
            marginTop: 10,
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <AntDesign name="staro" color="grey" size={35} />
          <AntDesign name="staro" color="grey" size={35} />
          <AntDesign name="staro" color="grey" size={35} />
          <AntDesign name="staro" color="grey" size={35} />
          <AntDesign name="staro" color="grey" size={35} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  H: {
    fontSize: 25
  },
  D: {
    fontSize: 45,
    fontWeight: 'bold'
  },
  E: {
    fontSize: 90
  },

  R: {
    fontSize: 20,
    marginTop: 40,
    marginLeft: 90
  },
  Y: {
    fontSize: 15
  },
  W: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15
  }
});
