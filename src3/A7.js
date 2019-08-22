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

export default class A8 extends Component {
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
            backgroundColor: '#191970',
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
          <View style={{ flex: 4, marginTop: 15, marginLeft: 10 }}>
            <Text style={styles.Hdng}>amazon</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="search1" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.A8()}
          >
            <SimpleLineIcons name="handbag" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 55,
            marginTop: 5,
            marginLeft: 15,
            flexDirection: 'row'
          }}
        >
          <Text style={styles.D}> Customer Questions</Text>
        </View>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <View
            style={{
              width: '100%',
              height: 70,
              backgroundColor: '#d3d3d3',
              borderRadius: 10
            }}
          >
            <TextInput
              style={styles.H}
              placeholder={'Have a question? Search'}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Q: This product both TV and monit</Text>
            <Text style={styles.N}> A: Ya</Text>
            <Text>Amazon Customer 1 week ago</Text>
          </View>
          <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
            <Ionicons name="ios-arrow-forward" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Q: This product both TV and monit</Text>
            <Text style={styles.N}> A: Ya</Text>
            <Text>Amazon Customer 1 week ago</Text>
          </View>
          <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
            <Ionicons name="ios-arrow-forward" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Q: This product both TV and monit</Text>
            <Text style={styles.N}> A: Ya</Text>
            <Text>Amazon Customer 1 week ago</Text>
          </View>
          <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
            <Ionicons name="ios-arrow-forward" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Q: This product both TV and monit</Text>
            <Text style={styles.N}> A: Ya</Text>
            <Text>Amazon Customer 1 week ago</Text>
          </View>
          <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
            <Ionicons name="ios-arrow-forward" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Q: This product both TV and monit</Text>
            <Text style={styles.N}> A: Ya</Text>
            <Text>Amazon Customer 1 week ago</Text>
          </View>
          <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
            <Ionicons name="ios-arrow-forward" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Q: This product both TV and monit</Text>
            <Text style={styles.N}> A: Ya</Text>
            <Text>Amazon Customer 1 week ago</Text>
          </View>
          <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
            <Ionicons name="ios-arrow-forward" color="grey" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Q: This product both TV and monit</Text>
            <Text style={styles.N}> A: Ya</Text>
            <Text>Amazon Customer 1 week ago</Text>
          </View>
          <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
            <Ionicons name="ios-arrow-forward" color="grey" size={35} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },

  D: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold'
  },
  H: {
    fontSize: 25,
    marginTop: 10,
    marginLeft: 15
  },
  F: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  N: {
    fontSize: 20,
    marginTop: 10
  }
});
