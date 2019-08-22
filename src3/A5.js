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

export default class A5 extends Component {
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
            onPress={() => Actions.A6()}
          >
            <SimpleLineIcons name="handbag" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            marginTop: 15,
            marginLeft: 15,
            flexDirection: 'row'
          }}
        >
          <Text style={styles.D}>Up to 50% on WOW</Text>
        </View>

        <View
          style={{
            width: '100%',
            height: 280,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 140, height: 180 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHAgE6MVHbnQ8fLnmI5Y5CPe0THK18aRSkNNkA8bCgk1bZDpfgw'
              }}
            />
            <Text style={styles.Q}>WOW Onion Black Seed Hair oil</Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 140, height: 180 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyXIVMO_Tjx24qiQq2rhE3B0E_SqvgBwBazXjCfmVytSCiaNHPg'
              }}
            />
            <Text style={styles.Q}>WOW Raw Apple Ciledr vinager</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 280,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 140, height: 180 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHAgE6MVHbnQ8fLnmI5Y5CPe0THK18aRSkNNkA8bCgk1bZDpfgw'
              }}
            />
            <Text style={styles.Q}>WOW Onion Black Seed Hair oil</Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 140, height: 180 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyXIVMO_Tjx24qiQq2rhE3B0E_SqvgBwBazXjCfmVytSCiaNHPg'
              }}
            />
            <Text style={styles.Q}>WOW Raw Apple Ciledr vinager</Text>
          </View>
        </View>
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

  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  D: {
    fontSize: 35,
    color: 'black'
  },

  Q: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10
  },
  F: {
    fontSize: 20
  },
  R: {
    fontSize: 20
  }
});
