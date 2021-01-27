import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Header, ProfileItem} from '../../components';

const DetailProfile = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header
        type="Secondary"
        label="Details"
        onBack="active"
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.gap(10)} />
        <ProfileItem label="Nama Lengkap" desc="Afrizal Bagas Santoso" />
        <ProfileItem label="Jenis Kelamin" desc="Pria" />
        <ProfileItem label="Alamat asal" desc="Jl. Arya Mukti" />
        <ProfileItem label="Alamat sekarang" desc="Jl. Gondang Timur 2 " />
        <ProfileItem label="Nomor Telepon" desc="085855504398" />
        <ProfileItem label="Pekerjaan" desc="Mahasiswa" />
        <ProfileItem label="Status" desc="Belum Kawin" />
        <View style={styles.wrapper}>
          <Button label="Hapus Data" />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailProfile;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  gap: (x) => ({
    height: x,
  }),
});
