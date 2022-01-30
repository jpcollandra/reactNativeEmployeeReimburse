import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Linking
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ManagerPage } from "./managerPage";
import { StackParamList } from "../navigation";
import { LoginPage } from "./loginPage";
import { Button } from "react-native-elements";

const Stack = createNativeStackNavigator<StackParamList>();

export function LandingPage({ navigation }) {
  return (   
    <View>
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/walmartbuid.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.iconRow}>
            <Icon name="globe" style={styles.icon}></Icon>
            <Text style={styles.en}>EN</Text>
          </View>
          <Text style={styles.loremIpsum}></Text>
          <Text style={styles.helloAssociates}>Hello Associates!</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(LoginPage)} 
            style={styles.button}
          >
            <Text style={styles.signIn}>Sign In</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.rect}>
          <View style={styles.rect2Stack}>
            <View style={styles.rect2}>
              <Text style={styles.candidates}>Candidates</Text>
              <Text style={styles.loremIpsum2}>
                Accepted an offer?{"\n"}Get ready to start!
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(LoginPage)} 
                style={styles.button2}
              >
                <Text style={styles.signIn2}>Sign in</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/images/worker-guy.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </View>
          <View style={styles.rect3Stack}>
            <View style={styles.rect3}>
              <Text style={styles.guests}>Guests</Text>
              <Text style={styles.loremIpsum3}>
                Explore jobs and learn{"\n"}about Walmart
              </Text>
              <TouchableOpacity
                 onPress={() => Linking.openURL('https://careers.walmart.com/')}
                style={styles.button3}
              >
                <Text style={styles.explore}>Explore</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/images/worker-woman.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </View>
        </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 0,
    width: 468,
    height: 741,
    position: "absolute",
    left: 0
  },
  image_imageStyle: {},
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 27,
    height: 30,
    width: 27
  },
  en: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 16,
    marginLeft: 6,
    marginTop: 5
  },
  iconRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 92,
    marginLeft: 375,
    marginRight: 40
  },
  loremIpsum: {
    fontFamily: "Gill Sans",
    color: "#121212",
    marginTop: 31,
    marginLeft: 179
  },
  helloAssociates: {
    fontFamily: "GillSans",
    color: "#121212",
    fontSize: 25,
    marginTop: 24,
    marginLeft: 170
  },
  button: {
    width: 134,
    height: 46,
    backgroundColor: "rgba(0,114,206,1)",
    borderRadius: 93,
    marginTop: 9,
    marginLeft: 191
  },
  signIn: {
    fontFamily: "Gill Sans",
    color: "rgba(253,252,252,1)",
    marginTop: 15,
    marginLeft: 46
  },
  rect: {
    top: 467,
    left: 20,
    width: 492,
    height: 431,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  rect2: {
    top: 15,
    left: 0,
    width: 321,
    height: 136,
    position: "absolute",
    backgroundColor: "rgba(255,252,252,1)",
    borderRadius: 12
  },
  candidates: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    marginTop: 14,
    marginLeft: 21
  },
  loremIpsum2: {
    fontFamily: "Gill Sans",
    color: "#121212",
    fontSize: 17,
    marginTop: 6,
    marginLeft: 21
  },
  button2: {
    width: 78,
    height: 32,
    backgroundColor: "rgba(255,251,251,1)",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 18,
    marginTop: 17,
    marginLeft: 21
  },
  signIn2: {
    fontFamily: "Gill Sans",
    color: "#121212",
    marginTop: 8,
    marginLeft: 17
  },
  image2: {
    top: 0,
    left: 153,
    width: 218,
    height: 151,
    position: "absolute"
  },
  rect2Stack: {
    width: 371,
    height: 151,
    marginTop: 26,
    marginLeft: 77
  },
  rect3: {
    top: 0,
    left: 0,
    width: 321,
    height: 136,
    position: "absolute",
    backgroundColor: "rgba(255,252,252,1)",
    borderRadius: 12
  },
  guests: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    marginTop: 19,
    marginLeft: 21
  },
  loremIpsum3: {
    fontFamily: "Gill Sans",
    color: "#121212",
    fontSize: 17,
    marginTop: 8,
    marginLeft: 21
  },
  button3: {
    width: 78,
    height: 32,
    backgroundColor: "rgba(255,251,251,1)",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 18,
    marginTop: 13,
    marginLeft: 21
  },
  explore: {
    fontFamily: "Gill Sans",
    color: "#121212",
    marginTop: 8,
    marginLeft: 16
  },
  image3: {
    top: 8,
    left: 204,
    width: 127,
    height: 129,
    position: "absolute"
  },
  rect3Stack: {
    width: 331,
    height: 137,
    marginTop: 33,
    marginLeft: 77
  },
  imageStack: {
    width: 512,
    height: 898,
    marginTop: -52,
    marginLeft: -70
  }
});


