import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({placeholder}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="silver"
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'silver',
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 14,
    color: 'black',
  },
});
