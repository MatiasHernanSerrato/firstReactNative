import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PostFeed from './components/container';

const InstaMatt = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tempNav}>
        <Text>InstaMatt</Text>
      </View>
      <PostFeed />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100 + '%',
    height: 100 + '%',
  },
  tempNav: {
    width: 100 + '%',
    // alignSelf: 'stretch', in order to avoid the width with the % symbol
    height: 55,
    marginTop: 25,
    backgroundColor: 'rgb(250, 250, 250)',
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InstaMatt;
