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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
              marginTop: 25,
              marginLeft: 15
            }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="black" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.Hdng}>Mobile Recharge or Bill Payment</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <TouchableOpacity
            style={{ flex: 2, marginTop: 10, marginLeft: 15 }}
            onPress={() => Actions.s7()}
          >
            <Entypo name="circle" color="black" size={25} />
          </TouchableOpacity>
          <View style={{ flex: 3, marginRight: 40 }}>
            <Text style={styles.K}>Prepaid</Text>
          </View>
          <View style={{ flex: 2, marginTop: 10, marginLeft: 10 }}>
            <FontAwesome name="dot-circle-o" color="blue" size={25} />
          </View>
          <View style={{ flex: 3, marginRight: 40 }}>
            <Text style={styles.K}>Postpaid</Text>
          </View>
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
          <TextInput style={styles.R} placeholder={'Edit Mobile Number'} />
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#d3d3d3',
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View style={{ flex: 7, marginLeft: 15, marginTop: 20 }}>
            <Text style={styles.W}>SELECT ONE FROM RECENTS</Text>
          </View>

          <View style={{ flex: 3, marginLeft: 15, marginTop: 20 }}>
            <TouchableOpacity>
              <Text style={styles.R}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View style={{ flex: 2, marginLeft: 15 }}>
            <Image
              style={{ width: 70, height: 70, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSWjHBojui3f9nzJwe369pWejXMEi8DT4nxpq7YzH10SF4uVnew'
              }}
            />
          </View>
          <View style={{ flex: 8, marginTop: 10, marginLeft: 10 }}>
            <Text style={styles.T}>966446986</Text>
            <Text>Recharge of $50 done on 12 Aug,2019</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View style={{ flex: 2, marginLeft: 15 }}>
            <Image
              style={{ width: 70, height: 70, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBjTkqO9YUKcuubrXMMEzdNbNjKXA8QHaTjajZU5EiUZWLJ6ibA'
              }}
            />
          </View>
          <View style={{ flex: 8, marginTop: 10, marginLeft: 10 }}>
            <Text style={styles.T}>966446986</Text>
            <Text>Recharge of $50 done on 12 Aug,2019</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View style={{ flex: 2, marginLeft: 15 }}>
            <Image
              style={{ width: 70, height: 70, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEbtmaFO0su0VFccuzT4D7327fgSvPMbLDTe50DXBbsLobwjJEQ'
              }}
            />
          </View>
          <View style={{ flex: 8, marginTop: 10, marginLeft: 10 }}>
            <Text style={styles.T}>966446986</Text>
            <Text>Recharge of $50 done on 12 Aug,2019</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 40,
            backgroundColor: '#d3d3d3',
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View style={{ flex: 7, marginLeft: 15, marginTop: 20 }}>
            <Text style={styles.W}>PROMOS FOR YOU</Text>
          </View>
        </View>
        <Text style={styles.P}>TRAVELPAY</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  K: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10
  },
  R: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10
  },
  W: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  R: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue'
  },
  T: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  P: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 20
  }
});
