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
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Hdng}>PAYTMtravel</Text>
          </View>

          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.s4()}
          >
            <Entypo name="language" color="blue" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 2,
              borderBottomColor: 'blue'
            }}
          >
            <MaterialIcons name="flight" color="blue" size={35} />
            <Text>Flights</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="bus" color="blue" size={35} />
            <Text>Bus</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="train" color="blue" size={35} />
            <Text>Trains</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="hotel" color="blue" size={35} />
            <Text>Hotels</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 120 }}>
          <View style={{ flex: 1 }} />
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
                backgroundColor: '#1e90ff',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={styles.Txt}>ONEWAY</Text>
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
              <Text style={styles.Txt}>ROUNDTRIP</Text>
            </View>
          </View>
          <View style={{ flex: 1 }} />
        </View>
        <View style={{ width: '100%', height: 125 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: 25
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: '#dcdcdc',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 15
              }}
            >
              <Text style={styles.A}>FROM</Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <AntDesign name="arrowright" color="black" size={35} />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                backgroundColor: '#dcdcdc',
                justifyContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 15
              }}
            >
              <Text style={styles.A}>TO</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View style={{ flex: 1, borderBottomWidth: 1 }}>
            <Text style={styles.R}>Departure Date</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1
            }}
          >
            <TextInput style={styles.R} placeholder={'Add Return Date'} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View style={{ flex: 1, borderBottomWidth: 1 }}>
            <Text style={styles.R}>1 Adult</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1
            }}
          >
            <Text style={styles.R}>Economy</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            marginTop: 20,
            height: 60,
            width: 350,
            backgroundColor: '#1e90ff',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 25
          }}
        >
          <Text style={styles.E}>Seacrch Flights</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 60,
            marginTop: 15,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="home" color="black" size={25} />
            <Text>home</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Feather name="shopping-bag" color="black" size={25} />
            <Text>MALL</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons
              name="qrcode-scan"
              color="black"
              size={25}
            />
            <Text>scan</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons name="bank" color="black" size={25} />
            <Text>bank</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="mail" color="black" size={25} />
            <Text>messege</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#191970'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  A: {
    fontSize: 20,
    color: 'grey'
  },
  R: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 10
  },
  E: {
    fontSize: 20,
    color: '#fff'
  }
});
