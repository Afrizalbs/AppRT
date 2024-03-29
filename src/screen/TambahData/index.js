import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import {Button, Header, Input} from '../../components';
import {Firebase} from '../../config';
import {colors} from '../../config/colors';

const TambahData = ({navigation}) => {
  const {handleSubmit, control, errors, reset} = useForm();
  const resetForm = () => {
    reset({
      fullName: '',
      gender: null,
      address: '',
      addressNow: '',
      phoneNumber: '',
      job: '',
      relationship: null,
    });
  };
  const onSubmit = () => {
    // Alert.alert('submit data');
    navigation.navigate('MainApp');
    // Firebase.database()
    //   .ref('warga/' + 'tetap/')
    //   .push(data)
    //   .then(() => {
    //     resetForm();
    //     navigation.reset({index: 0, routes: [{name: 'Home'}]});
    //   });
  };

  const [itemGender] = useState([
    {
      id: 1,
      label: '-',
      value: null,
    },
    {
      id: 2,
      label: 'Pria',
      value: 'pria',
    },
    {
      id: 3,
      label: 'Wanita',
      value: 'wanita',
    },
  ]);
  const [itemRelationship] = useState([
    {
      id: 1,
      label: '-',
      value: null,
    },
    {
      id: 2,
      label: 'Belum Kawin',
      value: 'Belum Kawin',
    },
    {
      id: 3,
      label: 'Kawin',
      value: 'Kawin',
    },
    {
      id: 4,
      label: 'Cerai',
      value: 'Cerai',
    },
  ]);

  return (
    <View style={styles.page}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Tambah Data Anda</Text>
        <View style={styles.gap(20)} />
        <Controller
          name={'fullName'}
          control={control}
          rules={{
            required: {value: true, message: 'Name is required'},
          }}
          defaultValue=""
          render={({onChange, value}) => (
            <Input
              label="Nama Lengkap"
              onChangeText={(v) => onChange(v)}
              value={value}
            />
          )}
        />
        {errors.fullName && (
          <Text style={styles.errorText}>{errors.fullName.message}</Text>
        )}
        <View style={styles.gap(25)} />
        <Controller
          name={'gender'}
          control={control}
          defaultValue=""
          render={({onChange, value}) => (
            <Input
              label="Jenis Kelamin"
              select
              selectItem={itemGender}
              onValueChange={(v) => onChange(v)}
              selectedValue={value}
            />
          )}
        />
        <View style={styles.gap(25)} />
        <Controller
          name={'address'}
          control={control}
          rules={{
            required: {value: true, message: 'Address is required'},
          }}
          defaultValue=""
          render={({onChange, value}) => (
            <Input
              label="Alamat KTP"
              onChangeText={(v) => onChange(v)}
              value={value}
            />
          )}
        />
        {errors.address && (
          <Text style={styles.errorText}>{errors.address.message}</Text>
        )}
        <View style={styles.gap(25)} />
        <Controller
          name={'addressNow'}
          control={control}
          rules={{
            required: {value: true, message: 'Address is required'},
          }}
          defaultValue=""
          render={({onChange, value}) => (
            <Input
              label="Alamat sekarang"
              onChangeText={(v) => onChange(v)}
              value={value}
            />
          )}
        />
        {errors.addressNow && (
          <Text style={styles.errorText}>{errors.addressNow.message}</Text>
        )}
        <View style={styles.gap(25)} />
        <Controller
          name={'phoneNumber'}
          control={control}
          rules={{
            required: {value: true, message: 'phone number is required'},
          }}
          defaultValue=""
          render={({onChange, value}) => (
            <Input
              label="Nomor Telepon"
              keyboardType="numeric"
              onChangeText={(v) => onChange(v)}
              value={value}
            />
          )}
        />
        {errors.phoneNumber && (
          <Text style={styles.errorText}>{errors.phoneNumber.message}</Text>
        )}
        <View style={styles.gap(25)} />
        <Controller
          name={'job'}
          control={control}
          rules={{
            required: {value: true, message: 'job is required'},
          }}
          defaultValue=""
          render={({onChange, value}) => (
            <Input
              label="Pekerjaan"
              onChangeText={(v) => onChange(v)}
              value={value}
            />
          )}
        />
        {errors.job && (
          <Text style={styles.errorText}>{errors.job.message}</Text>
        )}
        <View style={styles.gap(25)} />
        <Controller
          name={'relationship'}
          control={control}
          defaultValue=""
          render={({onChange, value}) => (
            <Input
              select
              selectItem={itemRelationship}
              label="Status"
              onValueChange={(v) => onChange(v)}
              selectedValue={value}
            />
          )}
        />
        <View style={styles.gap(40)} />
        <Button label="Tambah" onPress={handleSubmit(onSubmit)} />
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
  errorText: {
    fontSize: 11,
    color: colors.text.error,
  },
});
