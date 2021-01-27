import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Header, Input} from '../../components';
import {colors} from '../../config/colors';

const TambahData = ({navigation}) => {
  const [itemGender] = useState([
    {
      id: 1,
      label: 'Pria',
      value: 'pria',
    },
    {
      id: 2,
      label: 'Wanita',
      value: 'wanita',
    },
  ]);
  const [itemStatus] = useState([
    {
      id: 1,
      label: 'Belum Kawin',
      value: 'Belum Kawin',
    },
    {
      id: 2,
      label: 'Kawin',
      value: 'Kawin',
    },
    {
      id: 3,
      label: 'Cerai',
      value: 'Cerai',
    },
  ]);

  return (
    <View style={styles.page}>
      <Header
        type="Secondary"
        label="tambah data"
        onPress={() => navigation.openDrawer()}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Data Warga Tetap</Text>
        <View style={styles.gap(40)} />
        <Input label="Nama Lengkap sesuai KTP" />
        <View style={styles.gap(25)} />
        <Input select selectItem={itemGender} label="Jenis Kelamin" />
        <View style={styles.gap(25)} />
        <Input label="Alamat asal sesuai KTP" />
        <View style={styles.gap(25)} />
        <Input label="Alamat sekarang" />
        <View style={styles.gap(25)} />
        <Input label="Nomor Telepon" keyboardType="numeric" />
        <View style={styles.gap(25)} />
        <Input label="Pekerjaan" />
        <View style={styles.gap(25)} />
        <Input select selectItem={itemStatus} label="Status" />
        <View style={styles.gap(40)} />
        <Button label="Tambah" onPress={() => {}} />
        <View style={styles.gap(40)} />
      </ScrollView>
    </View>
  );
};

export default TambahData;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  gap: (x) => ({height: x}),
  title: {
    fontSize: 20,
    color: colors.text.utama,
  },
});
