import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WargaSementara, WargaTetap} from '..';
import {colors} from '../../config/colors';

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
        activeTintColor: colors.utama,
        indicatorStyle: {backgroundColor: colors.utama},
        pressColor: colors.kedua,
      }}
      swipeEnabled={true}>
      <Tab.Screen name="Warga Tetap" component={WargaTetap} />
      <Tab.Screen name="Warga Sementara" component={WargaSementara} />
    </Tab.Navigator>
  );
};

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text>Kategori</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
    paddingHorizontal: 15,
    color: colors.utama,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
