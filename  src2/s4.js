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
            onPress={() => Actions.s5()}
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
              <Text style={styles.Txt}>BOOKTICKETS</Text>
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
              <Text style={styles.Txt}>CHECK PNR</Text>
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
              <Text style={styles.Txt}>TRAIN </Text>
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
              <Text style={styles.Txt}>TRAIN </Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            borderBottomWidth: 1,
            marginTop: 15,
            marginLeft: 20
          }}
        >
          <TextInput style={styles.R} placeholder={'Source Station'} />
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginRight: 15
          }}
        >
          <AntDesign name="arrowdown" color="black" size={35} />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 80,
            borderBottomWidth: 1,
            marginLeft: 20
          }}
        >
          <TextInput style={styles.R} placeholder={'Destination Station'} />
        </View>
        <Text style={styles.W}>Departure Date</Text>
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
          <Text style={styles.E}>Seacrh Trains</Text>
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
  W: {
    marginLeft: 30,
    fontSize: 20,
    marginTop: 10
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
    fontSize: 25,
    marginLeft: 15,
    marginTop: 20
  },
  E: {
    fontSize: 20,
    color: '#fff'
  },
  G: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black'
  }
});
