import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {ILAvoidContact, ILMasker, ILWashHand} from '../../assets';

const OnBoarding = ({navigation}) => {
  const skip = () => {
    navigation.replace('MainApp');
  };
  const done = () => {
    navigation.replace('MainApp');
  };

  return (
    <Onboarding
      onSkip={skip}
      onDone={done}
      pages={[
        {
          backgroundColor: '#D9423D',
          image: <Image source={ILMasker} style={styles.illustration} />,
          title: 'RT 03 cegah Covid-19',
          subtitle: 'Pakai masker jika keluar rumah',
        },
        {
          backgroundColor: '#FFCEB0',
          image: <Image source={ILWashHand} style={styles.illustration} />,
          title: 'Covid-19 itu nyata',
          subtitle: 'Cuci tangan sehabis keluar rumah',
        },
        {
          backgroundColor: '#49A57F',
          image: <Image source={ILAvoidContact} style={styles.illustration} />,
          title: 'Sayangi keluarga anda',
          subtitle: 'Hindari kontak langsung dengan orang lain',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  illustration: {
    height: 200,
    width: 200,
  },
});

export default OnBoarding;
