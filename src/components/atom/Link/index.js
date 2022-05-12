import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../config';

const Link = ({LinkText, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.linkText}>{LinkText}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  linkText: {
    color: colors.text.tertiary,
    textAlign: 'center',
  },
});
