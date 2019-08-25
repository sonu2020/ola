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
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
            backgroundColor: '#3cb371',
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="close" color="white" size={35} />
          </TouchableOpacity>
          <View
            style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Hdng}>FILTER</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 5,
              borderBottomColor: 'black'
            }}
          >
            <Text style={styles.Txt}>REFINE BY</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>SORT BY</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 60,
            marginTop: 15
          }}
        >
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.D3()}
          >
            <AntDesign name="checksquareo" color="black" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 6, marginTop: 15, marginLeft: 20 }}>
            <Text style={styles.P}>Bought By You</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Feather name="square" color="green" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 60,
            marginTop: 15
          }}
        >
          <View style={{ flex: 8, marginTop: 15, marginLeft: 20 }}>
            <Text style={styles.P}>Brand</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="ios-arrow-up" color="black" size={35} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 60,
            marginTop: 15
          }}
        >
          <View style={{ flex: 8, marginTop: 15, marginLeft: 20 }}>
            <Text style={styles.P}>Price</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="ios-arrow-down" color="green" size={35} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 60,
            marginTop: 15
          }}
        >
          <View style={{ flex: 8, marginTop: 15, marginLeft: 20 }}>
            <Text style={styles.P}>Rs 101 to Rs 200</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Feather name="square" color="green" size={35} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 60,
            marginTop: 15
          }}
        >
          <View style={{ flex: 8, marginTop: 15, marginLeft: 20 }}>
            <Text style={styles.P}>Rs 201 to Rs 300</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Feather name="square" color="green" size={35} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 60,
            marginTop: 15
          }}
        >
          <View style={{ flex: 8, marginTop: 15, marginLeft: 20 }}>
            <Text style={styles.P}>Rs 301 to Rs 400</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Feather name="square" color="green" size={35} />
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
  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  P: {
    fontSize: 25
  }
});
