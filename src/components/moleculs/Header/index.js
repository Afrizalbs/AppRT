import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICMenu, ILHeader} from '../../../assets';
import {colors} from '../../../config/colors';
import HeaderSecondary from './HeaderSecondary';

const Header = ({onPress, type, label, onBack}) => {
  if (type === 'Secondary') {
    return <HeaderSecondary onPress={onPress} label={label} onBack={onBack} />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={ILHeader} style={styles.image}>
        <TouchableOpacity onPress={onPress}>
          <Image source={ICMenu} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>
          Selamat Datang di aplikasi RT.03 RW.02 Kelurahan Bulusan
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 250,
    display: 'flex',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 30,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.kedua,
  },
  icon: {
    height: 30,
    width: 30,
  },
});
