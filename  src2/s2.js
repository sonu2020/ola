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
import Ionicons from 'react-native-vector-icons/Ionicons';
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
            backgroundColor: '#1e90ff',
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

          <View
            style={{
              flex: 4,
              marginTop: 20,
              height: 50,
              width: 100,
              backgroundColor: '#fff',
              borderRadius: 10
            }}
          >
            <TextInput style={styles.D} placeholder={'PAYTM'} />
          </View>

          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.s3()}
          >
            <FontAwesome5 name="cc-amazon-pay" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            backgroundColor: '#1e90ff'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="amazon-pay" color="white" size={35} />
            <Text>Pay</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="pay-circle-o1" color="white" size={35} />
            <Text>UPI</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="book" color="white" size={35} />
            <Text>passbook</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="shop" color="white" size={35} />

            <Text>Favorite</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            borderBottomWidth: 1,
            borderBottomColor: 'blue',
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 8, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.Txt}>Use LAKHPATI to win $1 Lakh</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="ios-arrow-forward" color="black" size={35} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            marginTop: 10,
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
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="lightbulb" color="blue" size={35} />

            <Text>Electrcity</Text>
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
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="lightbulb" color="blue" size={35} />

            <Text>Electrcity</Text>
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
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="lightbulb" color="blue" size={35} />

            <Text>Electrcity</Text>
          </View>
        </View>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff4500'
  },
  D: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold'
  },
  Txt: {
    fontSize: 20,
    color: 'blue'
  }
});
