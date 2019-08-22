import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
  ImageBackground
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sw: false
    };
  }

  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#191970'
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
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Entypo name="menu" color="white" size={35} />
          </TouchableOpacity>
          <View
            style={{
              flex: 6,
              marginTop: 20,
              height: 40,
              width: 70,
              backgroundColor: 'grey',
              borderRadius: 10
            }}
          >
            <TextInput style={styles.D} placeholder={'Search'} />
          </View>
          <Switch
            onValueChange={() => this.setState({ sw: !this.state.sw })}
            value={this.state.sw}
          />
        </View>
        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.screen6()}
          >
            <Text style={styles.txt}>Shake 'N' Make</Text>
            <Text style={styles.K}>regitf4ueagu</Text>
          </TouchableOpacity>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.txt}>Snap 'N' Cook</Text>
            <Text style={styles.K}>regitf4ueagu</Text>
          </View>
        </View>
        <ImageBackground
          style={{
            width: 420,
            height: 250,
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNCaoKsUfq29ZTlhgjwYMgw_z_a3iC9CucKeIYHu2ZVZ2QFD_'
          }}
        >
          <Text style={styles.W}>RICE RECIPIE</Text>
        </ImageBackground>
        <ImageBackground
          style={{
            width: 420,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzyk_PxLGvWKRexqLrwQioLE43XbBhmirVLA3Vl6_8rtV2Rm3-g'
          }}
        >
          <Text style={styles.W}>INADIAN BREADS</Text>
        </ImageBackground>

        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            backgroundColor: '#191970'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Entypo name="light-bulb" color="black" size={25} />
            <Text style={styles.K}>bulb</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="black" size={25} />
            <Text style={styles.K}>seacrh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="upload" color="black" size={25} />
            <Text style={styles.K}>upload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="ios-notifications" color="black" size={25} />
            <Text style={styles.K}>upload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <MaterialCommunityIcons name="account" color="black" size={25} />
            <Text style={styles.K}>profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  txt: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  P: {
    fontSize: 18,
    marginVertical: 15,
    color: 'black',
    backgroundColor: 'yellow',
    width: 200,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  K: {
    fontSize: 15,
    color: '#fff'
  },
  W: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  }
});
