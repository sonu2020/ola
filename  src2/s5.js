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
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
            <AntDesign name="arrowleft" color="black" size={35} />
          </TouchableOpacity>

          <View
            style={{
              flex: 4,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Hdng}>My Favourite Stores</Text>
          </View>

          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.s6()}
          >
            <AntDesign name="search1" color="black" size={30} />
          </TouchableOpacity>
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
            <MaterialIcons name="flight" color="blue" size={35} />
            <Text>Flights</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="bus" color="blue" size={35} />
            <Text>Bus</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="train" color="blue" size={35} />
            <Text>Trains</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="hotel" color="blue" size={35} />
            <Text>Hotels</Text>
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
            <MaterialIcons name="flight" color="blue" size={35} />
            <Text>Flights</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="bus" color="blue" size={35} />
            <Text>Bus</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="train" color="blue" size={35} />
            <Text>Trains</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <FontAwesome5 name="hotel" color="blue" size={35} />
            <Text>Hotels</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View style={{ flex: 5, marginLeft: 15, marginTop: 10 }}>
            <Text style={styles.W}>Top Brands</Text>
          </View>
          <View style={{ flex: 2 }} />
          <View style={{ flex: 3, marginLeft: 15, marginTop: 10 }}>
            <TouchableOpacity>
              <Text style={styles.R}>View All ></Text>
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
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGWhGTDGo-u34BIG4ehJggAOJ5SC41kQCI1DEEPuTJ9EUQzD-'
              }}
            />
            <Text>Hotels</Text>
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
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5CDH7skT4N9p88ZECnsSRtIzS_KENTzatPEyz03y2dL90NoJtg'
              }}
            />
            <Text>Hotels</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View style={{ flex: 5, marginLeft: 15, marginTop: 10 }}>
            <Text style={styles.W}>Top Brands</Text>
          </View>
          <View style={{ flex: 2 }} />
          <View style={{ flex: 3, marginLeft: 15, marginTop: 10 }}>
            <TouchableOpacity>
              <Text style={styles.R}>View All ></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 15
          }}
        >
          <View style={{ flex: 2, marginLeft: 15, marginTop: 10 }}>
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEocEoi5fjTVth6dqzzGQ8PZWNclhCP3kBB-IvnAuBah-3PIN8'
              }}
            />
          </View>
          <View style={{ flex: 5 }}>
            <Text style={styles.B}>VARSHA MEDICAL &G...</Text>
          </View>
          <View
            style={{
              flex: 3,
              marginLeft: 15,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <TouchableOpacity>
              <Text style={styles.R}>FOLLOW</Text>
            </TouchableOpacity>
          </View>
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
  W: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  R: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue'
  },
  B: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15
  }
});
