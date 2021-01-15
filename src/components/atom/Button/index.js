import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/colors';

const Button = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Button</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.utama,
    height: 45,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: colors.kedua,
  },
});
