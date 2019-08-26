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

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
        <ImageBackground
          style={{
            width: 420,
            height: 250
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxr371J0hm5MzBU-_bFxnhy2PkOZ7p9wtHyQwHoMpvE6Wqc6m5-w'
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                flex: 1,
                marginTop: 20,
                marginLeft: 15
              }}
              onPress={() => Actions.pop()}
            >
              <AntDesign name="close" color="white" size={35} />
            </TouchableOpacity>
            <View
              style={{
                flex: 7
              }}
            ></View>

            <TouchableOpacity
              style={{
                flex: 2,
                marginTop: 20,
                marginRight: 15
              }}
              onPress={() => Actions.F9()}
            >
              <AntDesign name="sharealt" color="white" size={40} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 4, marginTop: 25, marginLeft: 15 }}>
              <Text style={styles.G}>$1,35,200</Text>
            </View>
            <View style={{ flex: 4 }}></View>
            <View style={{ flex: 2, marginTop: 30 }}>
              <AntDesign name="hearto" color="green" size={30} />
            </View>
          </View>
          <View style={{ flex: 3, marginLeft: 15, marginTop: 20 }}>
            <Text style={styles.L}>
              BRAND NEW CORNER SOFA SET WITH 3 YEARS WARRENTY
            </Text>
            <Text style={styles.L}>TAVARAKKARA.NORTH </Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 4, marginTop: 25, marginLeft: 15 }}>
              <Text style={styles.G}>$1,35,200</Text>
            </View>
            <View style={{ flex: 4 }}></View>
            <View style={{ flex: 2, marginTop: 30 }}>
              <AntDesign name="hearto" color="green" size={30} />
            </View>
          </View>
          <View style={{ flex: 3, marginLeft: 15, marginTop: 20 }}>
            <Text style={styles.L}>
              BRAND NEW CORNER SOFA SET WITH 3 YEARS WARRENTY
            </Text>
            <Text style={styles.L}>TAVARAKKARA.NORTH </Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10 }}>
          <TouchableOpacity
            style={{
              flex: 5,
              marginTop: 10,
              marginLeft: 10,
              height: 55,
              width: 120,
              backgroundColor: '#0000cd',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.H}> CHAT </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 5,
              marginTop: 10,
              marginLeft: 10,
              height: 55,
              width: 120,
              backgroundColor: '#0000cd',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.H}> CALL </Text>
          </TouchableOpacity>
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

  R: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20
  },
  A: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#fff'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#fff',
    marginTop: 10
  },
  G: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green'
  },
  L: {
    fontSize: 20,
    color: 'green'
  },
  H: {
    fontSize: 25,
    color: '#fff'
  }
});
