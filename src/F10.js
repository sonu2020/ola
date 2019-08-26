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
            backgroundColor: '#dc143c',
            flexDirection: 'row'
          }}
        >
          <Text style={styles.Hdng}>10,000 Courses</Text>
        </View>
        <Text style={styles.K}>Sort by</Text>
        <TouchableOpacity
          style={{
            width: 370,
            height: 60,
            borderColor: 'black',
            borderWidth: 2,
            marginTop: 10,
            flexDirection: 'row',
            marginHorizontal: 20
          }}
        >
          <View style={{ flex: 8, marginTop: 15, marginLeft: 20 }}>
            <Text style={styles.L}>Ratings</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity>
              <Ionicons
                name="md-arrow-dropdown"
                color="black"
                size={35}
                onPress={() => Actions.pop()}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.K}>Level</Text>
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="dot-circle-o" color="black" size={35} />
          </View>
          <View style={{ flex: 8, marginTop: 15 }}>
            <Text style={styles.L}>All Levels(7,189)</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="dot-circle-o" color="black" size={35} />
          </View>
          <View style={{ flex: 8, marginTop: 15 }}>
            <Text style={styles.L}>All Levels(7,189)</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="dot-circle-o" color="black" size={35} />
          </View>
          <View style={{ flex: 8, marginTop: 15 }}>
            <Text style={styles.L}>All Levels(7,189)</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="dot-circle-o" color="black" size={35} />
          </View>
          <View style={{ flex: 8, marginTop: 15 }}>
            <Text style={styles.L}>All Levels(7,189)</Text>
          </View>
        </View>
        <Text style={styles.K}>Language</Text>
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="dot-circle-o" color="black" size={35} />
          </View>
          <View style={{ flex: 8, marginTop: 15 }}>
            <Text style={styles.L}>All Levels(7,189)</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="dot-circle-o" color="black" size={35} />
          </View>
          <View style={{ flex: 8, marginTop: 15 }}>
            <Text style={styles.L}>All Levels(7,189)</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome name="dot-circle-o" color="black" size={35} />
          </View>
          <View style={{ flex: 8, marginTop: 15 }}>
            <Text style={styles.L}>All Levels(7,189)</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    marginTop: 25,
    marginLeft: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  K: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 'bold'
  },
  L: {
    fontSize: 20
  }
});
