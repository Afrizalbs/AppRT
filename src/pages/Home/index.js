import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card, Header} from '../../components';
import {colors} from '../../config/colors';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.openDrawer()} />
      <View style={styles.content}>
        <Text style={styles.title}>Data Warga Tetap</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.ketiga,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
    paddingHorizontal: 15,
    color: colors.utama,
  },
  content: {
    backgroundColor: colors.ketiga,
    flex: 1,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
