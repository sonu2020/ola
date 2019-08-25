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
            style={{
              flex: 8,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Hdng}>My Orders</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 80, flexDirection: 'row' }}>
          <View style={{ flex: 7, marginLeft: 15, marginTop: 15 }}>
            <Text style={styles.P}>
              Please select multiple Pay Now orders to pay at once
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 3,
              marginTop: 20,
              marginRight: 10,
              height: 40,
              width: 100,
              backgroundColor: '#b22222',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => Actions.D9()}
          >
            <Text style={styles.H}> PAY NOW </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            height: 180,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View style={{ flex: 1, alignItems: 'center', marginTop: 25 }}>
            <AntDesign name="checkcircleo" color="green" size={35} />
          </View>
          <View style={{ flex: 3, marginTop: 15, marginLeft: 20 }}>
            <Text style={styles.H}>Default Address:</Text>
            <Text>dfzfjkhtawSJFZg</Text>
            <Text>isahfsgkjfeglgufersdgvf</Text>
            <Text>skfcreldgbjvhbdkzgjjsjgkdjgrzsg</Text>
            <Text>ejgsldkhcfgjzcxhvjewkafjsd,fcveshfheaiu</Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
        <View
          style={{
            width: '100%',
            height: 180,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View style={{ flex: 1, alignItems: 'center', marginTop: 25 }}>
            <AntDesign name="checkcircleo" color="green" size={35} />
          </View>
          <View style={{ flex: 3, marginTop: 15, marginLeft: 20 }}>
            <Text style={styles.H}>Default Address:</Text>
            <Text>dfzfjkhtawSJFZg</Text>
            <Text>isahfsgkjfeglgufersdgvf</Text>
            <Text>skfcreldgbjvhbdkzgjjsjgkdjgrzsg</Text>
            <Text>ejgsldkhcfgjzcxhvjewkafjsd,fcveshfheaiu</Text>
          </View>
          <View style={{ flex: 1 }} />
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
  T: {
    fontSize: 20,
    color: 'grey'
  },
  P: {
    fontSize: 20
  },
  H: {
    fontSize: 20
  }
});
