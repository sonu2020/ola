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
            <Ionicons name="ios-arrow-back" color="white" size={35} />
          </TouchableOpacity>
          <View
            style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Hdng}>Delivery Options</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 15
          }}
        >
          <View style={{ flex: 7, flexDirection: 'row' }}>
            <View style={{ flex: 8, marginTop: 10, marginLeft: 15 }}>
              <Text style={styles.A}>Deliver to:Home</Text>
            </View>
            <View
              style={{
                flex: 2,
                marginTop: 15
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 3,
                  height: 50,
                  width: 80,
                  backgroundColor: 'grey',
                  borderRadius: 10,
                  marginRight: 15,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={styles.R}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 3, marginTop: 10, marginLeft: 15 }}>
            <Text style={styles.L}>manafactiuing deffect 19th road cross</Text>
          </View>
        </View>
        <View style={{ flex: 8, marginTop: 10, marginLeft: 15 }} />
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 15
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 8, marginTop: 10, marginLeft: 15 }}>
              <Text style={styles.A}>is this a gift order?</Text>
            </View>
            <View
              style={{
                flex: 2,
                marginTop: 20
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 3,
                  height: 50,
                  width: 80,
                  marginTop: 15,
                  backgroundColor: 'grey',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={styles.R}>Addmsg</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.E}>Defalut Delivery Option</Text>
        <View style={{ width: '100%', height: 40, flexDirection: 'row' }}>
          <View style={{ flex: 7 }}>
            <Text style={styles.E}>Shipment 1: Standerd Deliv</Text>
          </View>
          <View style={{ flex: 3 }}>
            <TouchableOpacity
              style={{
                flex: 3,
                height: 20,
                width: 120,
                marginTop: 15,
                backgroundColor: 'grey',
                borderRadius: 10,
                marginRight: 15,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={styles.R}> View 1 </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 60,
            width: 380,
            marginTop: 45,
            backgroundColor: '#dc143c',
            borderRadius: 10,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => Actions.D5()}
        >
          <Text style={styles.R}> PROCEED TO PAY </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  A: {
    fontSize: 25
  },
  L: {
    fontSize: 20
  },
  R: {
    fontSize: 20,
    color: '#fff'
  },
  E: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15
  }
});
