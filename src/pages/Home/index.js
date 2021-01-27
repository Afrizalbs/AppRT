import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../../components';
import {colors} from '../../config/colors';
import DWSementara from '../DWSementara';
import DWTetap from '../DWTetap';

const Tab = createMaterialTopTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          fontWeight: '600',
          textTransform: 'capitalize',
        },
        activeTintColor: '#192a56',
        indicatorStyle: {backgroundColor: '#192a56'},
        pressColor: colors.kedua,
      }}
      swipeEnabled={false}>
      <Tab.Screen name="Warga Tetap" component={DWTetap} />
      <Tab.Screen name="Warga Sementara" component={DWSementara} />
    </Tab.Navigator>
  );
};

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.openDrawer()} />
      <View style={styles.content}>
        <TabScreen />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.ketiga,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
    paddingHorizontal: 15,
    color: colors.utama,
  },
  content: {
    backgroundColor: colors.ketiga,
    flex: 1,
    marginTop: -20,
  },
});
