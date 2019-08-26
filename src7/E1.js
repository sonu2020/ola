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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export default class A2 extends Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1
        }}
      >
        <ImageBackground
          style={{
            width: 420,
            height: 680
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXkavvlHgZI82h2ZU5DOg-Kqjw4-k9AYMFdsh8o3WQSFLdwRu'
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
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => Actions.pop()}
            >
              <AntDesign name="close" color="white" size={35} />
            </TouchableOpacity>
            <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
              <Text style={styles.A}>choose your beaches</Text>
              <Text style={styles.B}>Goa</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 50,
              marginTop: 200,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => Actions.E2()}
          >
            <Ionicons name="ios-arrow-down" color="white" size={55} />
          </TouchableOpacity>
          <View style={{ width: '100%', height: 80 }}>
            <View style={{ flex: 1 }} />
            <ScrollView
              horizontal
              style={{
                flex: 1,
                flexDirection: 'row',
                marginHorizontal: 10
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: '#1e90ff',
                  borderRadius: 10,
                  marginHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={styles.Txt}> Occason </Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'grey',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={styles.Txt}> Personal </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'grey',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={styles.Txt}> Train </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'grey',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={styles.Txt}> Train </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'grey',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={styles.Txt}> Train </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'grey',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={styles.Txt}>Train</Text>
              </View>
            </ScrollView>
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
              style={{
                flex: 1,
                marginLeft: 15
              }}
            >
              <Image
                style={{ width: 160, height: 200 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqj28ReZzcdfqwPzUE86SjEXn197dycRA3830QvVWPr6F7nj4'
                }}
              />
              <Text>Coffebarstyjjekll</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: 160, height: 200 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKm-_Fye8aEkaVW_4jOQlIIISXAhtClvB6VoOrvz-eN03PQ8u'
                }}
              />
              <Text>Coffebarstyjjekll</Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  A: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  B: {
    fontSize: 20,
    color: '#fff'
  },

  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
