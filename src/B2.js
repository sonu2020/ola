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
            borderBottomWidth: 1,
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="black" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.B}>Delivering to</Text>
            <Text style={styles.Hdng}>2nd stage (bnglr)</Text>
          </View>
        </View>
        <Text style={styles.M}>Browse by Cuisine</Text>
        <View
          style={{
            width: '100%',
            height: 160,
            marginTop: 15,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 3, marginTop: 15, marginLeft: 15 }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrNRgj9HAQMC84xbKXnDFpiMT3Arc0L8Pl-XYI1dx8J8M95h9'
              }}
            />
            <Text style={styles.N}>italian</Text>
          </View>
          <View style={{ flex: 3, marginTop: 15, marginLeft: 15 }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixRlRuTZwxIHg1m0A_q4LByLh8rwgGyR_eZapBpFILULxb8M'
              }}
            />
            <Text style={styles.N}>Mexican</Text>
          </View>

          <View style={{ flex: 3, marginTop: 15, marginLeft: 15 }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzjdfmHe5lBx5bgzhOlRVaFIpmlQtlPHSYTFr6LtSFekKPa49pZw'
              }}
            />
            <Text style={styles.N}>germany</Text>
          </View>
          <View style={{ flex: 3, marginTop: 15, marginLeft: 15 }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm38bzRLU6NeM9aBIY-aTtY5uLHCyYtKB-VhEDnoQZC_0blOId'
              }}
            />
            <Text style={styles.N}>italian</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View style={{ flex: 5, marginTop: 15, marginLeft: 15 }}>
            <Text style={styles.G}> ALL RESTORENTS</Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 3,
              marginTop: 15,
              marginLeft: 15,
              flexDirection: 'row'
            }}
            onPress={() => Actions.B3()}
          >
            <AntDesign name="search1" color="blue" size={20} />
            <Text style={styles.W}>search</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 2,
              flexDirection: 'row',
              marginTop: 15,
              marginRight: 10
            }}
          >
            <Text style={styles.W}>Filter</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.Y}>Temporary Unvailable for odering</Text>
        <View
          style={{
            width: '100%',
            height: 280,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 140, height: 180 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmYqEk81uFjVupDaFSFC3yjWdiqCnzIXRqCuvh3xjHplJU_-1vQ'
              }}
            />
            <Text style={styles.Q}>WOW Onion Black Seed Hair oil</Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 140, height: 180 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSWjHBojui3f9nzJwe369pWejXMEi8DT4nxpq7YzH10SF4uVnew'
              }}
            />
            <Text style={styles.Q}>WOW Raw Apple Ciledr vinager</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20
  },
  B: {
    fontSize: 17
  },
  M: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 15
  },
  N: {
    fontSize: 15,
    marginLeft: 10
  },
  G: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  W: {
    fontSize: 15,
    color: 'blue'
  },
  Y: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 15
  }
});
