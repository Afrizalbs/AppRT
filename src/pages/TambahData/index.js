import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from '../../components';

const TambahData = () => {
  return (
    <View style={styles.page}>
      <Text>Tambah Data Warga Tetap</Text>
      <Input placeholder="Nama Lengkap sesuai KTP" />
      <Input placeholder="Alamat asal sesuai KTP" />
      <Input placeholder="Alamat sekarang" />
      <Input placeholder="Nomor Telepon" />
      <Input placeholder="Pekerjaan" />
      <Button />
    </View>
  );
};

export default TambahData;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
  },
});
