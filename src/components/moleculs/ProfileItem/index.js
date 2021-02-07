import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/colors';

const ProfileItem = ({label, desc}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.kedua,
    backgroundColor: 'white',
  },
  label: {
    color: colors.utama,
    fontSize: 14,
  },
  desc: {
    color: colors.text.utama,
    fontSize: 16,
    marginTop: 6,
    textTransform: 'capitalize',
  },
});
