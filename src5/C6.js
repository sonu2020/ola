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
            height: 160,
            backgroundColor: '#6495ed'
          }}
        >
          <View
            style={{
              width: '100%',
              height: 40
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                marginTop: 15,
                marginLeft: 15
              }}
              onPress={() => Actions.pop()}
            >
              <AntDesign name="arrowleft" color="white" size={35} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 4,
              marginTop: 15,
              marginLeft: 20
            }}
          >
            <Text style={styles.Hdng}> Applying Visa For</Text>
            <Text style={styles.H}>Sharjha </Text>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            backgroundColor: '#f5f5dc',
            borderRadius: 10,
            marginLeft: 20,
            height: 250
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 3, marginTop: 15, marginLeft: 15 }}>
              <Text style={styles.P}>VISA TYPE</Text>
            </View>
            <View style={{ flex: 7, marginTop: 15, marginLeft: 65 }}>
              <Text style={styles.L}>30 Days Stay Single</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 4, marginTop: 15, marginLeft: 15 }}>
              <Text style={styles.P}>PROSSOSING</Text>
            </View>
            <View style={{ flex: 6, marginTop: 15, marginLeft: 25 }}>
              <Text style={styles.L}>3-8 WORKING DAYS</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 4, marginTop: 15 }}>
              <Text style={styles.P}>VALIDITY</Text>
            </View>
            <View style={{ flex: 6, marginTop: 15, marginLeft: 75 }}>
              <Text style={styles.L}>53 DAYS</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 5, marginTop: 15, marginLeft: 15 }}>
              <Text style={styles.P}>TRAVELLERS</Text>
            </View>
            <View style={{ flex: 5, marginTop: 15, marginRight: 25 }}>
              <Text style={styles.L}> 1</Text>
            </View>
          </View>
        </View>
        <Text style={styles.T}>Documents Required</Text>
        <Text style={styles.K}>IDENTIDTY</Text>
        <Text style={styles.W}>PASSPORT FRONT</Text>
        <View
          style={{
            width: '100%',
            height: 40,
            flexDirection: 'row',
            marginTop: 25
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="dot-single" color="black" size={55} />
          </TouchableOpacity>

          <Text style={styles.R}>Upload colored passport</Text>
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
          onPress={() => Actions.C7()}
        >
          <Text style={styles.N}>UPLOAD</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    color: '#fff'
  },
  N: {
    fontSize: 15,
    color: '#fff'
  },
  H: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  P: {
    fontSize: 20
  },
  L: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  T: {
    fontSize: 30,
    marginTop: 15,
    marginLeft: 15
  },
  K: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 20,
    marginTop: 30
  },
  W: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 80,
    marginTop: 10
  },
  R: {
    fontSize: 20,
    marginRight: 85
  }
});
