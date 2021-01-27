import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {ICBack, ICMenuDark} from '../../../assets';
import {colors} from '../../../config/colors';

const HeaderSecondary = ({label, onPress, onBack}) => {
  if (onBack === 'active') {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={onPress}>
          <Image source={ICBack} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>{label}</Text>
      </View>
    );
  }
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress}>
        <Image source={ICMenuDark} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{label}</Text>
    </View>
  );
};

export default HeaderSecondary;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: colors.kedua,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 30,
    paddingRight: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  icon: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    color: colors.text.utama,
    textTransform: 'capitalize',
  },
});
