import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {

  const lock = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    console.log('locked')
  }

  const unlock = async () => {
    await ScreenOrientation.unlockAsync()
    console.log('unlocked')
  }

  const getLock = async () => {
    console.log(await ScreenOrientation.getOrientationLockAsync())
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity
        onPress={lock}
      >
        <Text stlye={styles.buttonText}>Lock</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={unlock}
      >
        <Text stlye={styles.buttonText}>Unlock</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={getLock}
      >
        <Text stlye={styles.buttonText}>Get Lock</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    backgroundColor: '#bbb',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#80ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
