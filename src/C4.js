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
              marginTop: 15,
              marginLeft: 15
            }}
          >
            <Text style={styles.Hdng}>Gift Cards</Text>
          </View>

          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.C5()}
          >
            <Entypo name="dots-three-vertical" color="black" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: 20
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: '#1e90ff',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Txt}>R CARDS</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              backgroundColor: 'grey',
              justifyContent: 'center',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.Txt}>PHYSICAL</Text>
          </View>
        </View>
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
        <Image
          style={{
            width: 360,
            height: 220,
            marginLeft: 25,
            marginTop: 30,
            borderRadius: 10
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSWjHBojui3f9nzJwe369pWejXMEi8DT4nxpq7YzH10SF4uVnew'
          }}
        />
        <ScrollView
          horizontal
          style={{
            width: '100%',
            height: 200,
            flexDirection: 'row',
            marginTop: 30
          }}
        >
          <View
            style={{
              flex: 1,

              marginHorizontal: 5
            }}
          >
            <View style={{ flex: 8, marginLeft: 15 }}>
              <Image
                style={{ width: 125, height: 140, borderRadius: 15 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBjTkqO9YUKcuubrXMMEzdNbNjKXA8QHaTjajZU5EiUZWLJ6ibA'
                }}
              />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.E}>Evergreen Recipe</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,

              marginHorizontal: 5
            }}
          >
            <View style={{ flex: 8 }}>
              <Image
                style={{ width: 125, height: 140, borderRadius: 15 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkR4oAt5h8MV-YzV8kKN23HZ_qgpR3MuCXII_hh15g9AhdWgK'
                }}
              />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.E}>Food in Kerala</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,

              marginHorizontal: 5
            }}
          >
            <View style={{ flex: 8 }}>
              <Image
                style={{ width: 125, height: 140, borderRadius: 15 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUh--S1d7ZxHW93ljG4TbZgH4u1ghsTQ2FeJBBtM_MXpqvH8q'
                }}
              />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.E}>Food in Kerala</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold'
  },

  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  A: {
    fontSize: 20,
    color: 'grey'
  },

  G: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black'
  }
});
