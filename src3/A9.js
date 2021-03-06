import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Switch
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export default class A9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sw: false
    };
  }
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
          >
            <SimpleLineIcons name="handbag" color="white" size={30} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <View
            style={{
              width: '100%',
              height: 65,
              marginTop: 10,
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
            height: 50,
            marginTop: 10,
            backgroundColor: '#6495ed',
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 7, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.Txt}>Deliver to Bangluru 560078</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="ios-arrow-down" color="white" size={25} />
          </TouchableOpacity>
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
            <Text>Over 1000 Results</Text>
          </View>
          <View
            style={{
              flex: 3,
              marginTop: 15,
              marginRight: 15,
              flexDirection: 'row'
            }}
          >
            <Text style={styles.W}>Prime</Text>
            <Switch
              onValueChange={() => this.setState({ sw: !this.state.sw })}
              value={this.state.sw}
            />
          </View>

          <TouchableOpacity
            style={{
              flex: 2,
              flexDirection: 'row',
              marginTop: 15,
              marginRight: 10
            }}
          >
            <Text style={styles.T}>Filter</Text>
            <Ionicons name="ios-arrow-down" color="black" size={25} />
          </TouchableOpacity>
        </View>
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
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHAgE6MVHbnQ8fLnmI5Y5CPe0THK18aRSkNNkA8bCgk1bZDpfgw'
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
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyXIVMO_Tjx24qiQq2rhE3B0E_SqvgBwBazXjCfmVytSCiaNHPg'
              }}
            />
            <Text style={styles.Q}>WOW Raw Apple Ciledr vinager</Text>
          </View>
        </View>
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
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHAgE6MVHbnQ8fLnmI5Y5CPe0THK18aRSkNNkA8bCgk1bZDpfgw'
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
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyXIVMO_Tjx24qiQq2rhE3B0E_SqvgBwBazXjCfmVytSCiaNHPg'
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },

  H: {
    fontSize: 25,
    marginTop: 10,
    marginLeft: 15
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  T: {
    fontSize: 15
  },
  W: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 10,
    marginRight: 10
  }
});
