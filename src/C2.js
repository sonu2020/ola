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

export default class A2 extends Component {
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
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10
            }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="close" color="black" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 15, marginLeft: 10 }}>
            <Text style={styles.Hdng}>SORT&FILTER</Text>
            <Text>Showing 821 of 2090 Properties</Text>
          </View>
        </View>
        <Text style={styles.H}>Sorting</Text>
        <View
          style={{
            width: '100%',
            height: 130,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="staro" color="blue" size={35} />
            <Text>Relevence</Text>
          </TouchableOpacity>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Feather name="dollar-sign" color="black" size={35} />
            <Text>Price low</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Feather name="dollar-sign" color="black" size={35} />
            <Text>Price High</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="staro" color="black" size={35} />
            <Text>using rating</Text>
          </View>
        </View>
        <Text style={styles.H}>Price</Text>
        <Text style={styles.D}> $0- $30,000+</Text>
        <View style={{ width: '100%', height: 40 }}>
          <View style={{ flex: 1 }} />
          <View
            style={{
              flex: 8,
              borderBottomWidth: 8,
              borderBottomColor: 'blue',
              marginHorizontal: 30
            }}
          />
          <View style={{ flex: 1 }} />
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            marginTop: 20,
            height: 60,
            width: 350,
            backgroundColor: '#a9a9a9',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 80,
              flexDirection: 'row',
              borderBottomWidth: 1,
              marginTop: 20
            }}
          >
            <View style={{ flex: 9 }}>
              <Text style={styles.M}>Location</Text>
            </View>
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <Ionicons name="ios-arrow-forward" color="grey" size={35} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            marginTop: 20,
            height: 60,
            width: 350,
            backgroundColor: '#a9a9a9',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 80,
              flexDirection: 'row',
              borderBottomWidth: 1,
              marginTop: 20
            }}
          >
            <View style={{ flex: 9 }}>
              <Text style={styles.M}>Location time</Text>
            </View>
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <Ionicons name="ios-arrow-forward" color="grey" size={35} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            marginLeft: 20,
            backgroundColor: 'blue',
            marginTop: 20
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.C3()}
          >
            <Text style={styles.E}>Apply Filters</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  H: {
    fontSize: 30,
    marginTop: 15,
    marginLeft: 20
  },
  D: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20
  },
  M: {
    fontSize: 25,
    marginLeft: 25,
    marginTop: 15
  },
  E: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
});
