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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
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
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="black" size={35} />
          </TouchableOpacity>
          <View
            style={{
              flex: 4,
              marginTop: 10,
              marginLeft: 10
            }}
          >
            <Text style={styles.B}>Showing passes for</Text>
            <Text style={styles.Hdng}>Bangalore</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.B8()}
          >
            <Feather name="refresh-ccw" color="black" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 200,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 3 }}>
            <View style={{ flex: 2, marginTop: 15, marginLeft: 15 }}>
              <Text style={styles.D}>Introducing Ola Pass</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.H}>
                Enjoy discounted fares on your daily communite
              </Text>
            </View>
            <View style={{ flex: 1, marginTop: 10, marginLeft: 15 }}>
              <Text style={styles.K}>Rides at falt fares or less</Text>
            </View>
            <View style={{ flex: 1, marginTop: 10, marginLeft: 15 }}>
              <Text style={styles.K}>No peak on falt fares</Text>
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <Image
              style={{ width: 190, height: 200 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwr-ZpgkzUEvUbW9sNsxXig_vOFl52DjeZNh34wD8ex045b006'
              }}
            />
          </View>
        </View>
        <Text style={styles.U}>See passes for other distances</Text>
        <ImageBackground
          style={{
            width: 420,
            height: 200,
            marginTop: 10,
            borderRadius: 10
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibu6dFuwD69SBlhZjRpajf0cAlVG547J4DZUX9G7QhoxPVKzm'
          }}
        >
          <Text style={styles.A}>CAB PASS FOR 6KM</Text>
          <Text style={styles.A}>PAY $99 or LESS FOR</Text>
          <Text style={styles.A}>FIRST 6 KM PER</Text>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ marginLeft: 205, flexDirection: 'row' }}>
              <Text style={styles.A}> VIEW PASS</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Text style={styles.U}>See passes for other distenses</Text>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#dcdcdc',
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: 10 }}>
            <Entypo name="radio" color="grey" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 8, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> CAB PASSSES</Text>
          </View>
          <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
            <Ionicons name="ios-arrow-forward" color="grey" size={35} />
          </TouchableOpacity>
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
  B: {
    fontSize: 17
  },
  D: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  H: {
    fontSize: 15
  },
  K: {
    fontSize: 20
  },
  U: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15
  },
  A: {
    fontSize: 20,
    color: '#fff',
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  F: {
    fontSize: 20
  }
});
