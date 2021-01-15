import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors} from '../../../config/colors';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nama}>Alexander Sugiono</Text>
      <Text style={styles.alamat}>Jl. Gondang Timur Dalam RT03/RW01</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ketiga,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.kedua,
  },
  nama: {
    fontSize: 16,
    color: colors.text.utama,
  },
  alamat: {
    fontSize: 14,
    color: colors.text.utama,
  },
});
