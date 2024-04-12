import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import BackGroundImg from '../../assets/splash.png';

export function SignIn() {
  return (
    <View style={styles.ScreenWrapper}>
      <Image source={BackGroundImg} style={styles.BackGroundImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  ScreenWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  BackGroundImg: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
