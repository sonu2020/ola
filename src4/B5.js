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
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="black" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}>NOTIFICATIONS</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 3,
              borderBottomColor: 'blue'
            }}
          >
            <Text style={styles.Txt}>ALL</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>UPADTES</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>OFFERS</Text>
          </View>
        </View>
        <Image
          style={{ width: 420, height: 170, marginTop: 10 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5GXlj_f67Z-T2gUUcvVb0gDEW2eLayPk5Z1cmmrZC8KN8pRU'
          }}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 50,
            marginTop: 15
          }}
        >
          <View style={{ flex: 8, marginTop: 10, marginLeft: 15 }}>
            <Text style={styles.Hdng}>Bombat Bengleuru awits</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.B6()}
          >
            <Entypo name="dot-single" color="blue" size={55} />
          </TouchableOpacity>
        </View>
        <Text style={styles.V}>
          dfgdhjhjksacvz,cmvfhgh,fvksik,hawldisrzdgdzgswzesdzxdgxfsdxcbdzrrsdfdczg,jrdfhlknv,cfmnlkh.grigkvnlk
        </Text>
        <TouchableOpacity>
          <Text style={styles.P}>Know more</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  V: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 10
  },
  P: {
    fontSize: 20,
    color: 'blue',
    marginLeft: 15,
    marginTop: 10
  }
});
