import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../config';

const RegistrasiScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}>
        <View>
          <Gap height={35} />
          <Text style={styles.title}>Registrasi Akun</Text>
          <Gap height={50} />
          <Input label="Email" keyboardType="email-address" />
          <Gap height={20} />
          <Input label="Password" secureTextEntry />
        </View>
        <View>
          <Gap height={20} />
          <Button
            label="Daftar"
            onPress={() => navigation.navigate('CreateDataScreen')}
          />
          <Gap height={10} />
          <Link
            LinkText="Sudah punya akun? Masuk disini"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegistrasiScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: colors.primary,
    fontSize: 20,
    textAlign: 'center',
  },
});
