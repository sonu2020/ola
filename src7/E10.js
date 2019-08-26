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
            height: 80,
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="close" color="close" size={35} />
          </TouchableOpacity>
          <View
            style={{
              flex: 4,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          ></View>

          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <Entypo name="check" color="black" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => Actions.pop()}
          >
            <AntDesign name="search1" color="black" size={35} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}> M-twon 20</Text>
            <Text>
              dgethxfhzsetjetszdzgzryjrhetredghlzjksvdxmohlnebkfjvbvrsgd
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}> M-twon 20</Text>
            <Text>
              dgethxfhzsetjetszdzgzryjrhetredghlzjksvdxmohlnebkfjvbvrsgd
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}> M-twon 20</Text>
            <Text>
              dgethxfhzsetjetszdzgzryjrhetredghlzjksvdxmohlnebkfjvbvrsgd
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}> M-twon 20</Text>
            <Text>
              dgethxfhzsetjetszdzgzryjrhetredghlzjksvdxmohlnebkfjvbvrsgd
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}> M-twon 20</Text>
            <Text>
              dgethxfhzsetjetszdzgzryjrhetredghlzjksvdxmohlnebkfjvbvrsgd
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}> M-twon 20</Text>
            <Text>
              dgethxfhzsetjetszdzgzryjrhetredghlzjksvdxmohlnebkfjvbvrsgd
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}> M-twon 20</Text>
            <Text>
              dgethxfhzsetjetszdzgzryjrhetredghlzjksvdxmohlnebkfjvbvrsgd
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginLeft: 10
              }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBE0RQK0zQwcwy-59BE4h2lJkCk7qHNUg4UdgkwoY3WAHJWY1Qqw'
              }}
            />
          </View>
          <View style={{ flex: 8, marginLeft: 20 }}>
            <Text style={styles.Txt}> M-twon 20</Text>
            <Text>
              dgethxfhzsetjetszdzgzryjrhetredghlzjksvdxmohlnebkfjvbvrsgd
            </Text>
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

  H: {
    fontSize: 20,
    color: '#fff'
  },
  A: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  D: {
    fontSize: 20,
    color: '#696969'
  },
  E: {
    fontSize: 20,
    color: '#fff'
  }
});
