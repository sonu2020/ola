import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstcontainer}>
          <Text style={styles.AAA}>Language:English</Text>

          <AntDesign
            name="down"
            color="white"
            size={25}
            style={{ paddingLeft: 20 }}
          />
        </View>
        <View style={{ flex: 3, backgroundColor: "#E1306C" }}>
          <Text style={styles.insta}>Instagram</Text>
        </View>
        <View
          style={{
            flex: 7,
            backgroundColor: "#E1306C",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TextInput style={styles.BBB} placeholder="Username" />
          <TextInput
            style={styles.BBB}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity style={styles.DDD}>
            <Text style={styles.text}>LOG IN</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.FFF}>
              Forget your login details?Get help siging in
            </Text>
          </View>

          <Text style={styles.GGG}>OR</Text>
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              name="facebook-square"
              color="white"
              size={25}
              style={{ marginRight: 20 }}
            />
            <Text style={styles.HHH}>Log in with Facebook</Text>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "#E1306C" }}>
          <TouchableOpacity style={styles.KKK}>
            <Text style={styles.JJJ}>Don't have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstcontainer: {
    flex: 1,
    backgroundColor: "#E1306C",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#C13584"
  },
  AAA: {
    color: "#fff",
    fontSize: 20
  },
  insta: {
    color: "#fff",
    fontSize: 55,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    marginTop: 60
  },
  BBB: {
    backgroundColor: "#fff",
    color: "red",
    width: "90%",
    height: 40,
    margin: 20,
    marginTop: 10
  },
  DDD: {
    backgroundColor: "#fff",
    color: "red",
    width: "90%",
    height: 40,
    margin: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  },
  FFF: {
    flexDirection: "row",
    color: "#fff"
  },
  HHH: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  JJJ: {
    color: "#fff",
    textAlign: "center",
    alignItems: "center"
  }
});
