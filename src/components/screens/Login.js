import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const Login = ({navigation, route}) => {
  const login = () => navigation.navigate('MainFeed');
  return (
    <View style={styles.container}>
      <View style={{flex: 1, width: 100 +'%', marginTop: 140}}>
      <View>
        <Text style={styles.title}>InstaMatt</Text>
      </View>
      <View>
        <Text style={styles.greyText}>
        Sign up to see photos and videos from your friends.
        </Text>
      </View> 
      <TouchableOpacity style={styles.loginButton} onPress={login}>
          <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.separateLine} />
          <Text style={{color: '#8e8e8e',fontWeight: 'bold', marginRight: 5, marginLeft: 5}}> OR </Text>
        <View style={styles.separateLine} />
      </View>
      <View style={{marginBottom: 150}}>
        <Button onPress={()=> alert('This should go to sing up screen')} title={'Sign up with email or phone number'}/>
      </View>
      </View>
      <View style={{marginTop: 10,height: 10+ '%'}}>
        <Text style={{textAlign: 'center', color: '#8e8e8e',}}>from</Text>
        <Text style={{textAlign: 'center', color: '#8e8e8e', fontWeight:'800'}}>MATT SERRATO</Text>
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
    padding: 20,
    margin: 10,
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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