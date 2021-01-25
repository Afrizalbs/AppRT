import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from '../../components';

const DWTetap = () => {
  return (
    <View style={styles.page}>
      <Card />
      <Card />
      <Card />
    </View>
  );
};

export default DWTetap;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
