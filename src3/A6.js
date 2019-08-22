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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default class A6 extends Component {
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
            onPress={() => Actions.A7()}
          >
            <SimpleLineIcons name="handbag" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
            borderBottomWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <AntDesign name="staro" color="black" size={38} />
          <Text style={styles.D}> 3 Special Offers</Text>
          <Text style={styles.E}> for this item</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
            borderBottomWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View style={{ flex: 2, marginLeft: 10 }}>
            <Text style={styles.B}>Cashback (2)</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.B}>Bank Offer</Text>
          </View>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.B}>+1 more</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 30
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="light-bulb" color="black" size={45} />
            <Text style={styles.B}>Pay on Deli</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="black" size={45} />
            <Text style={styles.B}>Not avilab</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="upload" color="black" size={45} />
            <Text style={styles.B}>Amazon</Text>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 20, marginLeft: 30 }}>
          <Text style={styles.B}>Deliver To banglour 5625828</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: 45 }}>
            <Entypo name="circle" color="black" size={25} />
          </TouchableOpacity>
          <View style={{ flex: 9, marginRight: 10 }}>
            <Text style={styles.K}>Subscribe & save</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: 45 }}>
            <FontAwesome name="dot-circle-o" color="blue" size={25} />
          </TouchableOpacity>
          <View style={{ flex: 9, marginRight: 10 }}>
            <Text style={styles.K}>One-time purchase</Text>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 20, marginLeft: 30 }}>
          <Text style={styles.C}>
            Sold by FIT AND GLOW (4.7)hjafhgkccycgvdrtdgjsnxvgjxsmriyhfk
          </Text>
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

  E: {
    fontSize: 25,
    color: 'black'
  },
  D: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#b22222'
  },
  B: {
    fontSize: 20,
    color: 'blue'
  },
  C: {
    fontSize: 20
  },
  K: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10
  }
});
