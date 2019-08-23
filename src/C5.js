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
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10
            }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="black" size={35} />
          </TouchableOpacity>

          <View
            style={{
              flex: 4,
              marginTop: 15
            }}
          >
            <Text style={styles.Hdng}> SELECTE VISA TYPE</Text>
            <Text>Sharjha | Entry 01/02/20</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#f08080',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.H}>
            We currrently process Tourist visase only!
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 25
          }}
        >
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="like1" color="black" size={55} />
          </TouchableOpacity>

          <View style={{ flex: 8 }}>
            <Text style={styles.E}>We Recommemned</Text>
            <Text style={styles.Hdng}>Based on your travel</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#dcdcdc',
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View style={{ flex: 8, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> 30 days Stay multiple Entry</Text>
          </View>
          <TouchableOpacity style={{ flex: 2, marginTop: 15 }}>
            <Ionicons name="ios-arrow-down" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 40,
            flexDirection: 'row',
            marginTop: 45
          }}
        >
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="dot-circle-o" color="blue" size={35} />
          </TouchableOpacity>

          <Text style={styles.Hdng}>5-9 DAYS WORKING(NORMAL)</Text>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Hdng}>$533</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 40,
            flexDirection: 'row',
            marginTop: 25
          }}
        >
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="dot-single" color="bluw" size={55} />
          </TouchableOpacity>

          <Text style={styles.Hdng}>5-9 DAYS WORKING(URGENT)</Text>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Hdng}>$533</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#dcdcdc',
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View style={{ flex: 8, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> 30 days Stay multiple Entry</Text>
          </View>
          <TouchableOpacity style={{ flex: 2, marginTop: 15 }}>
            <Ionicons name="ios-arrow-down" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flex: 6,
            marginTop: 20,
            height: 50,
            width: 100,
            backgroundColor: 'blue',
            borderRadius: 10,
            marginLeft: 280,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => Actions.C6()}
        >
          <Text style={styles.N}>CONTINUE</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20
  },
  H: {
    fontSize: 20,
    color: 'red'
  },
  E: {
    fontSize: 25,
    color: 'green',
    marginTop: 10
  },
  N: {
    fontSize: 15,
    color: '#fff'
  },
  F: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
