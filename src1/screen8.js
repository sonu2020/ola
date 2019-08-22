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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#191970'
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
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}>Aloo Paratha</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.screen9()}
          >
            <AntDesign name="arrowsalt" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="clockcircle" color="white" size={35} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ff8c00',
              width: 120,
              height: 40,
              marginRight: 15,
              borderRadius: 15
            }}
          >
            <Text style={styles.btn}>LETS COOK!</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: 60, marginTop: 15 }}>
          <Text style={styles.P}>How'd it turn out? Add a photo</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 180,
            marginTop: 15,
            flexDirection: 'row',
            marginHorizontal: 20
          }}
        >
          <View
            style={{
              width: 180,
              height: 180,
              padding: 15,
              marginHorizontal: 5,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black'
            }}
          >
            <Text style={styles.E}>+</Text>
            <Text style={styles.E}>Add Photo</Text>
          </View>
          <View style={{ flex: 1, marginHorizontal: 5 }}>
            <Image
              style={{ width: 180, height: 180, borderRadius: 15 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI36WFBlT0uld0yGFiUUbWeFvY3AzQnMVZWT1V6NSAC0a7npy0'
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 60,
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <AntDesign name="star" color="yellow" size={35} />
          <Text style={styles.S}>Rate this Recipie</Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 6,
            marginTop: 20,
            height: 50,
            width: 380,
            marginHorizontal: 15,
            backgroundColor: 'blue',
            borderRadius: 10
          }}
        >
          <TextInput style={styles.D} placeholder={'Leave a comment'} />
        </View>
        <Text style={styles.F}>You may also like...</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  btn: {
    fontWeight: 'bold',
    fontSize: 15
  },
  P: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 15,
    color: '#fff'
  },
  E: {
    fontSize: 20,
    color: '#fff'
  },
  S: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10
  },
  D: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10
  },
  F: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
    color: '#fff'
  }
});
