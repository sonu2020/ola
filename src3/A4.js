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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export default class A4 extends Component {
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
            backgroundColor: '#191970',
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
            <Entypo name="menu" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 15, marginLeft: 10 }}>
            <Text style={styles.Hdng}>amazon</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.A5()}
          >
            <SimpleLineIcons name="handbag" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.D}>TODAY'S</Text>
          <Text style={styles.E}> DEALS</Text>
        </View>
        <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 3,
              borderBottomColor: '#ff6347'
            }}
          >
            <Text style={styles.Txt}>FEATURED</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>ALL DEALS</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>UPCOMING</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            backgroundColor: '#48d1cc',
            marginTop: 10
          }}
        >
          <View style={{ flex: 3, marginLeft: 25, marginTop: 20 }}>
            <AntDesign name="calendar" color="white" size={45} />
            <Text>22 Deals</Text>
          </View>
          <View style={{ flex: 7, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Txt}>Deal of the Day</Text>
            <Text>Top detias live only today</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 240,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 1 }}>
            <Image
              style={{ width: 220, height: 180 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ACABlCT1Mz11q5cNIMMghiftSv2eCsGHFseTyQhAYfwPr_QJ'
              }}
            />
            <Text style={styles.Q}>Starting$133</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Image
              style={{ width: 220, height: 180 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfK3iROCZrpIZNbTKIqGd0zv_QBON4E6BnobbM2c72L6Q2G46d0A'
              }}
            />
            <Text style={styles.Q}>Starting413990</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 40,
            width: 160,
            marginLeft: 10,
            borderRadius: 15,
            backgroundColor: '#ffd700',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.F}>See All</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  H: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  M: {
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  D: {
    fontSize: 40,
    color: '#ff0000'
  },
  E: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#b22222'
  },
  Q: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 10,
    marginRight: 10
  },
  F: {
    fontSize: 20
  }
});
