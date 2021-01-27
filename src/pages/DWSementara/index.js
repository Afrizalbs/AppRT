import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from '../../components';

const DWSementara = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Card
        nama="Afrizal Bagas"
        alamat="Gondang timur dalam 2"
        onPress={() => navigation.navigate('Detail')}
      />
      <Card
        nama="Tuban"
        alamat="Gondang timur dalam 3"
        onPress={() => navigation.navigate('Detail')}
      />
      <Card
        nama="Wahider"
        alamat="Gondang timur dalam 4"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default DWSementara;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
