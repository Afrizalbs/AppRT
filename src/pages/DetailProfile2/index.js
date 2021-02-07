import React from 'react';
import {ScrollView, StyleSheet, View, Alert} from 'react-native';
import {Button, Header, ProfileItem} from '../../components';
import {Firebase} from '../../config';

const DetailProfile2 = ({navigation, route}) => {
  const dataWarga = route.params;
  console.log('data: ', dataWarga);

  const deleteData = () => {
    Alert.alert(
      'Hapus Data',
      'Anda yakin ingin menghapus data ini ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            Firebase.database()
              .ref('warga/' + 'sementara/' + dataWarga.id)
              .remove()
              .then(() => {
                navigation.navigate('Home');
              }),
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.pages}>
      <Header
        type="Secondary"
        label="Detail Warga Sementara"
        onBack="active"
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.gap(10)} />
        <ProfileItem label="Nama Lengkap" desc={`${dataWarga.data.fullName}`} />
        <ProfileItem label="Jenis Kelamin" desc={`${dataWarga.data.gender}`} />
        <ProfileItem label="Alamat asal" desc={`${dataWarga.data.address}`} />
        <ProfileItem
          label="Alamat sekarang"
          desc={`${dataWarga.data.addressNow}`}
        />
        <ProfileItem
          label="Nomor Telepon"
          desc={`${dataWarga.data.phoneNumber}`}
        />
        <ProfileItem label="Pekerjaan" desc={`${dataWarga.data.job}`} />
        <ProfileItem label="Status" desc={`${dataWarga.data.relationship}`} />
        <View style={styles.wrapper}>
          <Button label="Hapus Data" onPress={deleteData} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailProfile2;

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
