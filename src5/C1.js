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
            borderBottomWidth: 1,
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
            <Text style={styles.Hdng}>Goa</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="black" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="map" color="black" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            borderBottomWidth: 1
          }}
        >
          <View style={{ flex: 7 }} />
          <View style={{ flex: 3, marginTop: 15 }}>
            <TouchableOpacity onPress={() => Actions.C2()}>
              <Text style={styles.R}>MORE FILTERS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.Txt}>RECOMMENDED FOR YOU </Text>
        <Image
          style={{ width: 380, height: 200, marginLeft: 15, marginTop: 20 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wdheDb7P76B378b3w6lua_p68zHnJiROC3ounYycN00GZSpCKg'
          }}
        />
        <View
          style={{
            width: '100%',
            height: 160,
            marginTop: 15
          }}
        >
          <View style={{ flex: 2, flexDirection: 'row' }}>
            <View style={{ flex: 7, marginTop: 15, marginLeft: 15 }}>
              <Text style={styles.L}>@HOME B&B DONAPAULA</Text>
              <Text>panjim</Text>
            </View>
            <View style={{ flex: 3, marginTop: 15, marginLeft: 15 }}>
              <Text>PER NIGHT</Text>
              <Text>$200</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: 'row' }}>
            <View style={{ flex: 7, marginTop: 15, marginLeft: 15 }}>
              <Text style={styles.Y}>Room in BnB</Text>
            </View>
            <View style={{ flex: 3, marginTop: 15, marginLeft: 15 }}>
              <Text style={styles.P}>you save $177</Text>
              <Text>PRICE </Text>
              <Text>FREE WIFI</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  R: {
    fontSize: 15,
    color: 'blue'
  },
  Txt: {
    fontSize: 25,
    marginTop: 15,
    marginLeft: 20
  },
  L: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  Y: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  P: {
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold'
  }
});
