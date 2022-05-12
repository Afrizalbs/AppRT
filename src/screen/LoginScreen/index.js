import {
  SafeAreaView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Platform,
} from 'react-native';
import React from 'react';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../config';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}>
        <View>
          <Gap height={35} />
          <Text style={styles.title}>Masuk Aplikasi</Text>
          <Gap height={50} />
          <Input label="Email" keyboardType="email-address" />
          <Gap height={20} />
          <Input label="Password" secureTextEntry />
        </View>
        <View>
          <Gap height={20} />
          <Button
            label="Masuk"
            onPress={() => navigation.navigate('RegistrasiScreen')}
          />
          <Gap height={10} />
          <Link
            LinkText="Belum punya akun ? Registrasi disini"
            onPress={() => navigation.navigate('RegistrasiScreen')}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
