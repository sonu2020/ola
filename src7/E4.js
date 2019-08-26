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

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#d8bfd8'
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
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Ionicons name="ios-arrow-back" color="black" size={35} />
          </TouchableOpacity>
          <View
            style={{
              flex: 8,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Hdng}>gaana</Text>
          </View>
        </View>
        <Image
          style={{
            width: 360,
            height: 280,
            marginTop: 60,
            borderRadius: 10,
            marginLeft: 25
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_J2BVxdOnw8TlkwE5p0xxQdn3y5-t-i-YIMELSB8Mg3MjkwxK'
          }}
        />
        <Text style={styles.A}>KATTERI KONJUM NIRKA SONG</Text>
        <Text style={styles.M}>Poo Parthikuraroo Soonen</Text>
        <View
          style={{
            width: '100%',
            height: 100,
            borderTopWidth: 4,
            borderTopColor: '#fff',
            marginTop: 15
          }}
        >
          <View style={{ flex: 2, flexDirection: 'row' }}>
            <View style={{ flex: 7 }}>
              <Text style={styles.A}>KATTERI KONJUM...</Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 3,
                marginTop: 20,
                height: 30,
                marginRight: 10,
                width: 90,
                backgroundColor: 'grey',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => Actions.E5()}
            >
              <Text style={styles.G}>Quese</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 30 }}>
          <View style={{ flex: 1 }}>
            <Entypo name="shuffle" color="white" size={35} />
          </View>
          <View style={{ flex: 1 }}>
            <AntDesign name="stepbackward" color="white" size={35} />
          </View>
          <View style={{ flex: 1 }}>
            <AntDesign name="play" color="red" size={45} />
          </View>
          <View style={{ flex: 1 }}>
            <Entypo name="controller-next" color="white" size={35} />
          </View>
          <View style={{ flex: 1 }}>
            <Ionicons name="md-shuffle" color="white" size={35} />
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
    color: '#a9a9a9'
  },
  A: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15
  },
  M: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 20
  },
  G: {
    fontSize: 15
  }
});
