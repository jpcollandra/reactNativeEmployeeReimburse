import React, { useState, useRef, Component } from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ManagerPage } from "./managerPage";
import { FlatList } from "react-native-gesture-handler";

export function LoginPage(props: { navigation: any , updateUser: Function }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const loginPayload = {
      username: username,
      password: password,
    };

    const response = await fetch("https://onewalmart.azurewebsites.net/login", {
      method: "PATCH",
      body: JSON.stringify(loginPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const employee = await response.json();


    props.updateUser({
      username: employee.username,
      isAuthorized: employee.isAuthorized,
      isAdmin: employee.isAdmin,
    });

    await AsyncStorage.setItem("username", employee.username);
    await AsyncStorage.setItem("isAuthorized", employee.isAuthorized.toString());
    await AsyncStorage.setItem("isAdmin", employee.isAdmin.toString());

    props.navigation.navigate("ManagerPage");
  
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/walmartLogo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>

      <View
      style={styles.container1}>
        <TextInput style={styles.input}
        onChangeText={t => setUsername(t)}
        
        placeholder="Enter username"
        autoCapitalize="none"
        >
        </TextInput>
        <TextInput style={styles.input}
        secureTextEntry={true}
        onChangeText={t => setPassword(t)}
        placeholder="Enter password"
        autoCapitalize="none"
        >
        </TextInput>
        <TouchableOpacity
        style ={styles.btn}
        onPress={login}>
          <Text style={styles.txt}>Login</Text>
        </TouchableOpacity>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input:{
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    marginTop: 10
  },
  image: {
    width: 299,
    height: 228,
    marginTop: 50,
    marginLeft: 38
  },
  btn:{
    width: 150,
    height: 40,
    backgroundColor: '#0072CE',
    textAlign: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  txt:{
    color: 'white',
    fontSize: 20,
    fontFamily: 'Gill Sans'
  }

});

