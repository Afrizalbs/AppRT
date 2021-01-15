import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Splash, TambahData, OnBoarding} from '../pages';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tambah Data" component={TambahData} />
    </Drawer.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splashscreen" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;
