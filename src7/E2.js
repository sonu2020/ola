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
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 7,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Hdng}>gaana</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Ionicons name="ios-arrow-back" color="black" size={35} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => Actions.E3()}>
          <Text style={styles.A}>For You</Text>
        </TouchableOpacity>
        <Text style={styles.M}>Personalised music curated for You</Text>
        <Image
          style={{ width: 350, height: 280, marginLeft: 25, marginTop: 20 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjgiKAmh4obrXMgRZHpHkVjs4qkHXyN7D_O5FIwYWebG5smqv'
          }}
        />
        <Image
          style={{ width: 350, height: 280, marginTop: 20, marginLeft: 25 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZ68yUZgsR1izJEGfCLqWqAIgoUQ78_Sfr9GavS0tTdNoKGtsfw'
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#a9a9a9'
  },
  A: {
    fontSize: 45,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15
  },
  M: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20
  }
});
