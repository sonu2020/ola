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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export default class A8 extends Component {
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
            onPress={() => Actions.A9()}
          >
            <SimpleLineIcons name="handbag" color="white" size={30} />
          </TouchableOpacity>
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
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOCQBTFUgAX-9RVYrbI1RxlCeQCS9c2usDVqUzWJdpCezSxPi'
          }}
        />
        <View
          style={{
            width: '100%',
            height: 120,
            marginTop: 15
          }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                width: '100%',
                height: 60
              }}
            >
              <View style={{ flex: 5, marginLeft: 15 }}>
                <Text style={styles.A}> Amazon Pay</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ marginLeft: 105 }}>
              <Ionicons name="ios-arrow-forward" color="grey" size={35} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="mobile1" color="blue" size={35} />
            <Text>Mobile</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="old-mobile" color="blue" size={35} />
            <Text> Postpaid</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons
              name="access-point-network"
              color="blue"
              size={35}
            />
            <Text>DTH</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="mobile1" color="blue" size={35} />
            <Text>Mobile</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="old-mobile" color="blue" size={35} />
            <Text> Postpaid</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons
              name="access-point-network"
              color="blue"
              size={35}
            />
            <Text>DTH</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="mobile1" color="blue" size={35} />
            <Text>Mobile</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="old-mobile" color="blue" size={35} />
            <Text> Postpaid</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons
              name="access-point-network"
              color="blue"
              size={35}
            />
            <Text>DTH</Text>
          </View>
        </View>
        <View
          style={{
            height: 100,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="mobile1" color="blue" size={35} />
            <Text>Mobile</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="old-mobile" color="blue" size={35} />
            <Text> Postpaid</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons
              name="access-point-network"
              color="blue"
              size={35}
            />
            <Text>DTH</Text>
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
  },
  A: {
    fontSize: 20,
    color: 'green'
  }
});
