import React, { useState } from 'react';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useEffect } from 'react/cjs/react.development';

const Login = ({ navigation, route }) => {
  const register = () => navigation.navigate('Register');
  const [biometryType, setBiometryType] = useState(null);

  useEffect(() => {
    FingerprintScanner.isSensorAvailable().then(type => {
      setBiometryType(type)
    })
      .catch(err => console.log('isSensorAvailable error => ', err))
  }, [])

  const getMessage = () => {
    if (biometryType == 'Face ID') {
      return 'Scan your Face on the device to continue'
    } else {
      return 'Scan your Fingerprint on the device scanner to continue'
    }
  }

  const showAuthenticationDialog = () => {
    if (biometryType !== null && biometryType !== undefined) {
      FingerprintScanner.authenticate({
        description: getMessage(),
        passcodeFallback: true,
      }).then(() => {
        alert('que lindo que sos')
        return navigation.navigate('Tabs');
      })
        .catch((err) => {
          console.log('Authentication error is => ', err);
        });
    } else {
      console.log('biometric authentication is not available');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: 100 + '%', marginTop: 140 }}>
        <View>
          <Text style={styles.title}>InstaMatt</Text>
        </View>
        <View>
          <Text style={styles.greyText}>
            Sign up to see photos and videos from your friends.
        </Text>
        </View>
        <TouchableOpacity onPress={showAuthenticationDialog} style={styles.loginButton}>
          <Text style={styles.loginText}>Log In with Face ID or Passcode</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.separateLine} />
          <Text style={{ color: '#8e8e8e', fontWeight: 'bold', marginRight: 5, marginLeft: 5 }}> OR </Text>
          <View style={styles.separateLine} />
        </View>
        <View style={{ marginBottom: 150 }}>
          <Button onPress={register} title={'Sign up with email or phone number'} />
        </View>
      </View>
      <View style={{ marginTop: 10, height: 10 + '%' }}>
        <Text style={{ textAlign: 'center', color: '#8e8e8e', }}>from</Text>
        <Text style={{ textAlign: 'center', color: '#8e8e8e', fontWeight: '800' }}>MATT SERRATO</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100 + '%',
    height: 100 + '%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'white'
  },
  orContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  separateLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#dbdbdb',
    marginTop: 8
  },
  title: {
    color: 'black',
    fontStyle: 'italic',
    marginBottom: 20,
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'center'
  },
  greyText: {
    color: '#8e8e8e',
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center'
  },
  loginButton: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#0095f6',
    justifyContent: 'center',
    width: 100 + '%',
    height: 5 + '%',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 'bold',
  }
})

export default Login;