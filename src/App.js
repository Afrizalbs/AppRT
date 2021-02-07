/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox} from 'react-native';
import Router from './router';

const App = () => {
  LogBox.ignoreLogs(['Setting a timer']);
  LogBox.ignoreLogs(['AsyncStorage has been']);
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
