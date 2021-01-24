import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const SecondScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>This is {route.params.name} profile</Text>
      <View>
        <Button
          title="Go To Home Screen"
          onPress={() =>
            navigation.navigate('Home', {previous: 'SecondScreen'})
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SecondScreen;
