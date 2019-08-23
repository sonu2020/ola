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
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="black" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 2,
              marginTop: 15,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              backgroundColor: '#9acd32',
              borderWidth: 1
            }}
          >
            <Text style={styles.Hdng}>Daily</Text>
          </TouchableOpacity>
          <View style={{ flex: 2, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}>Rentals</Text>
          </View>
          <View style={{ flex: 3, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}>Questions</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Entypo name="bell" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <ImageBackground
          style={{
            width: 420,
            height: 420,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HlLYePdBsEV76BuGbMGrKL5uuDfjAJTaw3cZkxv4cyBrpntA'
          }}
        >
          <View
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#d3d3d3',
              flexDirection: 'row',
              marginTop: 10
            }}
          >
            <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
              <Text style={styles.F}> Pin location</Text>
            </View>
            <TouchableOpacity
              style={{ flex: 1, marginTop: 15, marginRight: 15 }}
            >
              <AntDesign name="hearto" color="black" size={35} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#d3d3d3',
              flexDirection: 'row'
            }}
          >
            <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
              <Text style={styles.F}> Enter drop location</Text>
            </View>
            <TouchableOpacity
              style={{ flex: 1, marginTop: 15, marginRight: 15 }}
              onPress={() => Actions.B7()}
            >
              <AntDesign name="plus" color="black" size={35} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: 65,
              height: 65,
              backgroundColor: '#d3d3d3',
              borderRadius: 50,
              position: 'absolute',
              bottom: 15,
              right: 15,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Entypo name="location" color="black" size={25} />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#d3d3d3',
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 7, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Enter drop location</Text>
          </View>
          <TouchableOpacity style={{ flex: 3, marginTop: 10, marginRight: 15 }}>
            <Text style={styles.R}> Buy now</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            marginTop: 15,
            backgroundColor: '#adff2f',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.T}> NOW GET FREE RIDE DAY</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  V: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 10
  },
  P: {
    fontSize: 20,
    color: 'blue',
    marginLeft: 15,
    marginTop: 10
  },
  F: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  R: {
    fontSize: 20,
    color: 'blue'
  },
  T: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
