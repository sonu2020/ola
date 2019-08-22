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
      <View
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
            <Entypo name="menu" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}>Veg-Pulao"Rice Aroma</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.screen5()}
          >
            <AntDesign name="arrowsalt" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="clockcircle" color="white" size={35} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: 320, paddingHorizontal: 15 }}>
          <Image
            style={{
              width: '100%',
              height: 320,
              marginTop: 10
            }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPltB0DGW9BILl1ILPaxuVZADjevAosmKc2sFtoc4WGl74BoVLw'
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 40,
            marginTop: 20,
            alignItems: 'center'
          }}
        >
          <Text style={styles.Q}>VEG-PULAO "RICE AROMA"</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 55, height: 55, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy4S6bSUyVIuR-_OoTX2Eez70Bx9ZAylxDfi-k7-pKghDOqWi'
              }}
            />
          </View>
          <View style={{ flex: 6, marginTop: 15, marginLeft: 10 }}>
            <Text style={styles.Hdng}>nirmal Kaur</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
                width: 80,
                height: 40,
                marginRight: 15,
                borderRadius: 15
              }}
            >
              <Text style={styles.btn}>FOLLOW</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            marginTop: 15,
            flexDirection: 'row',
            backgroundColor: '#191970'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="light-bulb" color="white" size={35} />
            <Text style={styles.Y}>bulb</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="white" size={35} />
            <Text style={styles.Y}>seacrh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="upload" color="white" size={35} />
            <Text style={styles.Y}>upload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="ios-notifications" color="white" size={35} />
            <Text style={styles.Y}>money</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.C}>Total time 25 Min</Text>
        <Text style={styles.C}>Cooking time 15 MIn</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  Q: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  btn: {
    fontWeight: 'bold',
    fontSize: 15
  },
  Y: {
    fontSize: 10,
    color: '#fff'
  },
  C: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
    color: '#fff'
  }
});
