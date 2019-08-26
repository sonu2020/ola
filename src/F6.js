import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 60,
              width: 350,
              flexDirection: 'row',
              marginTop: 15,
              borderColor: 'black',
              borderWidth: 2,
              marginHorizontal: 15,
              backgroundColor: '#dcdcdc',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AntDesign name="arrowleft" color="black" size={35} />
            <Text style={styles.L}> COMMERCIAL VEHICLES IN CUR</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 3, marginTop: 20, marginLeft: 15 }}>
            <Text style={styles.W}>3,281 ads</Text>
          </View>
          <View style={{ flex: 3 }}></View>
          <View style={{ flex: 4 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 40,
                width: 130,
                flexDirection: 'row',
                marginTop: 15,
                borderColor: 'blue',
                borderWidth: 3,
                marginHorizontal: 15,
                backgroundColor: '#dcdcdc',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => Actions.F7()}
            >
              <MaterialCommunityIcons
                name="filter-variant"
                color="blue"
                size={35}
              />
              <Text style={styles.L}> FILTER</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 180,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 120, height: 130, marginLeft: 20 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVsVJHVpqF9MgcbVMutxsCqm1SyghTfg62LvoKMa76oMZTuD89w'
              }}
            />
          </View>
          <View style={{ flex: 7 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 4, marginTop: 25, marginLeft: 15 }}>
                <Text style={styles.G}>FEATURED</Text>
              </View>
              <View style={{ flex: 4 }}></View>
              <View style={{ flex: 2, marginTop: 25 }}>
                <AntDesign name="hearto" color="green" size={30} />
              </View>
            </View>
            <View style={{ flex: 3, marginLeft: 15, marginTop: 20 }}>
              <Text style={styles.L}>$1,35,200</Text>
              <Text style={styles.L}>COMMERCIAL MRUTHI</Text>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 150,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 120, height: 130, marginLeft: 20 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVsVJHVpqF9MgcbVMutxsCqm1SyghTfg62LvoKMa76oMZTuD89w'
              }}
            />
          </View>
          <View style={{ flex: 7 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 4, marginTop: 25, marginLeft: 15 }}>
                <Text style={styles.G}>FEATURED</Text>
              </View>
              <View style={{ flex: 4 }}></View>
              <View style={{ flex: 2, marginTop: 25 }}>
                <AntDesign name="hearto" color="green" size={30} />
              </View>
            </View>
            <View style={{ flex: 3, marginLeft: 15, marginTop: 20 }}>
              <Text style={styles.L}>$1,35,200</Text>
              <Text style={styles.L}>COMMERCIAL MRUTHI</Text>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
        </View>
        <View
          style={{
            width: 380,
            height: 180,
            marginHorizontal: 15,
            backgroundColor: '#0000cd',
            marginTop: 15
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20
            }}
          >
            <Text style={styles.V}>YOUR AD COUL BE POSTED HERE</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.F}>SELL YOUR THINGS COMMUNITY</Text>
          </View>
          <View
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity
              style={{
                height: 60,
                width: 120,
                flexDirection: 'row',
                marginTop: 15,
                borderColor: '#fff',
                borderWidth: 3,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={styles.N}> STARTING</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#4682b4',
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="star" color="white" size={25} />
            <Text>Favorites</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="home" color="white" size={25} />
            <Text>Home</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialIcons name="keyboard-voice" color="white" size={25} />
            <Text>seacrh</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="radio" color="white" size={25} />
            <Text>Radio</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons
              name="music-box-outline"
              color="white"
              size={25}
            />
            <Text>My music</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  L: {
    fontSize: 20,
    color: 'green'
  },
  W: {
    fontSize: 20,
    color: 'green'
  },
  G: {
    fontSize: 15,
    color: 'yellow'
  },
  V: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  F: {
    fontSize: 15,
    color: '#fff'
  },
  N: {
    fontSize: 15,
    color: '#fff'
  }
});
