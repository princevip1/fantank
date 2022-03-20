// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Screen/Auth/SignIn';
import OnBoarding from '../Screen/OnBoarding/Index';
import Forgate from '../Screen/Auth/Forgate/Forgate';
import CheckEmail from '../Screen/Auth/CheckEmail/CheckEmail';
import ResetPasssword from '../Screen/Auth/ResetPassword/ResetPasssword';
import AwesomeMessage from '../Screen/Auth/AwesomeMessage/AwesomeMessage';
import ArtistPage from '../Screen/ArtistPage/ArtistPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();







const ArtistStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{
        headerShown: false,
      }} component={ArtistPage} />
      <Stack.Screen name="Homex" options={{
        headerShown: false,
      }} component={ArtistPage} />
    </Stack.Navigator>
  )
}


const HomeStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home1" options={{
        headerShown: false,
      }} component={ArtistStack} />
      <Tab.Screen name="Home2" options={{
        headerShown: false,
      }} component={ArtistStack} />
      <Tab.Screen name="Home3" options={{
        headerShown: false,
      }} component={ArtistStack} />
      <Tab.Screen name="Home4" options={{
        headerShown: false,
      }} component={ArtistStack} />
      <Tab.Screen name="Home5" options={{
        headerShown: false,
      }} component={ArtistStack} />

    </Tab.Navigator>
  )
}




function Navigation() {
  return (

    <Stack.Navigator initialRouteName='onboarding'>
      <Stack.Screen options={{
        headerShown: false,
      }} name="onboarding" component={OnBoarding} />
      <Stack.Screen name="signin" options={{
        headerShown: false,
      }} component={SignIn} />
      <Stack.Screen name="forgate" options={{
        headerTitle: (props) => ( // App Logo
          <Image
            style={{ width: 200, height: 50 }}
            source={require('../assets/logo2.png')}
            resizeMode='contain'
          />
        ),
        headerStyle: {
          backgroundColor: "black",

        },
        headerTintColor: '#fff',
      }} component={Forgate} />
      <Stack.Screen name="emailCheck" options={{
        headerTitle: (props) => ( // App Logo
          <Image
            style={{ width: 200, height: 50 }}
            source={require('../assets/logo2.png')}
            resizeMode='contain'
          />
        ),
        headerStyle: {
          backgroundColor: "black",

        },
        headerTintColor: '#fff',
      }} component={CheckEmail} />
      <Stack.Screen name="resetPassword" options={{
        headerTitle: (props) => ( // App Logo
          <Image
            style={{ width: 200, height: 50 }}
            source={require('../assets/logo2.png')}
            resizeMode='contain'
          />
        ),
        headerStyle: {
          backgroundColor: "black",

        },
        headerTintColor: '#fff',
      }} component={ResetPasssword} />
      <Stack.Screen name="awesomeMessage" options={{
        headerTitle: (props) => ( // App Logo
          <Image
            style={{ width: 200, height: 50 }}
            source={require('../assets/logo2.png')}
            resizeMode='contain'
          />
        ),
        headerStyle: {
          backgroundColor: "black",

        },
        headerTintColor: '#fff',



        //  headerShown : false,
      }} component={AwesomeMessage} />

      <Stack.Screen options={{
        headerShown: false,
      }} name="artistPage" component={HomeStack} />
    </Stack.Navigator>

  );
}

export default Navigation;