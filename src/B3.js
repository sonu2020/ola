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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, marginTop: 15, marginLeft: 20 }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="close" color="black" size={35} />
          </TouchableOpacity>
        </View>
        <Image
          style={{ width: 420, height: 250 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSWjHBojui3f9nzJwe369pWejXMEi8DT4nxpq7YzH10SF4uVnew'
          }}
        />
        <Text style={styles.M}>Friebd Joins, Friebd earns $50,Jions is we</Text>
        <Text style={styles.B}>Share your refernal code</Text>
        <TouchableOpacity onPress={() => Actions.B4()}>
          <Text style={styles.C}>How rederrel works?</Text>
        </TouchableOpacity>
        <Text style={styles.B}>Staring inviting friends</Text>
        <View
          style={{
            width: '100%',
            height: 160,
            marginTop: 15,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 3, marginTop: 15, marginLeft: 15 }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9cxEPfM8hqmh50hcXz2uYIrImBY-ZX3Hnl1TOBZkMfT8zsRKgQ'
              }}
            />
          </View>
          <View style={{ flex: 3, marginTop: 15, marginLeft: 15 }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjMuEHigpgcaJRX_J4G9i0Tek-CpPjvhMtfxYarGepXNTYWeBSA'
              }}
            />
          </View>

          <View style={{ flex: 3, marginTop: 15, marginLeft: 15 }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQeb9TUkQphHoXUEu5oqlseUdow3iNmIhoaIGqdcd7CCZyTC4pg'
              }}
            />
          </View>
          <View style={{ flex: 3, marginTop: 15, marginLeft: 15 }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2h7IlHFDI3YaKeeySz1Siwg0wpsKdJKaKQFZrhtrfJuQmVkn'
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20
  },
  B: {
    fontSize: 17
  },
  M: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 15
  },
  B: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 15
  },
  C: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 15
  }
});
