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
            backgroundColor: '#000080',
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
            <AntDesign name="arrowleft" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 15, marginLeft: 10 }}></View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="sharealt" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <AntDesign name="shoppingcart" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              flex: 5,
              marginTop: 10,
              marginLeft: 20,
              height: 55,
              width: 120,
              backgroundColor: '#dcdcdc',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => Actions.F2()}
          >
            <Text style={styles.H}> ADD TO CART </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 5,
              marginTop: 10,
              marginLeft: 10,
              height: 55,
              width: 120,
              backgroundColor: '#c0c0c0',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.H}> ADD TO WISH </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.A}>This Course Includes</Text>
        <TouchableOpacity
          style={{
            flex: 1,
            marginTop: 20,
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row',
              marginTop: 10
            }}
          >
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <AntDesign name="arrowright" color="grey" size={35} />
            </TouchableOpacity>
            <View style={{ flex: 9 }}>
              <Text style={styles.M}> 45 hours on-demand video</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <AntDesign name="arrowright" color="grey" size={35} />
            </TouchableOpacity>
            <View style={{ flex: 9 }}>
              <Text style={styles.M}> Support Files</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <AntDesign name="arrowright" color="grey" size={35} />
            </TouchableOpacity>
            <View style={{ flex: 9 }}>
              <Text style={styles.M}> 56 Articles</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <AntDesign name="arrowright" color="grey" size={35} />
            </TouchableOpacity>
            <View style={{ flex: 9 }}>
              <Text style={styles.M}> 6 Assignments</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <AntDesign name="arrowright" color="grey" size={35} />
            </TouchableOpacity>
            <View style={{ flex: 9 }}>
              <Text style={styles.M}> Full lifetime access</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.A}>What Will i Learn?</Text>
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <AntDesign name="check" color="blue" size={35} />
            </TouchableOpacity>
            <View style={{ flex: 9 }}>
              <Text style={styles.M}>
                Bulid powerfull,fast,user-frendly reactive web apps
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: 25
          }}
        >
          <View
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity style={{ flex: 1, marginTop: 15 }}>
              <AntDesign name="check" color="blue" size={35} />
            </TouchableOpacity>
            <View style={{ flex: 9 }}>
              <Text style={styles.M}>
                Provide amazing user expirince by levering the power
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              marginTop: 20,
              marginLeft: 100,
              height: 55,
              width: 200,
              backgroundColor: '#ff0000',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.H}> BUY NOW </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  M: {
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  H: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#20b2aa'
  },
  A: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 40
  }
});
