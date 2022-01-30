/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useEffect, useState } from "react";
import { LandingPage } from "../screens/landingPage";
import { LoginPage } from "../screens/loginPage";
import { ManagerPage } from "../screens/managerPage";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListPage } from "../screens/listPage";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator<StackParamList>();

export type StackParamList = {
  LandingPage: undefined;
  LoginPage: undefined;
  ManagerPage: undefined;
  ListPage: undefined;
};

export default function Navigation() {

  const [user, setUser] = useState({
    username: "",
    isAuthorized: false,
    isAdmin: false,
  })

  async function getUser() {
    const username = await AsyncStorage.getItem('username');
    const isAuthorized = Boolean(await AsyncStorage.getItem("isAuthorized"));
    const isAdmin = Boolean(await AsyncStorage.getItem("isAdmin"));
    setUser({username, isAuthorized, isAdmin});
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        {user.isAdmin ? (
          // Screens for logged in users
          <Stack.Group >
          <Stack.Screen name="ManagerPage" component={ManagerPage} options={{headerShown:false}}/>
          <Stack.Screen name="ListPage" component={ListPage} options={{headerShown:false}}/>
          </Stack.Group>
        ) : (
          // No Auth screens
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
             <Stack.Screen name="LoginPage" options={{headerShown:false}}>
               {props => (<LoginPage {... props} updateUser = {setUser}/>)} 
             </Stack.Screen>
          </Stack.Group>
        )}</Stack.Navigator>
    </NavigationContainer>
  
  );

  }



