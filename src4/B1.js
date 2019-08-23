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
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="arrowleft" color="black" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}>Support</Text>
          </View>
        </View>
        <Text style={styles.B}>Get help on your last booking</Text>
        <View
          style={{
            width: '100%',
            height: 170,
            backgroundColor: '#dcdcdc',
            marginTop: 10
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <FontAwesome name="automobile" color="green" size={35} />
            </View>
            <View style={{ flex: 4, marginTop: 15 }}>
              <Text style={styles.W}>Wed,Aug 14,, 08:39 AM</Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text>$77</Text>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 85 }}>
            <Text style={styles.B}>Auto, CRN 34554452</Text>
          </View>
          <View style={{ flex: 4, flexDirection: 'row' }}>
            <View style={{ flex: 2 }} />
            <View style={{ flex: 7, marginLeft: 20 }}>
              <Text style={styles.B}>ABSERSBRDFBDXN</Text>
              <Text style={styles.B}>ADSFHDFJKGGL</Text>
            </View>

            <View style={{ flex: 3, marginTop: 15 }}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 50 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrNRgj9HAQMC84xbKXnDFpiMT3Arc0L8Pl-XYI1dx8J8M95h9'
                }}
              />
            </View>
          </View>
        </View>
        <Text style={styles.K}>PICK ANOTHER BOOKING</Text>
        <Text style={styles.B}>How can we help?</Text>
        <View
          style={{
            flex: 6,
            marginTop: 20,
            height: 50,
            marginLeft: 20,
            width: 380,
            backgroundColor: '#dcdcdc'
          }}
        >
          <TextInput style={styles.P} placeholder={'Search'} />
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 20
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Ride Optins</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, marginTop: 15 }}
            onPress={() => Actions.B2()}
          >
            <Ionicons name="ios-arrow-forward" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> My account</Text>
          </View>
          <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
            <Ionicons name="ios-arrow-forward" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Fares & Payments</Text>
          </View>
          <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
            <Ionicons name="ios-arrow-forward" color="grey" size={35} />
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
  B: {
    fontSize: 17,
    marginLeft: 18,
    marginTop: 15
  },
  W: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  K: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15
  },
  P: {
    fontSize: 20
  },
  F: {
    fontSize: 20
  }
});
