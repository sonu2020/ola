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
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => Actions.pop()}
          >
            <Ionicons name="ios-arrow-back" color="black" size={35} />
          </TouchableOpacity>
          <View
            style={{
              flex: 6,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Hdng}>Favorites</Text>
          </View>

          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.E8()}
          >
            <MaterialCommunityIcons
              name="filter-variant"
              color="black"
              size={35}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 3,
              borderBottomColor: 'red'
            }}
          >
            <Text style={styles.Txt}>SONGS</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>ALBUMS</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>PLAYLIS</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>RADIO</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            height: 50,
            width: 370,
            marginLeft: 25,
            backgroundColor: '#dcdcdc'
          }}
        >
          <TextInput style={styles.D} placeholder={'Search by name,album '} />
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 4, marginLeft: 20 }}>
            <Text style={styles.Txt}>Adada Mazha</Text>
            <Text>dgethx</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="download" color="black" size={25} />
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="dots-three-horizontal" color="black" size={25} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 4, marginLeft: 20 }}>
            <Text style={styles.Txt}>Adada Mazha</Text>
            <Text>dgethx</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="download" color="black" size={25} />
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="dots-three-horizontal" color="black" size={25} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 4, marginLeft: 20 }}>
            <Text style={styles.Txt}>Adada Mazha</Text>
            <Text>dgethx</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="download" color="black" size={25} />
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="dots-three-horizontal" color="black" size={25} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 4, marginLeft: 20 }}>
            <Text style={styles.Txt}>Adada Mazha</Text>
            <Text>dgethx</Text>
          </View>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="download" color="black" size={25} />
          </View>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="dots-three-horizontal" color="black" size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="home" color="black" size={25} />
            <Text>Home</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialIcons name="keyboard-voice" color="black" size={25} />
            <Text>seacrh</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="radio" color="black" size={25} />
            <Text>Radio</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons
              name="music-box-outline"
              color="black"
              size={25}
            />
            <Text>My music</Text>
          </View>
        </View>
        <View
          style={{
            width: 205,
            height: 55,
            backgroundColor: 'red',
            borderRadius: 50,
            position: 'absolute',
            bottom: 150,
            right: 85,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Entypo name="shuffle" color="white" size={25} />
          <Text style={styles.E}> SHUFFLE </Text>
        </View>
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

  H: {
    fontSize: 20,
    color: '#fff'
  },
  A: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  D: {
    fontSize: 20,
    color: '#696969'
  },
  E: {
    fontSize: 20,
    color: '#fff'
  }
});
