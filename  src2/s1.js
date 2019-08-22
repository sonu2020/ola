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

export default class App extends Component {
  render() {
    return (
      <View
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
            <Entypo name="menu" color="black" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 15, marginLeft: 10 }}>
            <Text style={styles.Hdng}>mall</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="black" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.s2()}
          >
            <SimpleLineIcons name="handbag" color="black" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="smile-circle" color="black" size={30} />
          </TouchableOpacity>
        </View>
        <Image
          style={{ width: 380, height: 220, marginHorizontal: 15 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3sfPGnbOrhcjtT9kHU7lw4QPALuJAeJ53z-7z8QoQ_HuPqk4Aw'
          }}
        />
        <View
          style={{
            width: '100%',
            height: 120,
            marginTop: 25,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>Brand</Text>
            <Image
              style={{ width: 50, height: 80 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetPnpCxNQ9YYW43I-gGE2sJ1iMCFgD-gO8td3edZmHMXz62js'
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>Mobiles</Text>
            <Image
              style={{ width: 50, height: 80 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13ptoRIRO0wBvSsZNpOXSgMBzXRjAo_rX6kcxZXJKaPm9dOeUmw'
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>Fasihon</Text>
            <Image
              style={{ width: 50, height: 80 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPHfV8yE_NLMRBmQhL2rWO6uSPWYRsReIawYVnkdG5XacpBaz'
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>Womens</Text>
            <Image
              style={{ width: 50, height: 80 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1naRePu1Z5LtNqRj5kXF-t4xlZVzIcwCB6hsLqYfv95NOoGA3g'
              }}
            />
          </View>
        </View>
        <Image
          style={{
            width: 380,
            height: 100,
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff4500'
  }
});
