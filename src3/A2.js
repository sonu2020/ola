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
        <View
          style={{
            width: '100%',
            height: 80,
            backgroundColor: '#191970',
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
            <Entypo name="menu" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 15, marginLeft: 10 }}>
            <Text style={styles.Hdng}>amazon</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.A3()}
          >
            <SimpleLineIcons name="handbag" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#00008b',
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 7, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.Txt}>Deliver to Bangluru 560078</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="ios-arrow-down" color="white" size={25} />
          </TouchableOpacity>
        </View>

        <Image
          style={{
            width: 380,
            height: 60,
            marginHorizontal: 15
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6oPXlIWQV7qhDl3VSoOQBbhz2lORBLfC606HMG6msrIccHE'
          }}
        />
        <View
          style={{
            width: '100%',
            height: 250,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View style={{ flex: 3, marginLeft: 15, marginTop: 15 }}>
            <Image
              style={{ width: 70, height: 70, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUlbHRlbDqq3wURyusQkidfL3L6vNMOpeV3f-6s8gAPCfJdGh3w'
              }}
            />
          </View>

          <View style={{ flex: 6 }}>
            <Image
              style={{ width: 190, height: 250 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXBkLOZFlkostcqXdUgWvMi3GFI0-2-xitvj34chJw-pG_216'
              }}
            />
          </View>
          <TouchableOpacity style={{ flex: 2, marginTop: 10 }}>
            <AntDesign name="sharealt" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            marginTop: 20,
            height: 60,
            width: 350,
            backgroundColor: '#a9a9a9',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 80,
              flexDirection: 'row',
              borderBottomWidth: 1,
              marginTop: 20
            }}
          >
            <View style={{ flex: 9 }}>
              <Text style={styles.M}>No Cost EMI / Addti...</Text>
            </View>
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <Ionicons name="ios-arrow-forward" color="grey" size={35} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            marginTop: 20,
            height: 60,
            width: 350,
            backgroundColor: '#a9a9a9',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 80,
              flexDirection: 'row',
              borderBottomWidth: 1,
              marginTop: 20
            }}
          >
            <View style={{ flex: 9 }}>
              <Text style={styles.M}>Frozen Black</Text>
            </View>
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <Ionicons name="ios-arrow-forward" color="grey" size={35} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
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
  H: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  M: {
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 10
  }
});
