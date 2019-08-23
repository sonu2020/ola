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
            <Entypo name="menu" color="black" size={35} />
          </TouchableOpacity>
          <View style={{ flex: 4, marginTop: 20, marginLeft: 10 }}>
            <Text style={styles.Hdng}> Your rides</Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 170,
            backgroundColor: '#dcdcdc'
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => Actions.B5()}
            >
              <FontAwesome name="automobile" color="green" size={35} />
            </TouchableOpacity>
            <View style={{ flex: 4, marginTop: 15 }}>
              <Text style={styles.W}>Wed,Aug 14,, 08:39 AM</Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <TouchableOpacity>
                <Text style={styles.L}>$77</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 85 }}>
            <Text style={styles.B}>Auto, CRN 34554452</Text>
          </View>
          <View style={{ flex: 4, flexDirection: 'row' }}>
            <View style={{ flex: 2 }} />
            <View style={{ flex: 7, marginLeft: 20 }}>
              <Text style={styles.B}>16th mainrosd</Text>
              <Text style={styles.B}>JP nagar 4th</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 170,
            backgroundColor: '#dcdcdc'
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <FontAwesome name="automobile" color="green" size={35} />
            </TouchableOpacity>
            <View style={{ flex: 4, marginTop: 15 }}>
              <Text style={styles.W}>Wed,Aug 14,, 08:39 AM</Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <TouchableOpacity>
                <Text style={styles.L}>$77</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 85 }}>
            <Text style={styles.B}>Auto, CRN 34554452</Text>
          </View>
          <View style={{ flex: 4, flexDirection: 'row' }}>
            <View style={{ flex: 2 }} />
            <View style={{ flex: 7, marginLeft: 20 }}>
              <Text style={styles.B}>16th mainrosd</Text>
              <Text style={styles.B}>JP nagar 4th</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 170,
            backgroundColor: '#dcdcdc'
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <FontAwesome name="automobile" color="green" size={35} />
            </View>
            <View style={{ flex: 4, marginTop: 15 }}>
              <Text style={styles.W}>Wed,Aug 14,, 08:39 AM</Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <TouchableOpacity>
                <Text style={styles.L}>$77</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 85 }}>
            <Text style={styles.B}>Auto, CRN 34554452</Text>
          </View>
          <View style={{ flex: 4, flexDirection: 'row' }}>
            <View style={{ flex: 2 }} />
            <View style={{ flex: 7, marginLeft: 20 }}>
              <Text style={styles.B}>16th mainrosd</Text>
              <Text style={styles.B}>JP nagar 4th</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 170,
            backgroundColor: '#dcdcdc'
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <FontAwesome name="automobile" color="green" size={35} />
            </View>
            <View style={{ flex: 4, marginTop: 15 }}>
              <Text style={styles.W}>Wed,Aug 14,, 08:39 AM</Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <TouchableOpacity>
                <Text style={styles.L}>$77</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 85 }}>
            <Text style={styles.B}>Auto, CRN 34554452</Text>
          </View>
          <View style={{ flex: 4, flexDirection: 'row' }}>
            <View style={{ flex: 2 }} />
            <View style={{ flex: 7, marginLeft: 20 }}>
              <Text style={styles.B}>16th mainrosd</Text>
              <Text style={styles.B}>JP nagar 4th</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold'
  },

  B: {
    fontSize: 17,
    marginLeft: 18,
    marginTop: 15
  },
  W: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  L: {
    fontSize: 20,
    marginTop: 25
  }
});
