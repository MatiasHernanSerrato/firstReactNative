import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = ({navigation, route}) => {
  const previousScreen = route?.params?.previous
    ? route?.params?.previous
    : 'No Screen';
  console.log('dsad', route?.params?.previous);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>SOY MATT</Text>
              <Text style={styles.sectionTitle}>
                PUDE LEVANTAR APP EN MI IPHONE
              </Text>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit{' '}
                <Text style={styles.highlight}>
                  the previous screen was {previousScreen}
                </Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
            </View>
            <View style={styles.sectionContainer} />
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                Touch the button in order to change the screen
                <Button
                  title="Go to Second Screen"
                  onPress={() =>
                    navigation.navigate('SecondScreen', {name: 'Matt Serrato'})
                  }
                />
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Home;
