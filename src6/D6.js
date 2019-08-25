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
            borderBottomWidth: 1,
            borderBottomColor: 'green',
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Ionicons name="ios-arrow-back" color="black" size={35} />
          </TouchableOpacity>

          <View
            style={{
              flex: 8,
              marginTop: 20,
              height: 50,
              width: 120
            }}
          >
            <TextInput
              style={styles.Hdng}
              placeholder={'Search for your delivery loation'}
            />
          </View>
        </View>
        <View
          style={{
            flex: 6,
            marginTop: 20,
            height: 50,
            width: 380,
            marginLeft: 15,
            backgroundColor: '#dcdcdc',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.T}>CHOOSE CURRENT LOCATION</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#dcdcdc',
            flexDirection: 'row',
            marginTop: 20
          }}
        >
          <View style={{ flex: 1, marginLeft: 20, marginTop: 15 }}>
            <Text style={styles.T}>SAVED ADDRESS</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, marginTop: 15, marginRight: 5 }}
            onPress={() => Actions.D7()}
          >
            <Text style={styles.P}>+ADD NEW ADDRESS</Text>
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
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="dot-circle-o" color="green" size={35} />
          </View>
          <View style={{ flex: 3, marginTop: 15, marginLeft: 20 }}>
            <Text style={styles.H}>Default Address:</Text>
            <Text>dfzfjkhtawSJFZg</Text>
            <Text>isahfsgkjfeglgufersdgvf</Text>
            <Text>skfcreldgbjvhbdkzgjjsjgkdjgrzsg</Text>
            <Text>ejgsldkhcfgjzcxhvjewkafjsd,fcveshfheaiu</Text>
          </View>
          <View style={{ flex: 1 }} />
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="pencil" color="black" size={35} />
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="delete" color="black" size={35} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15
  },
  T: {
    fontSize: 20,
    color: 'grey'
  },
  P: {
    fontSize: 20,
    color: 'blue'
  },
  H: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  }
});
