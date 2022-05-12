import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 1500);
  });
  return (
    <View style={styles.container}>
      <Image source={ILLogo} style={styles.logo} />
      <Text style={styles.title}>AppRT</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  logo: {
    width: 86,
    height: 86,
  },
});
