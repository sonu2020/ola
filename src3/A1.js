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
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export default class A1 extends Component {
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
            onPress={() => Actions.A2()}
          >
            <SimpleLineIcons name="handbag" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            paddingHorizontal: 10,
            backgroundColor: '#191970',
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 3 }}>
            <View
              style={{
                width: '100%',
                height: 50,
                marginTop: 10,

                backgroundColor: '#d3d3d3',
                borderRadius: 10
              }}
            >
              <TextInput style={styles.H} placeholder={'Categry'} />
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <View
              style={{
                width: '100%',
                height: 50,
                marginLeft: 10,
                marginTop: 10,
                backgroundColor: '#d3d3d3',
                borderRadius: 10
              }}
            >
              <TextInput style={styles.H} placeholder={'Search'} />
            </View>
          </View>
        </View>

        <Image
          style={{
            width: 380,
            height: 200,
            marginHorizontal: 15,
            marginTop: 10
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3sfPGnbOrhcjtT9kHU7lw4QPALuJAeJ53z-7z8QoQ_HuPqk4Aw'
          }}
        />

        <Image
          style={{
            width: 380,
            height: 180,
            marginHorizontal: 15,
            marginTop: 10
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7Cz-FsmyiZGIrVWPDN2lFv4ijgNR3j7zq9b5TdyUjFhjr9wm'
          }}
        />

        <View
          style={{
            width: '100%',
            height: 60,
            marginTop: 27,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: '#ffe4b5',
              borderRadius: 50,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Entypo name="home" color="black" size={25} />
            <Text>HOME</Text>
          </View>

          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: '#ffe4b5',
              borderRadius: 50,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Feather name="shopping-bag" color="black" size={25} />
            <Text>MALL</Text>
          </View>
          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: '#ffe4b5',
              borderRadius: 50,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <MaterialCommunityIcons
              name="qrcode-scan"
              color="black"
              size={25}
            />
            <Text>SCAN</Text>
          </View>
          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: '#ffe4b5',
              borderRadius: 50,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Entypo name="dots-three-horizontal" color="black" size={25} />
            <Text>MORE</Text>
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
    color: '#fff'
  },
  H: {
    fontSize: 20,
    marginLeft: 15
  }
});
