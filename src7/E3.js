import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
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
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10
            }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="arrowleft" color="black" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 8, marginTop: 15, marginLeft: 10 }}>
            <Text style={styles.Hdng}>Music Playback Settings</Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 120,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Autoplay</Text>
            <Text style={styles.N}>
              Keep on listen music reccommented for you tracks
            </Text>
          </View>
          <Switch
            onValueChange={() => this.setState({ sw: !this.state.sw })}
            value={this.state.sw}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 120,
            borderBottomWidth: 1,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Data Saver Mode</Text>
            <Text style={styles.N}>
              Keep on listen music reccommented for you tracks
            </Text>
          </View>
          <Switch
            onValueChange={() => this.setState({ sw: !this.state.sw })}
            value={this.state.sw}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 120,
            borderBottomWidth: 1,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Restirict</Text>
            <Text style={styles.N}>
              Keep on listen music reccommented for you tracks
            </Text>
          </View>
          <Switch
            onValueChange={() => this.setState({ sw: !this.state.sw })}
            value={this.state.sw}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 120,
            borderBottomWidth: 1,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Turn on lyrics</Text>
            <Text style={styles.N}>
              Keep on listen music reccommented for you tracks
            </Text>
          </View>
          <Switch
            onValueChange={() => this.setState({ sw: !this.state.sw })}
            value={this.state.sw}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 100,
            borderBottomWidth: 1,
            flexDirection: 'row',
            marginTop: 5
          }}
        >
          <View style={{ flex: 9, marginTop: 10, marginLeft: 25 }}>
            <Text style={styles.F}> Autoplay</Text>
            <Text style={styles.N}>
              Keep on listen music reccommented for you tracks
            </Text>
          </View>
          <Switch
            onValueChange={() => this.setState({ sw: !this.state.sw })}
            value={this.state.sw}
          />
        </View>
        <TouchableOpacity
          style={{
            flex: 2,
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10
          }}
          onPress={() => Actions.E4()}
        >
          <AntDesign name="arrowright" color="black" size={35} />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20,
    fontWeight: 'bold'
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
