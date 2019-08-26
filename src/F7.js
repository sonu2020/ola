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
            height: 50,
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 5, marginTop: 20, marginLeft: 15 }}>
            <Text style={styles.W}>CURRENT LOCATION</Text>
          </View>
          <View style={{ flex: 3 }}></View>
          <View style={{ flex: 2, marginTop: 20 }}>
            <AntDesign name="bells" color="black" size={25} />
          </View>
        </View>
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
            <AntDesign name="search1" color="black" size={35} />
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
          <View style={{ flex: 5, marginTop: 20, marginLeft: 15 }}>
            <Text style={styles.W}>Browse categories</Text>
          </View>
          <View style={{ flex: 2 }}></View>
          <View style={{ flex: 3, marginTop: 20 }}>
            <TouchableOpacity onPress={() => Actions.F8()}>
              <Text style={styles.T}> SEE ALL</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPs7XeFDz49zO7OUF07v8P0WKCsNzC4wUv-r9TvGvRVYTfKR8'
              }}
            />
            <Text>Foods</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rs235YAo8eNO56MuVht2jI5pgE0Vdat_bdxOSVu5VczLP30eZw'
              }}
            />
            <Text>Foods</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgniy56TYVgHU3OulB5uV-HMHC66vcRRI1Ja3NuuDjac0bBin'
              }}
            />
            <Text>Foods</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPs7XeFDz49zO7OUF07v8P0WKCsNzC4wUv-r9TvGvRVYTfKR8'
              }}
            />
            <Text>Foods</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmYqEk81uFjVupDaFSFC3yjWdiqCnzIXRqCuvh3xjHplJU_-1vQ'
              }}
            />
            <Text>Foods</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqd3WA9HTlGsv9X6jS9unWG7HPracRz-sMmusIm16bJJg6dZl'
              }}
            />
            <Text>Foods</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPs7XeFDz49zO7OUF07v8P0WKCsNzC4wUv-r9TvGvRVYTfKR8'
              }}
            />
            <Text>Foods</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmYqEk81uFjVupDaFSFC3yjWdiqCnzIXRqCuvh3xjHplJU_-1vQ'
              }}
            />
            <Text>Foods</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqd3WA9HTlGsv9X6jS9unWG7HPracRz-sMmusIm16bJJg6dZl'
              }}
            />
            <Text>Foods</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPs7XeFDz49zO7OUF07v8P0WKCsNzC4wUv-r9TvGvRVYTfKR8'
              }}
            />
            <Text>Foods</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmYqEk81uFjVupDaFSFC3yjWdiqCnzIXRqCuvh3xjHplJU_-1vQ'
              }}
            />
            <Text>Foods</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqd3WA9HTlGsv9X6jS9unWG7HPracRz-sMmusIm16bJJg6dZl'
              }}
            />
            <Text>Foods</Text>
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
  T: {
    fontSize: 20,
    color: 'blue'
  }
});
