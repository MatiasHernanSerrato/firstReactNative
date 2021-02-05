import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Camera = () => {
  const cameraRef = useRef();
  return (
    <View style={styles.container}>
      <RNCamera
        style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}
        type={RNCamera.Constants.Type.back}
        ref={cameraRef}
      />
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
    backgroundColor: 'black'
  }
})

export default Camera