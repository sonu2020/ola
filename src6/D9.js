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
            <Entypo name="menu" color="white" size={35} />
          </TouchableOpacity>
          <View
            style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Hdng}>Review Basket</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="white" size={30} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.D10()}
          >
            <Entypo name="dots-three-vertical" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <View style={{ flex: 3, marginTop: 15, marginLeft: 20 }}>
            <Text style={styles.H}>Bevereges</Text>
          </View>
          <View style={{ flex: 5 }} />
          <View style={{ flex: 2, marginTop: 15, marginRight: 10 }}>
            <Text> 1 ITEM</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 180, flexDirection: 'row' }}>
          <View
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 90, height: 180 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1qUElPTPL3GR7kH1-BrXMbmzDTPfVnylfjHrvumZgxjYR-L3ow'
              }}
            />
          </View>
          <View style={{ flex: 7 }}>
            <View style={{ flex: 2, marginTop: 15 }}>
              <Text style={styles.R}>
                Canbury-Bournvita-chocalate-healthdidrink
              </Text>
            </View>
            <View style={{ flex: 1, marginTop: 10 }}>
              <Text>750 g-Pouch</Text>
            </View>
            <View style={{ flex: 2, flexDirection: 'row' }}>
              <View style={{ flex: 5, marginTop: 15, marginLeft: 10 }}>
                <Text style={styles.H}>Rs 256.40</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AntDesign name="minussquareo" color="red" size={35} />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text>1</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AntDesign name="plussquareo" color="red" size={35} />
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.M}>SAVED FOR LATER</Text>
        <View
          style={{
            width: 190,
            height: 280,
            marginLeft: 15
          }}
        >
          <View
            style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 100, height: 60 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1M0qiQhYgE41F1O4-zH0wzT7nchIjRV97ht0YPSZj6V_J0Q8'
              }}
            />
            <Text>Out of stock</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.E}>Freshco Signatuere chicken-Hot Dog</Text>
          </View>

          <TouchableOpacity
            style={{
              flex: 2,
              marginTop: 20,
              height: 40,
              width: 100,
              backgroundColor: '#b22222',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.P}> PAY NOW </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  },
  H: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  R: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  M: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 25
  },
  P: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
