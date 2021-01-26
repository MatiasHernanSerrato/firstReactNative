import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Camera = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert('Your function in here')}>
        <Text>Camera</Text>
      </TouchableOpacity>
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
  }
})

export default Camera