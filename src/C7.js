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
              marginTop: 15
            }}
          >
            <Text style={styles.Hdng}> BANGALORE TO MUMBAI</Text>
            <Text>24 AUG STARTDY</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 80 }}>
          <View style={{ flex: 1 }} />
          <ScrollView
            horizontal
            style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: 10
            }}
          >
            <TouchableOpacity onPress={() => Actions.C8()}>
              <AntDesign name="filter" color="blue" size={35} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#1e90ff',
                borderRadius: 10,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={styles.Txt}> AC COACH </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                backgroundColor: 'grey',
                justifyContent: 'center',
                borderRadius: 10,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={styles.Txt}> Ac </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: 'grey',
                justifyContent: 'center',
                borderRadius: 10,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={styles.Txt}> sleeper </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'grey',
                justifyContent: 'center',
                borderRadius: 10,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={styles.Txt}> sleeper </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'grey',
                justifyContent: 'center',
                borderRadius: 10,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={styles.Txt}> sleeper </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: 'grey',
                justifyContent: 'center',
                borderRadius: 10,
                marginHorizontal: 10
              }}
            >
              <Text style={styles.Txt}> Sleeper </Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View style={{ flex: 1, marginTop: 15, marginLeft: 15 }}>
            <Text style={styles.V}>Duration</Text>
          </View>
          <View style={{ flex: 1, marginTop: 15, marginLeft: 15 }}>
            <Text style={styles.I}>Rating</Text>
          </View>
          <View style={{ flex: 1, marginTop: 15, marginLeft: 15 }}>
            <Text style={styles.V}>Price</Text>
          </View>
          <View style={{ flex: 1, marginTop: 15, marginLeft: 15 }}>
            <Text style={styles.V}>Depature</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            backgroundColor: '#dcdcdc',
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKnhh3ks1GW0rBRqYJseu3fdO3L0q6UjQgBhQmYvlRZlHtxqpjw'
              }}
            />
          </TouchableOpacity>
          <View style={{ flex: 8, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> MSRTC</Text>
            <Text style={styles.F}> $1852-$155</Text>
          </View>
          <TouchableOpacity style={{ flex: 2, marginTop: 15 }}>
            <Ionicons name="ios-arrow-down" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 150,
            marginTop: 15
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 3, marginLeft: 10 }}>
              <Text style={styles.B}>05:52PM</Text>
            </View>
            <View style={{ flex: 5 }}>
              <Text style={styles.B}>Orenge Tours</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.B}>$1300</Text>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text>18h 5m</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text>11:20AM</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 150,
            marginTop: 15
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 3, marginLeft: 10 }}>
              <Text style={styles.B}>05:52PM</Text>
            </View>
            <View style={{ flex: 5 }}>
              <Text style={styles.B}>Orenge Tours</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.B}>$1300</Text>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text>18h 5m</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text>11:20AM</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 150,
            marginTop: 15
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 3, marginLeft: 10 }}>
              <Text style={styles.B}>05:52PM</Text>
            </View>
            <View style={{ flex: 5 }}>
              <Text style={styles.B}>Orenge Tours</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.B}>$1300</Text>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text>18h 5m</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text>11:20AM</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 150,
            marginTop: 15
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 3, marginLeft: 10 }}>
              <Text style={styles.B}>05:52PM</Text>
            </View>
            <View style={{ flex: 5 }}>
              <Text style={styles.B}>Orenge Tours</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.B}>$1300</Text>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text>18h 5m</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text>11:20AM</Text>
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
  H: {
    fontSize: 20,
    color: 'red'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  V: {
    fontSize: 20,
    color: 'blue'
  },
  I: {
    fontSize: 20
  },
  F: {
    fontSize: 20
  },
  B: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
