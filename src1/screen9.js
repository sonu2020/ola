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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
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
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="white" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}>Expolore Channels</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 3,
              borderBottomColor: '#ff8c00'
            }}
          >
            <Text style={styles.Txt}>Recipe</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>Video</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.Txt}>Article</Text>
          </View>
        </View>
        <ImageBackground
          style={{
            width: 420,
            height: 220,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhsnCzZ6A8AYd97QEq4V7TXjbDZS_pDYxpOW3ijkn_xSPYh1w'
          }}
        >
          <Text style={styles.A}>NOVA Dairy PRODUCTS</Text>
          <Text style={styles.Txt}>Private property</Text>
        </ImageBackground>
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 10
            }}
          >
            <Text style={styles.Txt}>Popular</Text>
          </View>
          <View style={{ flex: 3 }} />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 10
            }}
          >
            <TouchableOpacity onPress={() => Actions.screen10()}>
              <Text style={styles.R}>MORE</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 200,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View
            style={{
              flex: 1,

              marginHorizontal: 5
            }}
          >
            <View style={{ flex: 8 }}>
              <Image
                style={{ width: 195, height: 170, borderRadius: 15 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdYeDPZkDVTIvNcZnZe3qjtSut70Yh3OICUbys-3QosfaE4Az'
                }}
              />
            </View>
            <View style={{ flex: 2, backgroundColor: 'black' }}>
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
                style={{ width: 195, height: 170, borderRadius: 15 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkR4oAt5h8MV-YzV8kKN23HZ_qgpR3MuCXII_hh15g9AhdWgK'
                }}
              />
            </View>
            <View style={{ flex: 2, backgroundColor: 'black' }}>
              <Text style={styles.E}>Food in Kerala</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 10
            }}
          >
            <Text style={styles.Txt}>Trend</Text>
          </View>
          <View style={{ flex: 3 }} />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 10
            }}
          >
            <TouchableOpacity>
              <Text style={styles.R}>MORE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 200,
            flexDirection: 'row',
            marginTop: 10
          }}
        >
          <View
            style={{
              flex: 1,

              marginHorizontal: 5
            }}
          >
            <View style={{ flex: 8 }}>
              <Image
                style={{ width: 195, height: 170, borderRadius: 15 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7u5nIPJARVW1FO9SHmDSKvF2w1dPhX-c3fYFzGg8vZqjr-quEA'
                }}
              />
            </View>
            <View style={{ flex: 2, backgroundColor: 'black' }}>
              <Text style={styles.E}>Burger</Text>
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
                style={{ width: 195, height: 170, borderRadius: 15 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDB2JYBnF5PP4J0GJGpWywXKRueyFge3XN-8nyEaSL_b4iSOoQ'
                }}
              />
            </View>
            <View style={{ flex: 2, backgroundColor: 'black' }}>
              <Text style={styles.E}>Chips</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  Txt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  A: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    fontWeight: 'bold'
  },
  R: {
    fontSize: 18,
    color: '#ff8c00',
    marginRight: 15
  },
  E: {
    fontSize: 18,
    marginTop: 5,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20
  }
});
