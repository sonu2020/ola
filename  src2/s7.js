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
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="black" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}>MI A2 -64GB / 4GB</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="black" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="shopping-basket" color="black" size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            borderBottomWidth: 1,
            borderBottomColor: 'blue',
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 8, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.Txt}>@Select a Delivery Location</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="ios-arrow-forward" color="black" size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 240,

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
            <Text style={styles.Q}>SAMSUNG</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Image
              style={{ width: 220, height: 180 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfK3iROCZrpIZNbTKIqGd0zv_QBON4E6BnobbM2c72L6Q2G46d0A'
              }}
            />
            <Text style={styles.Q}>REDMI</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 240,

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
            <Text style={styles.Q}>SAMSUNG</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Image
              style={{ width: 220, height: 180 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfK3iROCZrpIZNbTKIqGd0zv_QBON4E6BnobbM2c72L6Q2G46d0A'
              }}
            />
            <Text style={styles.Q}>REDMI</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <Fontisto name="arrow-swap" color="black" size={25} />
            <Text style={styles.M}>SORT</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
              }}
            >
              <Fontisto name="arrow-swap" color="black" size={25} />
              <Text style={styles.M}>FILTER</Text>
            </View>
          </View>
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
  Txt: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  Q: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 10
  },
  M: {
    fontSize: 15,
    marginLeft: 15
  }
});
