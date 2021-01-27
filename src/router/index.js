import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../config/colors';
import {
  DetailProfile,
  Home,
  OnBoarding,
  Splash,
  TambahData,
  TambahWargaSementara,
} from '../pages';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={styles.drawer}
      drawerContentOptions={{
        activeTintColor: colors.kedua,
        pressColor: colors.kedua,
        labelStyle: {
          fontSize: 16,
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tambah warga tetap" component={TambahData} />
      <Drawer.Screen
        name="Tambah warga sementara"
        component={TambahWargaSementara}
      />
    </Drawer.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="MainApp">
      <Stack.Screen name="Splashscreen" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Detail" component={DetailProfile} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'white',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default Router;
