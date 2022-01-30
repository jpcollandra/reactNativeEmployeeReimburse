import React, { useState, Component, useEffect } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { ListPage } from "./listPage";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigate } from "react-router-dom";
import { LandingPage } from "./landingPage";

export function ManagerPage({ navigation }) {

function logout(){
  Alert.alert(
    "Logout",
    "Are you sure you want to logout?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => asyncStorageClear()},
    ],
    { cancelable: false }
  );
}

function asyncStorageClear(){
  AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
}


  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <View style={styles.iconRow}>
            <EvilIconsIcon name="navicon" style={styles.icon}></EvilIconsIcon>
            <Text style={styles.meWalmart}>Me@Walmart</Text>
            <TouchableOpacity
                onPress={() => logout()} 
              style={styles.button}
            >
              <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.heyThere}>Hey there</Text>
        <View style={styles.rect4}>
          <Text style={styles.yourSchedule}>Your Schedule</Text>
          <Text style={styles.manager}>Manager</Text>
          <View style={styles.icon7Row}>
            <FontAwesomeIcon
              name="clock-o"
              style={styles.icon7}
            ></FontAwesomeIcon>
            <Text style={styles.yourSchedule1}>7:30am - 4pm</Text>
          </View>
          <View style={styles.icon8Row}>
            <MaterialCommunityIconsIcon
              name="silverware-fork-knife"
              style={styles.icon8}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.yourSchedule2}>12:00pm - 12.30pm</Text>
          </View>
        </View>
        <View style={styles.rect5}>
          <Text style={styles.currentStatus}>Current status</Text>
          <Text style={styles.clockedIn}>Clocked in</Text>
        </View>
      </View>
      <View style={styles.icon2StackRow}>
        <View style={styles.icon2Stack}>
          <EntypoIcon name="home" style={styles.icon2}></EntypoIcon>
          <Text style={styles.home}>Home</Text>
        </View>
        <View style={styles.icon3Column}>
          <FontAwesomeIcon
            name="address-card-o"
            style={styles.icon3}
          ></FontAwesomeIcon>
          <Text style={styles.me2}>Me</Text>
        </View>
        <View style={styles.icon4Column}>
          <EntypoIcon name="magnifying-glass" style={styles.icon4}></EntypoIcon>
          <Text style={styles.askSam}>Ask Sam</Text>
        </View>
        <View style={styles.icon5Column}>
          <MaterialCommunityIconsIcon
            name="account-group"
            style={styles.icon5}
            onPress={() => navigation.navigate(ListPage)}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.myTeam}>My Team</Text>
        </View>
        <View style={styles.icon6Column}>
          <FeatherIcon name="inbox" style={styles.icon6}></FeatherIcon>
          <Text style={styles.inbox}>Inbox</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: "#ffc600",
    fontSize: 24,
  },
  button: {
    width: 65,
    height: 24,
    backgroundColor: "rgba(241,8,8,1)",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 13,
    marginLeft: 150,
    marginTop: 10,
  },
  logout: {
    fontFamily: "Gill Sans",
    color: "rgba(255,239,239,1)",
    marginTop: 2,
    marginLeft: 11,
  },
  rect: {
    width: 482,
    height: 927,
    backgroundColor: "#E6E6E6",
    marginTop: -188,
    marginLeft: -33,
  },
  rect2: {
    width: 406,
    height: 84,
    backgroundColor: "rgba(0,114,206,1)",
    flexDirection: "row",
    marginTop: 188,
    marginLeft: 20,
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 35,
    width: 40,
  },
  meWalmart: {
    fontFamily: "Gill Sans",
    color: "rgba(241,239,239,1)",
    marginLeft: 13,
    marginTop: 9,
  },
  iconRow: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: 238,
    marginLeft: 24,
    marginTop: 36,
  },
  heyThere: {
    fontFamily: "Gill Sans",
    color: "#121212",
    fontSize: 18,
    marginTop: 28,
    marginLeft: 66,
  },
  rect4: {
    width: 311,
    height: 165,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 12,
    shadowColor: "rgba(74,74,74,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.27,
    shadowRadius: 0,
    marginTop: 40,
    marginLeft: 64,
  },
  yourSchedule: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    marginTop: 14,
    marginLeft: 15,
  },
  manager: {
    fontFamily: "Gill Sans",
    color: "#121212",
    fontSize: 18,
    marginTop: 8,
    marginLeft: 15,
  },
  icon7: {
    color: "rgba(128,128,128,1)",
    fontSize: 15,
    height: 15,
    width: 13,
  },
  yourSchedule1: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    marginLeft: 5,
    marginTop: 1,
  },
  icon7Row: {
    height: 15,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 15,
    marginRight: 203,
  },
  icon8: {
    color: "rgba(128,128,128,1)",
    fontSize: 15,
    height: 16,
    width: 15,
  },
  yourSchedule2: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    marginLeft: 4,
  },
  icon8Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 13,
    marginRight: 172,
  },
  rect5: {
    width: 311,
    height: 85,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 12,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.48,
    shadowRadius: 0,
    marginTop: 44,
    marginLeft: 64,
  },
  currentStatus: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    marginTop: 17,
    marginLeft: 20,
  },
  clockedIn: {
    fontFamily: "Gill Sans",
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 20,
  },
  icon2: {
    top: 0,
    left: 4,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 25,
  },
  home: {
    top: 27,
    left: 0,
    position: "absolute",
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
  },
  icon2Stack: {
    width: 35,
    height: 42,
    marginTop: 1,
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
  },
  me2: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    marginLeft: 6,
  },
  icon3Column: {
    width: 29,
    marginLeft: 33,
    marginTop: 3,
    marginBottom: 1,
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 7,
  },
  askSam: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
  },
  icon4Column: {
    width: 48,
    marginLeft: 38,
    marginBottom: 1,
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 12,
  },
  myTeam: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    marginTop: 1,
  },
  icon5Column: {
    width: 49,
    marginLeft: 19,
    marginBottom: 1,
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 4,
  },
  inbox: {
    fontFamily: "Gill Sans",
    color: "rgba(155,155,155,1)",
    fontSize: 12,
  },
  icon6Column: {
    width: 33,
    marginLeft: 25,
    marginTop: 3,
  },
  icon2StackRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 27,
    marginRight: 39,
  },
});
