import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICNext} from '../../../assets';
import {colors} from '../../../config/colors';

const Card = ({onPress, nama, alamat}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.alamat}>{alamat}</Text>
      </View>

      <Image source={ICNext} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.kedua,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nama: {
    fontSize: 16,
    color: colors.text.utama,
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  alamat: {
    fontSize: 14,
    color: colors.text.utama,
  },
  icon: {
    height: 24,
    width: 24,
  },
});
