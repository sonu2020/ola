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
        <ImageBackground
          style={{
            width: 420,
            height: 250
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67-_7umbdK4eMjNDvIHLiMh19huUGqEiAqLvOc6fES1x_h-QdgQ'
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
                alignItems: 'center'
              }}
              onPress={() => Actions.pop()}
            >
              <AntDesign name="arrowleft" color="white" size={35} />
            </TouchableOpacity>
            <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
              <Text style={styles.A}>choose your beaches</Text>
              <Text style={styles.B}>Goa</Text>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            height: 50,
            width: 360,
            marginLeft: 20,
            backgroundColor: 'grey'
          }}
        >
          <TextInput style={styles.D} placeholder={'Search'} />
        </View>
        <View style={{ width: '100%', height: 80, flexDirection: 'row' }}>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 50
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rRLRephC2iZAsDjOvkmAOfx8NbJAk0oRw7zFjxytiuBvA2PS'
              }}
            />
          </View>
          <View
            style={{
              flex: 8,
              flexDirection: 'row',
              marginTop: 20,
              marginRight: 10
            }}
          >
            <Text style={styles.F}> PREFERRED BY</Text>
            <Text style={styles.G}> TOURISTS</Text>
          </View>
        </View>
        <Text style={styles.R}> North Goa</Text>
        <Text style={styles.R}>
          ergodvycxboopvluiykghbdgjig;sevfdlxgmkni4pwh5ejodkrgfnbh43qjigokvdjhguqgi4onpjwlakvnh
        </Text>
        <View style={{ width: '100%', height: 40, flexDirection: 'row' }}>
          <View style={{ flex: 1, marginTop: 10, marginLeft: 25 }}>
            <TouchableOpacity>
              <Text style={styles.K}>TAP TO SEE AREA GUIDE</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Ionicons name="ios-arrow-dropright" color="black" size={35} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flex: 6,
            marginTop: 20,
            height: 50,
            width: 100,
            backgroundColor: 'red',
            borderRadius: 10,
            marginLeft: 280,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => Actions.C4()}
        >
          <Text style={styles.N}>CONTINUE</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  A: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  B: {
    fontSize: 20,
    color: '#fff'
  },
  D: {
    fontSize: 20
  },
  F: {
    fontSize: 20
  },
  G: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  R: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15
  },
  K: {
    fontSize: 15,
    color: 'blue'
  },
  N: {
    fontSize: 15,
    color: '#fff'
  }
});
