import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';

const Login = ({ navigation, route }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleCrentials = (text, field) => {
    if (field === 'username') return setUserName(text);
    return setPassword(text);
  }
  const register = () => {

    if (username === 'Matt' && password === 'admin') return navigation.navigate('Tabs');
    return alert('User not found')
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: 100 + '%', marginTop: 140 }}>
        <View>
          <Text style={styles.title}>InstaMatt</Text>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.separateLine} />
          <Text style={{ color: '#8e8e8e', fontWeight: 'bold', marginRight: 5, marginLeft: 5 }}> OR </Text>
          <View style={styles.separateLine} />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput value={username} autoCorrect={false} onChangeText={text => handleCrentials(text, 'username')} placeholder={'Phone number, username or email'} style={styles.input} />
          <TextInput value={password} autoCorrect={false} onChangeText={text => handleCrentials(text, 'password')} placeholder={'Password'} style={styles.input} secureTextEntry />
          <Button title={'Forgot password?'} />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
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
  input: {
    color: '#8e8e8e',
    backgroundColor: '#fafafa',
    height: 38,
    padding: 10,
    borderColor: '#8e8e8e',
    borderWidth: 0.2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10
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