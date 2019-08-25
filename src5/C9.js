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
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10
            }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="black" size={35} />
          </TouchableOpacity>

          <View
            style={{
              flex: 4,
              marginTop: 15,
              marginLeft: 15
            }}
          >
            <Text style={styles.Hdng}>HOTEL SEARCH</Text>
          </View>

          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="dots-three-vertical" color="black" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: 20
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              width: 62,
              height: 40,
              backgroundColor: '#1e90ff',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Txt}>INDIA</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              backgroundColor: 'grey',
              justifyContent: 'center',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Txt}>INTERNATIONAL</Text>
          </View>
        </View>
        <Text style={styles.E}>CITY/AREA/HOTEL NAME</Text>
        <Text style={styles.P}>Goa</Text>
        <Text style={styles.M}>India</Text>

        <View style={{ width: '100%', height: 200 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.E}>CHECK IN</Text>
              <Text style={styles.Y}>23</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.E}>CHECK IN</Text>
              <Text style={styles.Y}>23</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.E}>CHECK IN</Text>
              <Text style={styles.Y}>23</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.E}>CHECK IN</Text>
              <Text style={styles.Y}>23</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flex: 6,
            marginTop: 40,
            height: 80,
            width: 100,
            backgroundColor: 'blue',
            borderRadius: 50,
            marginLeft: 180,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.N}>SEARCH</Text>
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

  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  E: {
    fontSize: 20,
    marginLeft: 85,
    marginTop: 25
  },
  P: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 185
  },
  M: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 205
  },
  Y: {
    fontSize: 45,
    marginTop: 10,
    marginLeft: 85
  },
  N: {
    fontSize: 20,
    color: '#fff'
  }
});
