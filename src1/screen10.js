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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fff'
        }}
      >
        <View
          style={{
            width: '100%',
            height: 80,
            backgroundColor: '#fff',
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="grey" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 22, marginLeft: 10 }}>
            <Text style={styles.Hdng}>softwave</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.screen11()}
          >
            <MaterialCommunityIcons name="pencil" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <Image
          style={{ width: 420, height: 220 }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSusYmfnRzN1LYss87Z6C68gEQzZcgoe2SAHE4DuHzvvx-oqypQ'
          }}
        />
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 70, height: 70, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDB2JYBnF5PP4J0GJGpWywXKRueyFge3XN-8nyEaSL_b4iSOoQ'
              }}
            />
          </View>
          <View style={{ flex: 5 }}>
            <View style={{ flex: 1, padding: 15 }}>
              <Text style={styles.Q}>Softwave</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text>Cooperative office</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 15 }}>
              <Text style={styles.W}>10:00 AM-8:50 PM</Text>
              <AntDesign name="down" color="black" size={20} />
            </View>
          </View>
          <TouchableOpacity style={{ flex: 2, marginTop: 10 }}>
            <AntDesign name="pluscircleo" color="#ff1493" size={45} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <ImageBackground
            style={{ width: 420, height: 100 }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwwltZta-2HWwB1tXQw2bbYYODxcBO-52RiUeBxlR8pCjPAL4tQ'
            }}
          >
            <Text style={styles.T}>Meet Us Here..</Text>
            <Text style={styles.Y}>4th B cross Road </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="ios-call" color="black" size={35} />
            <Text>CALL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="whatsapp" color="black" size={35} />
            <Text>WHATSAPP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="down" color="black" size={35} />
            <Text>SHOWOE</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: 70, backgroundColor: 'red' }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1e90ff'
  },
  Q: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  W: {
    fontSize: 15,
    color: 'red'
  },
  T: {
    fontSize: 18,
    color: 'black',
    marginLeft: 20,
    marginTop: 10
  },
  Y: {
    fontSize: 23,
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 5
  },
  M: {
    fontSize: 25,
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 30
  },
  L: {
    fontSize: 20,
    color: 'black',
    marginLeft: 30,
    marginTop: 10
  },
  E: {
    fontSize: 20,
    color: 'black',
    borderRadius: 10,
    marginLeft: 30,
    marginTop: 10,
    borderWidth: 2,
    height: 40,
    fontWeight: 'bold',
    width: 180,
    marginTop: 15
  }
});
