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
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#191970'
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
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Entypo name="menu" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}>Recipiebook</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.screen4()}
          >
            <AntDesign name="arrowsalt" color="white" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 260,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 1, backgroundColor: 'black', marginTop: 15 }}>
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                style={{
                  width: 185,
                  height: 125,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtj7fbaLwC7JwoUIG4d0IDcWpceh2jz0SCganv9338P4PnnOk2'
                }}
              />
            </View>
            <View style={{ flex: 1, marginTop: 18, marginLeft: 18 }}>
              <Text style={styles.W}>Veg-pulago"Rice"</Text>
            </View>
            <View style={{ flex: 1, marginTop: 5, marginLeft: 18 }}>
              <Text style={styles.W}>nirmal kaur</Text>
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'black', marginTop: 15 }}>
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                style={{
                  width: 185,
                  height: 125,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzyk_PxLGvWKRexqLrwQioLE43XbBhmirVLA3Vl6_8rtV2Rm3-g'
                }}
              />
            </View>
            <View style={{ flex: 1, marginTop: 18, marginLeft: 18 }}>
              <Text style={styles.W}>Veg Crispy Fried</Text>
            </View>
            <View style={{ flex: 1, marginTop: 5, marginLeft: 18 }}>
              <Text style={styles.W}>Jasmeen</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 260,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 1, backgroundColor: 'black', marginTop: 15 }}>
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                style={{
                  width: 185,
                  height: 125,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0u45lW9czb6MaugVkZdJpd-kmuAQnbm5uxuQnACXaT7jRcbK_'
                }}
              />
            </View>
            <View style={{ flex: 1, marginTop: 18, marginLeft: 18 }}>
              <Text style={styles.W}>Veg-Fried Rice </Text>
            </View>
            <View style={{ flex: 1, marginTop: 5, marginLeft: 18 }}>
              <Text style={styles.W}>martina toll</Text>
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'black', marginTop: 15 }}>
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                style={{
                  width: 185,
                  height: 125,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPltB0DGW9BILl1ILPaxuVZADjevAosmKc2sFtoc4WGl74BoVLw'
                }}
              />
            </View>
            <View style={{ flex: 1, marginTop: 18, marginLeft: 18 }}>
              <Text style={styles.W}>Veg Schentrre</Text>
            </View>
            <View style={{ flex: 1, marginTop: 5, marginLeft: 18 }}>
              <Text style={styles.W}>Manish</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  W: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
